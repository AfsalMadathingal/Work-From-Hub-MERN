import { ISeat } from "../../entities/Seat";
import { SeatRepository } from "../../repositories/implementations/SeatRepository";
import { ISeatRepository } from "../../repositories/interface/ISeatRepository";
import { ISeatService } from "../../services/interface/ISeatService";

export class SeatService implements ISeatService{

    private seatRepository: ISeatRepository;

    constructor(){
        this.seatRepository = new SeatRepository();
    }

    async getSeatsByWorkspaceId(workspaceId: string): Promise<ISeat[] | null> {

        const response = await this.seatRepository.getSeatsByWorkspaceId(workspaceId);

        if(response){
            return response;
        }

        return null;
    }

    async getAvailableSeatsByWorkspaceId(workspaceId: string, date: string): Promise<ISeat[] | null> {

        const response = await this.seatRepository.getAvailableSeatsByWorkspaceId(workspaceId, date);

        if(response){
            return response;
        }

        return null;
    }
    
}