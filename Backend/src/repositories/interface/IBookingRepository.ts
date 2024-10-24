import { IBooking } from "../../entities/BookingEntity";

export interface IBookingRepository {

    createBooking(booking: Partial<IBooking>): Promise<IBooking | null>;
    findBySeatId(id:string):Promise <IBooking| null>;
    getBookingsByUserId(id:string):Promise <IBooking[] | null>;
    getBookings(page: number, limit: number):  Promise<{ totalBookings: number; bookings: IBooking[] | null }>
    getBookingsByOwnerId(id: string, page?: number, limit?: number): Promise<IBooking[] | null>
    getTotalBookings(): Promise<any>
    getLastSevenBookings ():Promise<IBooking[]>;
    getBookingsReport(filter:{},page:number,limit:number):Promise <{bookings:IBooking[] , totalPages: number} | null >
    reportByOwnerId(
        filter: {buildingName?:string , ownerId?:string, workspaceId?:{}},
        pageNum: number,
        limitNum: number
      ): Promise<{ bookings: IBooking[]; totalPages: number } | null> 

}