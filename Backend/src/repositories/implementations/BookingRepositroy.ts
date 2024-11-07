import { IBooking } from "entities/BookingEntity";
import { IBookingRepository } from "../../repositories/interface/IBookingRepository";
import BookingModel from "../../models/BookingModel";
import mongoose, { ObjectId } from "mongoose";
import Users from "../../models/userModel";
import { IUsers } from "../../entities/UserEntity";
import { WorkspaceModel } from "../../models/workspace";


export default class BookingRepository implements IBookingRepository{


  private userModel:any;

  constructor(){
    this.userModel = Users;
  }

  async getBookingsReport(
    filter: {fullName?:string , userId:{}},
    pageNum: number,
    limitNum: number
  ): Promise<{ bookings: IBooking[]; totalPages: number } | null> {
    try {

      let userIds = [];


    if (filter.fullName) {

      const users = await this.userModel.find({ fullName: { $regex: filter.fullName? filter.fullName : " ", $options: 'i' } }, '_id');
      userIds = users.map((user:IUsers) => user._id);
    }

    const bookingFilter = { ...filter };
    if (userIds.length > 0) {
      bookingFilter.userId = { $in: userIds };
      delete bookingFilter.fullName;
    }


      const totalBookings = await BookingModel.countDocuments(bookingFilter);
      const bookings = await BookingModel.find(bookingFilter)
        .populate('userId')
        .limit(limitNum)
        .skip((pageNum - 1) * limitNum)
        .sort({ date: -1 });

        const result = {bookings , totalPages:Math.ceil(totalBookings/limitNum)}

        return result

    } catch (error) {
      throw error;
    }
  }
  async reportByOwnerId(
    filter: { buildingName?: string; ownerId: string; workspaceId?: {} },
    pageNum: number,
    limitNum: number
  ): Promise<{ bookings: IBooking[]; totalPages: number } | null> {
    try {
      let workspaceIds: ObjectId[] = [];
  
      if (filter.ownerId) {
        const workspaceQuery: any = { ownerId: filter.ownerId };
  
        if (filter.buildingName) {
          workspaceQuery.buildingName = {
            $regex: filter.buildingName,
            $options: 'i',
          };
        }
  
        const workspaces = await WorkspaceModel.find(workspaceQuery);
        workspaceIds = workspaces.map((space: IUsers) => space._id);
      }
  
      const bookingFilter = { ...filter };
  
      if (workspaceIds.length > 0) {
        bookingFilter.workspaceId = { $in: workspaceIds };
        delete bookingFilter.buildingName;
        delete bookingFilter.ownerId; 
      }
  
      console.log('==================bookingFilter==================');
      console.log(bookingFilter);
      console.log('====================================');
  
      const totalBookings = await BookingModel.countDocuments(bookingFilter);
  
      const bookings = await BookingModel.find(bookingFilter)
        .populate('userId')
        .populate('workspaceId')
        .limit(limitNum)
        .skip((pageNum - 1) * limitNum)
        .sort({ date: -1 });
  
      const result = { bookings, totalPages: Math.ceil(totalBookings / limitNum) };
  
      return result;
  
    } catch (error) {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
      throw error;
    }
  }
  

  async createBooking(booking: Partial<IBooking>): Promise<IBooking | null> {
    try {
      const createdBooking = await BookingModel.create(booking);
      return createdBooking;
    } catch (error) {
      console.error("Error creating booking:", error);
      return null;
    }
  }

  async findBySeatId(id: string): Promise<IBooking | null> {
    try {
      const booking = await BookingModel.findOne({ seatId: id });

      if (booking) {
        return booking;
      }

      return null;
    } catch (error) {
      return null;
    }
  }

  async getBookingsByUserId(id: string): Promise<IBooking[] | null> {
    try {
      const userId = new mongoose.Types.ObjectId(id);

      const bookings = await BookingModel.find({
        userId,
      }).sort({ date: -1 });

      if (bookings) {
        return bookings;
      }

      return null;
    } catch (error) {
      return null;
    }
  }
  async getBookings(
    page: number,
    limit: number
  ): Promise<{ totalBookings: number; bookings: IBooking[] | null }> {
    try {
      const skip = (page - 1) * limit;

      const totalBookings = await BookingModel.countDocuments();

      const bookingResponse = await BookingModel.find()
        .skip(skip)
        .limit(limit)
        .sort("-date")
        .populate("userId", "-password")
        .populate("seatId")
        .populate({
          path: "workspaceId",
          populate: {
            path: "ownerId",
            select: "fullName email",
          },
        })
        .exec();

      return {
        totalBookings,
        bookings: bookingResponse || null,
      };
    } catch (error) {
      console.error("Error fetching bookings:", error);
      throw new Error("Unable to fetch bookings.");
    }
  }

  async getBookingsByOwnerId(
    id: string,
    page?: number, 
    limit?: number 
  ): Promise<IBooking[] | null> {
    try {


      const ownerId = new mongoose.Types.ObjectId(id);

      const bookingPipeline: any[] = [
        {
          $lookup: {
            from: "workspaces",
            localField: "workspaceId",
            foreignField: "_id",
            as: "workspaceInfo",
          },
        },
        {
          $unwind: "$workspaceInfo",
        },
        {
          $match: {
            "workspaceInfo.ownerId": ownerId,
          },
        },
        {
          $sort: { date: -1 },
        },
        {
          $lookup: {
            from: "users",
            localField: "userId",
            foreignField: "_id",
            as: "userInfo",
          },
        },
        {
          $lookup: {
            from: "seats",
            localField: "seatId",
            foreignField: "_id",
            as: "seatInfo",
          },
        },
        {
          $project: {
            "userInfo.password": 0,
            "userInfo.refreshToken": 0,
            "workspaceInfo.ownerId.password": 0,
          },
        },
      ];

      if (page && limit) {
        const skip = (page - 1) * limit;
        bookingPipeline.push(
          { $skip: skip },
          { $limit: limit }
        );
      }
  
      const bookingResponse = await BookingModel.aggregate(bookingPipeline);

      console.log('==============bookingResponse======================');
      console.log(bookingResponse);
      console.log('====================================');
  
      return bookingResponse || null;
    } catch (error) {
      console.error("Error fetching bookings by owner id:", error);
      throw new Error("Unable to fetch bookings by owner id.");
    }
  }
  

  async getTotalBookings(): Promise<any> {
    try {
      const bookingsCount = await BookingModel.countDocuments();

      const bookingsData = await BookingModel.find()
        .limit(5)
        .populate("userId", "-password")
        .exec();

      return { bookingsCount, bookingsData };
    } catch (error) {
      console.error("Error fetching total bookings:", error);
      throw new Error("Unable to fetch total bookings.");
    }
  }

  async getLastSevenBookings(): Promise<IBooking[]> {
    try {
      const currentDate = new Date();
      const tillDate = new Date(currentDate.setDate(currentDate.getDate() + 7));

      const data = await BookingModel.find({ date: { $lte: tillDate } })
        .populate("userId", "-password")
        .sort({paymentDate: -1})
        .limit(7)
        .exec();

      if (!data) {
        throw new Error("No data Found ");
      }

      return data;
    } catch (error) {
      throw error;
    }
  }

  async findById(id: string): Promise<IBooking | null> {

    try {
      const booking = await BookingModel.findById(id).populate("userId", "-password");

      if (booking) {
        return booking;
      }

      return null;
    } catch (error) {
      console.error("Error fetching booking by id:", error);
      throw new Error("Unable to fetch booking by id.");
    }
  }
}
