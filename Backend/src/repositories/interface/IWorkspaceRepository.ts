import { IWorkspace } from "../../entities/workspace";
export interface GetPendingWorkspace {
  pendingSubmissions?: IWorkspace[];
  approvedWorkspaces?: IWorkspace[];
  totalPages: number;
} 

export interface IWorkspaceRepository {
  create(IWorkspace: IWorkspace): Promise<IWorkspace>;
  findWithPagination(page:number,limit:number,approved?:boolean):Promise<GetPendingWorkspace| null >;
  approveWorkspace(id: string): Promise<IWorkspace | null>;
  rejectWorkspace(id: string): Promise<IWorkspace | null>;
  getAllWorkspaces(): Promise<IWorkspace[] | null>;
  findById(id: string): Promise<IWorkspace | null>;
  
  // update(id: string, IWorkspace: Partial<IWorkspace>): Promise<IWorkspace | null>;
  // delete(id: string): Promise<boolean>;

  // findAll(): Promise<IWorkspace[]>;
  // findByOwnerId(ownerId: string): Promise<IWorkspace[]>;
}