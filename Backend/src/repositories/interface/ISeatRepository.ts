import { IWorkspace } from "entities/workspace";
import { ISeat } from "../../entities/Seat";

export interface ISeatRepository {
  createSeatsForWorkspace(workspaceId: IWorkspace): Promise<ISeat[] | null>
}
