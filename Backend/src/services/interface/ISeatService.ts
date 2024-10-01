import Stripe from "stripe";
import { ISeat } from "../../entities/Seat"

export interface ISeatService {
    // createSeat(data: ISeat): Promise<ISeat | null>
    getSeatsByWorkspaceId(workspaceId: string): Promise<ISeat[] | null>
    getAvailableSeatsByWorkspaceId(workspaceId: string ,date:string): Promise<ISeat[] | null>
    getSeatById(id: string): Promise<ISeat | null>
    reserveSeatForBooking(id:string, date:string):Promise <ISeat | null >;
    bookSeat(workspaceId:string,seatId:string,date:string):Promise<ISeat | null>;

    // updateSeat(id: string, data: Partial<ISeat>): Promise<ISeat | null>
    // deleteSeat(id: string): Promise<ISeat | null>
}
