import { IWorkspace } from "../../entities/workspace";


export interface IWorkspaceRepository {
  create(IWorkspace: IWorkspace): Promise<IWorkspace>;
  // update(id: string, IWorkspace: Partial<IWorkspace>): Promise<IWorkspace | null>;
  // delete(id: string): Promise<boolean>;
  // findById(id: string): Promise<IWorkspace | null>;
  // findAll(): Promise<IWorkspace[]>;
  // findByOwnerId(ownerId: string): Promise<IWorkspace[]>;
}