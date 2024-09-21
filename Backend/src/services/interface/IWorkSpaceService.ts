import { IWorkspace } from "entities/workspace";
import { Request } from "express";
import { GetPendingWorkspace } from "repositories/interface/IWorkspaceRepository";


export interface IWorkspaceService {

    submitWorkspaceListing(data:Request):Promise<IWorkspace| null>;
    getWorkSpaceSubmission(page:number,limit:number):Promise <GetPendingWorkspace | null> ;
    approveWorkspace(id:string):Promise<IWorkspace| null> ;
    rejectWorkspace(id:string):Promise<IWorkspace| null> ;
    getApprovedWorkspaces(page:number,limit:number):Promise <GetPendingWorkspace | null> ;
    getAllWorkspaces():Promise<IWorkspace[]| null> ;

}