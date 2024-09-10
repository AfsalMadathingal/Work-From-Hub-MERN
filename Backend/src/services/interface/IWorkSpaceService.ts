import { IWorkspace } from "entities/workspace";

export interface IWorkspaceService {

    submitWorkspaceListing(data:IWorkspace):Promise<IWorkspace| null>;
    
}