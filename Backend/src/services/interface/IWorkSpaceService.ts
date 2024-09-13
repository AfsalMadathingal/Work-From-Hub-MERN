import { IWorkspace } from "entities/workspace";
import { Request } from "express";

export interface IWorkspaceService {

    submitWorkspaceListing(data:Request):Promise<IWorkspace| null>;
    
}