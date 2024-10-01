import { IBooking } from "entities/BookingEntity"

export interface IBookingService {
    createBooking(booking: Partial<IBooking>): Promise<IBooking | null>

    // getBookings(page: number, limit: number): Promise<GetAllBookings | null>
    // getBookingWithId(id: string): Promise<IBooking | null>
    // updateBooking(id: string, booking: Partial<IBooking>): Promise<IBooking | null>
    // deleteBooking(id: string): Promise<IBooking | null>
}
