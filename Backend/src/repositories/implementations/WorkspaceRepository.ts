import { IWorkspaceRepository } from '../interface/IWorkspaceRepository';
import { IWorkspace as Workspace } from '../../entities/workspace';
import { ObjectId } from 'mongodb';
import { WorkspaceModel } from '../../models/workspace';



export class WorkspaceRepository implements IWorkspaceRepository {
  private collection;

  
  constructor() {
    this.collection = WorkspaceModel
  }

  async create(workspace: Workspace): Promise<Workspace | null> {



    const result = await this.collection.create(workspace);

    return result
  }

  // async update(id: string, workspace: Partial<Workspace>): Promise<Workspace | null> {
  //   const result = await this.collection.findOneAndUpdate(
  //     { _id: new ObjectId(id) },
  //     { $set: workspace },
  //     { returnDocument: 'after' }
  //   );
  //   return result.value ? { ...result.value, id: result.value._id.toString() } : null;
  // }

  // async delete(id: string): Promise<boolean> {
  //   const result = await this.collection.deleteOne({ _id: new ObjectId(id) });
  //   return result.deletedCount === 1;
  // }

  // async findById(id: string): Promise<Workspace | null> {
  //   const workspace = await this.collection.findOne({ _id: new ObjectId(id) });
  //   return workspace ? { ...workspace, id: workspace._id.toString() } : null;
  // }

  // async findAll(): Promise<Workspace[]> {
  //   const workspaces = await this.collection.find().toArray();
  //   return workspaces.map((workspace) => ({ ...workspace, id: workspace._id.toString() }));
  // }

  // async findByOwnerId(ownerId: string): Promise<Workspace[]> {
  //   const workspaces = await this.collection.find({ ownerId }).toArray();
  //   return workspaces.map((workspace) => ({ ...workspace, id: workspace._id.toString() }));
  // }
}