import { IBooking } from "../../entities/BookingEntity";

export interface IBookingRepository {

    createBooking(booking: Partial<IBooking>): Promise<IBooking | null>;
    findBySeatId(id:string):Promise <IBooking| null>;
    getBookingsByUserId(id:string):Promise <IBooking[] | null>;
    getBookings(page: number, limit: number):  Promise<{ totalBookings: number; bookings: IBooking[] | null }>
    // findBookingById(id: string): Promise<IBooking | null>;
    // findBookingByUserId(userId: string): Promise<IBooking[] | null>;
    // updateBooking(booking: IBooking): Promise<IBooking | null>;
    // deleteBooking(id: string): Promise<boolean>;
}