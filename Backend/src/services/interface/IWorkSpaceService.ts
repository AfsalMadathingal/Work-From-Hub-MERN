import { IWorkspace } from "entities/workspace";
import { Request } from "express";
import { GetPendingWorkspace } from "repositories/interface/IWorkspaceRepository";

export interface IFilters {
  all:boolean;
  price:number ;
  ac: boolean;
  bathroom: boolean;
  powerBackup: boolean;
  approved: boolean;
  wifiAvailable: boolean;
  rating:Number;
}

export interface IWorkspaceService {

  getApprovedWorkspaceById(id: string): Promise<IWorkspace | null>;
  submitWorkspaceListing(data: Request): Promise<IWorkspace | null>;
  getWorkSpaceSubmission(
    page: number,
    limit: number
  ): Promise<GetPendingWorkspace | null>;
  approveWorkspace(id: string): Promise<IWorkspace | null>;
  rejectWorkspace(id: string): Promise<IWorkspace | null>;
  getApprovedWorkspaces(
    page: number,
    limit: number
  ): Promise<GetPendingWorkspace | null>;
  getAllWorkspaces(): Promise<IWorkspace[] | null>;
  getSingleWorkspace(id: string): Promise<IWorkspace | null>;
  
  getWithFilters(
    filter: Partial<IFilters>,
    page: number,
    limit: number,
    query: string,
    sortOrder : {}
  ): Promise<{Workspaces:IWorkspace[] , totalPages:number }| null>;


  searchWorkspace(
    query: string,
    page: number,
    limit: number
  ): Promise<IWorkspace[] | null>;


  getTotalWorkspaces():Promise<number>;

  getWorkspaceByOwnerId(id:string): Promise <IWorkspace[]| null> ;
  findApprovedByOwnerId(id:string,page: number,limit: number):Promise  <GetPendingWorkspace | null >;
  findBothById(workspaceId:string):Promise<IWorkspace | null > ;
  findByIdAndUpdate(workspaceId:string,data:IWorkspace):Promise<IWorkspace| null >;
  unHoldWorkspace(workspaceId: string,ownerId:string): Promise<IWorkspace | null>;
  
}
