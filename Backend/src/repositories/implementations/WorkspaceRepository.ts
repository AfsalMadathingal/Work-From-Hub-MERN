import {
  GetPendingWorkspace,
  IWorkspaceRepository,
} from "../interface/IWorkspaceRepository";
import { IWorkspace, IWorkspace as Workspace } from "../../entities/workspace";
import { ObjectId } from "mongodb";
import { WorkspaceModel } from "../../models/workspace";
import { IFilters } from "services/interface/IWorkSpaceService";

export class WorkspaceRepository implements IWorkspaceRepository {
  private collection;

  constructor() {
    this.collection = WorkspaceModel;
  }


  async findByIdAndUpdate(workspaceId: string, data: Workspace): Promise<Workspace | null> {

    try {
      const updatedWorkspace = await this.collection.findByIdAndUpdate(
        workspaceId,
        data,
        { new: true }
      );

      return updatedWorkspace;
    } catch (error) {
      console.error(error);
      return null;
    }

  }

  async create(workspace: Workspace): Promise<Workspace | null> {
    try {

      console.log(workspace);


      const result = await this.collection.create(workspace);

      return result;
    } catch (error) {

      console.log(error);

      throw error;
      return null;
    }
  }

  async findWithPagination(
    page: number,
    limit: number,
    approved: boolean = false
  ): Promise<GetPendingWorkspace | null> {
    try {
      const data = await WorkspaceModel.find({ approved })
        .skip((page - 1) * limit)
        .limit(limit)
        .select("-password -refreshToken");

      const approvedWorkspaces = approved ? data : null;
      const pendingSubmissions = approved ? null : data;
      const totalUser = await WorkspaceModel.countDocuments({ approved });
      const totalPages = Math.ceil(totalUser / limit);

      if (approved) {
        return { approvedWorkspaces, totalPages };
      }

      return { pendingSubmissions, totalPages };


    } catch (error) {
      return null;
    }
  }

  async approveWorkspace(id: string): Promise<Workspace | null> {
    try {
      const updateResult = await this.collection.findByIdAndUpdate(
        id,
        {
          approved: true,
          rejected: false,
        },
        {
          new: true,
        }
      );

      return updateResult;
    } catch (error) {
      return null;
    }
  }

  async rejectWorkspace(id: string): Promise<Workspace | null> {
    try {
      const updateResult = await this.collection.findByIdAndUpdate(
        id,
        {
          approved: false,
          rejected: true,
        },
        {
          new: true,
        }
      );

      return updateResult;
    } catch (error) {
      return null;
    }
  }

  async unHoldWorkspace(workspaceId: string): Promise<IWorkspace | null> {

      try {

         const workspace =  await this.collection.findById( workspaceId)
        const updateResult = await this.collection.findByIdAndUpdate(
          workspaceId,
          {
            isOnHold: !workspace.isOnHold,
            holdingReason:"Property held by owner"
          },
          {
            new: true,
          }
        );

        return updateResult;
      } catch (error) {
        return null;
      }
  }

  async getAllWorkspaces(): Promise<Workspace[] | null> {
    try {
      const allWorkspaces = await this.collection
        .find({})
        .sort({ createdAt: -1 });

      return allWorkspaces;
    } catch (error) {
      return null;
    }
  }

  async findById(id: string): Promise<Workspace | null> {
    try {
      const workspaceData = await this.collection.findOne({
        _id: id,
        approved: true,
      });

      return workspaceData;
    } catch (error) {
      return null;
    }
  }



  async getWithFilters(query: string, filter: Partial<IFilters>, page: number, limit: number,sortOrder:{}):Promise<{ Workspaces: IWorkspace[]; totalPages: number; } | null>{
    try {

       const newFilter = {...filter}

      if(filter.rating){
       newFilter.rating = { $gte: filter.rating } as any;
      }

   

      const searchQuery = {
        $or: [
          { buildingName: { $regex: query, $options: "i" } },
          { district: { $regex: query, $options: "i" } },
          { street: { $regex: query, $options: "i" } },
          { state: { $regex: query, $options: "i" } },
        ],
      };
      // Combine search query with filters using $and operator
      const combinedQuery = {
        $and: [
          searchQuery,
          newFilter // This includes the filter conditions like ac, bathroom, etc.
        ]
      };

      console.log('==============dfdfd======================');
      console.log(page,limit);
      console.log('====================================');

      const ct   = await this.collection
      .find(filter.all ? {approved:true} : combinedQuery ).countDocuments()


      const workspaces = await this.collection
        .find(filter.all ? {approved:true} : combinedQuery )
        .skip((page - 1) * limit)
        .limit(limit)
        .sort(sortOrder)
        const count = await this.collection
        .find(filter.all ? {approved:true} : combinedQuery )
        .countDocuments()



      return {Workspaces:workspaces, totalPages:count};

    } catch (error) {
      return null;
    }
  }


  async searchWorkspace(query: string, page: number, limit: number): Promise<Workspace[] | null> {

    try {
      const workspaces = await this.collection
        .find({
          $or: [
            { buildingName: { $regex: query, $options: "i" } },
            { district: { $regex: query, $options: "i" } },
            { street: { $regex: query, $options: "i" } },
            { state: { $regex: query, $options: "i" } },

          ],
        })
        .skip((page - 1) * limit)
        .limit(limit);

      return workspaces;
    } catch (error) {
      return null;
    }
  }

  async findByOwnerId(id: string): Promise<Workspace[] | null> {
    try {
      const workspaces = await this.collection.find({ ownerId: id });
      return workspaces;
    } catch (error) {

      throw error

    }
  }


  async getTotalWorkspace(): Promise<number> {
    try {

      const totalWorkspaces = await this.collection.countDocuments({ approved: true });

      return totalWorkspaces;
    } catch (error) {
      return null
    }


  }

  async findApprovedByOwnerId(id: string, page: number, limit: number): Promise<GetPendingWorkspace | null> {
    try {


      const data = await WorkspaceModel.find({ approved: true, ownerId: id })
        .skip((page - 1) * limit)
        .limit(limit)

      const approvedWorkspaces = data
      const totalUser = await WorkspaceModel.countDocuments({ approved: true, ownerId: id });
      const totalPages = Math.ceil(totalUser / limit);


      return { approvedWorkspaces, totalPages };


    } catch (error) {

    }
  }

  async findBothById(id: string): Promise<Workspace | null> {
    try {



      const workspace = await this.collection.findOne({ _id: id }).populate('ownerId', '-password');



      return workspace;


    } catch (error) {
      return null;
    }
  }



}
