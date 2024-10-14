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
    async getBookings(page: number, limit: number): Promise<{ totalBookings: number; bookings: IBooking[] | null }> {
        try {
          const skip = (page - 1) * limit;

          const totalBookings = await BookingModel.countDocuments();

          const bookingResponse = await BookingModel.find()
            .skip(skip)
            .limit(limit)
            .sort('-date')
            .populate('userId', '-password')
            .populate('seatId')
            .populate({
                path: 'workspaceId', 
                populate: {
                  path: 'ownerId', 
                  select: 'fullName email' 
                }
              })
            .exec();

          return {
            totalBookings,
            bookings: bookingResponse || null
          };
        } catch (error) {
          console.error('Error fetching bookings:', error);
          throw new Error('Unable to fetch bookings.');
        }
      }
      

     


}