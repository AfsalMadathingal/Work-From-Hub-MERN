import { IUserRepository } from "repositories/interface/IUserRepository";
import { IBooking } from "../../entities/BookingEntity";
import BookingRepository from "../../repositories/implementations/BookingRepositroy";
import { IBookingRepository } from "../../repositories/interface/IBookingRepository";
import { IBookingService } from "../../services/interface/IBookingService";
import UserRepository from "../../repositories/implementations/UserRepository";
import sendMailNotification from "../../utils/mailNotification";

export default class BookingService implements IBookingService {
  private bookingRepository: IBookingRepository;
  private userRepository: IUserRepository;

  constructor() {
    this.bookingRepository = new BookingRepository();
    this.userRepository = new UserRepository();
  }

  

  async getBookingForDashboard(): Promise<IBooking[] | null> {
    const bookings = await this.bookingRepository.getLastSevenBookings();
    return bookings;
  }

  async createBooking(booking: Partial<IBooking>): Promise<IBooking | null> {
    const createdBooking = await this.bookingRepository.createBooking(booking);

    if (createdBooking) {
      const userData = await this.userRepository.findById(
        booking.userId.toString()
      );

      if (userData) {
        sendMailNotification(
          userData.email,
          "Booking Confirmed",
          userData.fullName.toString(),
          `Congratulations ${userData.fullName}, your booking has been confirmed for details check the booking history`
        );
      }

      return createdBooking;
    }

    return null;
  }

  async getBookingsByUserId(id: string): Promise<IBooking[] | null> {
    const bookingResponse = await this.bookingRepository.getBookingsByUserId(
      id
    );

    if (bookingResponse) {
      return bookingResponse;
    }
    return null;
  }

  async getBookings(
    page: number,
    limit: number
  ): Promise<{ totalBookings: number; bookings: IBooking[] | null }> {
    const bookingResponse = await this.bookingRepository.getBookings(
      page,
      limit
    );

    if (bookingResponse) {
      return bookingResponse;
    }

    return null;
  }

  async getBookingsByOwnerId(
    id: string,
    page?: number,
    limit?: number
  ): Promise<IBooking[] | null> {
    const bookingResponse = await this.bookingRepository.getBookingsByOwnerId(
      id,
      page,
      limit
    );

    if (bookingResponse) {
      return bookingResponse;
    }
    return null;
  }

  async getTotalBookings(): Promise<any> {
    const totalBookings = await this.bookingRepository.getTotalBookings();

    if (totalBookings) {
      return totalBookings;
    }
  }

  async getBookingsReport(
    query: {
      name?: string;
      status?: string;
      startDate?: string;
      endDate?: string;
      limit?: number;
      page?: number;
    }
  ): Promise<{ bookings: IBooking[]; totalPages: number }> {

    const { name, status, startDate, endDate, limit = 10, page = 1 } = query;

    const filter: {
    fullName?:string;
      status?: string;
      date?: { $gte?: Date; $lte?: Date };
    } = {};

    if (name) filter.fullName = name; 
    if (status) filter.status = status;
    if (startDate || endDate) {
      filter.date = {};
      if (startDate) filter.date.$gte = new Date(startDate);
      if (endDate) filter.date.$lte = new Date(endDate);
    }

    const bookingsReport = await this.bookingRepository.getBookingsReport(filter,page,limit)



    return bookingsReport
 
  }

  async countByOwnerId(id: string): Promise<{ count: number | null; }> {
  try {
    const bookings = await this.bookingRepository.getBookingsByOwnerId(id);
    return { count: bookings ? bookings.length : null };
  } catch (error) {
    console.error("Error counting bookings by owner ID:", error);
    return { count: null };
  }
  }


  async ReportByOwnerId(
    query: {
      buildingName?: string;
      ownerId:string;
      status?: string;
      startDate?: string;
      endDate?: string;
      limit?: number;
      page?: number;
    }
  ): Promise<{ bookings: IBooking[]; totalPages: number }> {

    const { buildingName,  ownerId, status, startDate, endDate, limit = 10, page = 1 } = query;

    const filter: {
      buildingName?:string;
      ownerId?:string;
      status?: string;
      date?: { $gte?: Date; $lte?: Date };
    } = {ownerId:ownerId};

    if (buildingName) filter.buildingName = buildingName; 
    if (status) filter.status = status;
    if (startDate || endDate) {
      filter.date = {};
      if (startDate) filter.date.$gte = new Date(startDate);
      if (endDate) filter.date.$lte = new Date(endDate);
    }

    const bookingsReport = await this.bookingRepository.reportByOwnerId(filter,page,limit)



    return bookingsReport
 
  }


  async cancelBooking(bookingId: string): Promise<IBooking | null> { 


    const booking = await this.bookingRepository.findById(bookingId);

    if(booking.status=='canceled') return null;
    
    const today  = new Date();
    const bookingDate = new Date(booking.date);


    if(bookingDate.getTime() <= today.getTime()) return null;


    if (!booking) return null;

    booking.status = 'canceled';

    await booking.save();

    return booking;
  }
}
