import {
  GetPendingWorkspace,
  IWorkspaceRepository,
} from "../interface/IWorkspaceRepository";
import { IWorkspace as Workspace } from "../../entities/workspace";
import { ObjectId } from "mongodb";
import { WorkspaceModel } from "../../models/workspace";
import { IFilters } from "services/interface/IWorkSpaceService";

export class WorkspaceRepository implements IWorkspaceRepository {
  private collection;

  constructor() {
    this.collection = WorkspaceModel;
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

      return;
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

  async getWithFilters( query:string,filter: Partial<IFilters> , page:number,limit:number) : Promise<Workspace[] | null> {
    try {
      console.log("====================================");
      console.log(filter);
      console.log("====================================");

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
          filter // This includes the filter conditions like ac, bathroom, etc.
        ]
      };

      const workspaces = await this.collection
        .find(combinedQuery)
        .skip((page - 1) * limit)
        .limit(limit)
        .sort({ createdAt: -1 })
        

      return workspaces;
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
}
