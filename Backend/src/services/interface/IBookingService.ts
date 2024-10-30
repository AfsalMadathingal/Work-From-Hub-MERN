import { IBooking } from "entities/BookingEntity"
import { Request } from "express";

export interface IBookingService {
    createBooking(booking: Partial<IBooking>): Promise<IBooking | null>
    getBookingsByUserId(id:string):Promise <IBooking[] | null >
    getBookings(page: number, limit: number):  Promise<{ totalBookings: number; bookings: IBooking[] | null }>
    getBookingsByOwnerId(id: string,page?: number, limit?: number): Promise<IBooking[] | null>
    getTotalBookings():Promise <any>;
    getBookingForDashboard():Promise <IBooking[]| null >;
    getBookingsReport(query:{}):Promise<{bookings:IBooking[], totalPages: number} | null>
    countByOwnerId(id:string):Promise<{count:number |  null }>;
    ReportByOwnerId(
        query: {
          buildingName?: string;
          ownerId?:string;
          status?: string;
          startDate?: string;
          endDate?: string;
          limit?: number;
          page?: number;
        }
      ): Promise<{ bookings: IBooking[]; totalPages: number }>

    cancelBooking(bookingId: string): Promise<IBooking>
}
