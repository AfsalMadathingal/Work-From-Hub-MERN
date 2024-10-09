import { IBooking } from "entities/BookingEntity";
import { IBookingRepository } from "../../repositories/interface/IBookingRepository";
import BookingModel from "../../models/BookingModel";

export default class BookingRepository implements IBookingRepository{



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

            const booking = await BookingModel.findOne({seatId:id})

            if(booking){
                return booking
            }

           return null
            
        } catch (error) {

            return null
            
        }


    }

    async getBookingsByUserId(id: string): Promise<IBooking[] | null> {
        
        try {

            const bookings = await BookingModel.find({userId:id}).sort({date:-1})

            if(bookings){
                return bookings
            }

           return null
            
        } catch (error) {

            return null
            
        }
    }

     


}