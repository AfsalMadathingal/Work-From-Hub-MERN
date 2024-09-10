import { IWorkspace } from "../../entities/workspace";
import { WorkspaceRepository } from "../../repositories/implementations/WorkspaceRepository";
import { IWorkspaceRepository } from "../../repositories/interface/IWorkspaceRepository";
import { IWorkspaceService } from "../../services/interface/IWorkSpaceService";

export default class WorkspaceService implements IWorkspaceService{

    private workspaceRepository: IWorkspaceRepository

    constructor(){

        this.workspaceRepository = new WorkspaceRepository()

    }


    async submitWorkspaceListing(data: IWorkspace): Promise<IWorkspace | null> {

        const response = this.workspaceRepository.create(data)

        return response;

    }

}