
import { ISeatRepository } from "../../repositories/interface/ISeatRepository";
import { ISeat } from "../../entities/Seat";
import { Seat } from "../../models/seatModel";
import { IWorkspace } from "../../entities/workspace";


export class SeatRepository implements ISeatRepository {

   
  async createSeatsForWorkspace(workspace: IWorkspace): Promise<ISeat[] | null> {

    try {
        

      
        const { tablesAvailable, seatsPerTable } = workspace;
      
        const seatPromises: Promise<ISeat>[] = [];
        for (let tableNumber = 1; tableNumber <= tablesAvailable; tableNumber++) {
          for (let seatNumber = 1; seatNumber <= seatsPerTable; seatNumber++) {
            seatPromises.push(Seat.create({
              workspaceId:workspace.id,
              tableNumber,
              seatNumber,
            }) as Promise<ISeat>);
          }
        }
      
   
        const seats = await Promise.all(seatPromises);

       return seats as ISeat[]

    } catch (error) {
      return null;
    }
  }
}

