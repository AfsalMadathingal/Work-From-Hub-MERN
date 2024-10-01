import { IWorkspace } from "entities/workspace";
import { ISeat } from "../../entities/Seat";

export interface ISeatRepository {
  createSeatsForWorkspace(workspaceId: IWorkspace): Promise<ISeat[] | null>
  getSeatsByWorkspaceId(workspaceId: string): Promise<ISeat[] | null>
  getAvailableSeatsByWorkspaceId(workspaceId: string, date: string): Promise<ISeat[] | null>
  bookSeat(workspaceId: string, seatId:string, selectedDate: string): Promise<ISeat | null> 
  reserveSeat(workspaceId: string, tableNumber: number, seatNumber: number, selectedDate: string): Promise<ISeat | null>
  getSeatById(seatId: string): Promise<ISeat | null>;
  reserveSeatForBooking(id:string,date:string):Promise <ISeat | null >
  bookSeatById(workspaceId: string, seatId: string, date: string): Promise<ISeat | null>
}
