import { IBooking } from "../../entities/BookingEntity";
import BookingRepository from "../../repositories/implementations/BookingRepositroy";
import { IBookingRepository } from "../../repositories/interface/IBookingRepository";
import { IBookingService } from "../../services/interface/IBookingService";

export default class BookingService implements IBookingService {

    private bookingRepository : IBookingRepository


    constructor(){
        this.bookingRepository = new BookingRepository();
    }


    async createBooking(booking: Partial<IBooking>): Promise<IBooking | null> {

        const createdBooking = await this.bookingRepository.createBooking(booking)

        if(createdBooking){
            return createdBooking
        }
        
        return null
    }
    

    async getBookingsByUserId(id: string): Promise<IBooking[] | null> {
        
        const bookingResponse = await this.bookingRepository.getBookingsByUserId(id);
        if(bookingResponse){
            return bookingResponse
        }
        return null
    }


}