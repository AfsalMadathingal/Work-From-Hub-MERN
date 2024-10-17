import { IBooking } from "entities/BookingEntity";
import { IBookingRepository } from "../../repositories/interface/IBookingRepository";
import BookingModel from "../../models/BookingModel";
import mongoose, { Mongoose } from "mongoose";

export default class BookingRepository implements IBookingRepository {
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




  async getBookingsByOwnerId(id: string, page: number, limit: number): Promise<IBooking[] | null> {
    try {
      const skip = (page - 1) * limit;

      const ownerId = new mongoose.Types.ObjectId(id);
  
      const bookingResponse = await BookingModel.aggregate([
        {
          $lookup: {
            from: 'workspaces',  // Collection name for workspace
            localField: 'workspaceId',
            foreignField: '_id',
            as: 'workspaceInfo',
          },
        },
        {
          $unwind: '$workspaceInfo',
        },
        {
          $match: {
            'workspaceInfo.ownerId': id,
          },
        },
        {
          $sort: { date: -1 },
        },
        {
          $skip: skip,
        },
        {
          $limit: limit,
        },
        {
          $lookup: {
            from: 'users',  // Collection name for user
            localField: 'userId',
            foreignField: '_id',
            as: 'userInfo',
          },
        },
        {
          $lookup: {
            from: 'seats',  // Collection name for user
            localField: 'seatId',
            foreignField: '_id',
            as: 'seatInfo',
          },
        },
      
        {
          $project: {
            'userInfo.password': 0,
            'userInfo.refreshToken': 0,
            'workspaceInfo.ownerId.password': 0,
          },
        },
      ]);
      
      const bookings = await BookingModel.find()
  
      console.log('==================from db==================');
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


      const bookingsCount = await  BookingModel.countDocuments()

      const bookingsData = await BookingModel.find()
      .limit(5)
      .populate('userId','-password')
      .exec()


      return {bookingsCount, bookingsData}


   
    } catch (error) {
      console.error("Error fetching total bookings:", error);
      throw new Error("Unable to fetch total bookings.");
    }
  }


}
