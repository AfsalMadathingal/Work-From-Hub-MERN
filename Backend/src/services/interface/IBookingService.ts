import { IBooking } from "entities/BookingEntity"

export interface IBookingService {
    createBooking(booking: Partial<IBooking>): Promise<IBooking | null>
    getBookingsByUserId(id:string):Promise <IBooking[] | null >
    getBookings(page: number, limit: number):  Promise<{ totalBookings: number; bookings: IBooking[] | null }>
    getBookingsByOwnerId(id: string,page: number, limit: number): Promise<IBooking[] | null>
    // getBookingWithId(id: string): Promise<IBooking | null>
    // updateBooking(id: string, booking: Partial<IBooking>): Promise<IBooking | null>
    // deleteBooking(id: string): Promise<IBooking | null>;
}
