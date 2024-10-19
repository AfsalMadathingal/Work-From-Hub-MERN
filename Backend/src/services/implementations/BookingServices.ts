import { IUserRepository } from "repositories/interface/IUserRepository";
import { IBooking } from "../../entities/BookingEntity";
import BookingRepository from "../../repositories/implementations/BookingRepositroy";
import { IBookingRepository } from "../../repositories/interface/IBookingRepository";
import { IBookingService } from "../../services/interface/IBookingService";
import UserRepository from "../../repositories/implementations/UserRepository";
import sendMailNotification from "../../utils/mailNotification";

export default class BookingService implements IBookingService {

    private bookingRepository : IBookingRepository
    private userRepository:  IUserRepository;



    constructor(){
        this.bookingRepository = new BookingRepository();
        this.userRepository = new UserRepository();
    }


    async createBooking(booking: Partial<IBooking>): Promise<IBooking | null> {

        const createdBooking = await this.bookingRepository.createBooking(booking)

        if(createdBooking){

            const userData = await this.userRepository.findById(booking.userId.toString())

            

            if(userData){
        
                sendMailNotification(
                  userData.email,
                  "Booking Confirmed",
                  userData.fullName.toString(),
                  `Congratulations ${userData.fullName}, your booking has been confirmed for details check the booking history`
                )

        
            }

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


    async getBookings(page: number, limit: number):  Promise<{ totalBookings: number; bookings: IBooking[] | null }>{


         
        const bookingResponse = await this.bookingRepository.getBookings(page,limit);


        if(bookingResponse){
            return bookingResponse
        }


        return null
    }


    async getBookingsByOwnerId(id: string, page: number, limit: number): Promise<IBooking[] | null> {
        
        const bookingResponse = await this.bookingRepository.getBookingsByOwnerId(id, page, limit);

        if(bookingResponse){
            return bookingResponse
        }
        return null
    }

    async getTotalBookings(): Promise<any> {

        const totalBookings = await this.bookingRepository.getTotalBookings();

        if(totalBookings){
            return totalBookings
        }

    }

    
    }
    


