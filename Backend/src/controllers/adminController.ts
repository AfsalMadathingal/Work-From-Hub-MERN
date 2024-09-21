import { NextFunction, Request, response, Response } from "express";
import UserService from "../services/implementations/UserService";
import ApiResponse from "../utils/ApiResponse";
import BusinessUserService from "../services/implementations/BusinessUserService";
import { IWorkspaceService } from "../services/interface/IWorkSpaceService";
import WorkspaceService from "../services/implementations/WorkspaceService";

class AdminController {
  private userService: UserService;
  private businessUserService: BusinessUserService;
  private workspaceService: IWorkspaceService;

  constructor() {
    this.userService = new UserService();
    this.businessUserService = new BusinessUserService();
    this.workspaceService = new WorkspaceService();
  }

  public getAllUser = async (req: Request, res: Response) => {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 5;

    const allUsers = await this.userService.getAllUsers(page, limit);

    return res
      .status(200)
      .json(new ApiResponse(200, allUsers, "fetched successfully"));
  };

  public blockUsers = async (req: Request, res: Response) => {
    const id = req.params.id;

    const userBlocked = await this.userService.blockUser(id);

    if (!userBlocked) {
      return res
        .status(422)
        .json(new ApiResponse(422, null, "Unprocessable Entity"));
    }

    return res
      .status(200)
      .json(new ApiResponse(200, userBlocked, "Operation successful"));
  };

  public blockBUseres = async (req: Request, res: Response) => {
    const id = req.params.id;

    const userBlocked = await this.businessUserService.blockUser(id);

    if (!userBlocked) {
      return res
        .status(422)
        .json(new ApiResponse(422, null, "Unprocessable Entity"));
    }

    return res
      .status(200)
      .json(new ApiResponse(200, userBlocked, "Operation successful"));
  };

  public editUser = async (req: Request, res: Response) => {
    const user = req.body;
    const userEdited = await this.userService.editUser(user);

    if (!userEdited) {
      return res
        .status(422)
        .json(new ApiResponse(422, null, "Unprocessable Entity"));
    }

    if ("emailExists" in userEdited && userEdited.emailExists) {
      return res
        .status(409)
        .json(new ApiResponse(409, null, "Email Already Exists"));
    }

    return res
      .status(200)
      .json(new ApiResponse(200, userEdited, "Editing successful"));
  };

  public getBusinessUsers = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 5;

      const allUsers = await this.businessUserService.getBusinessUsers(
        page,
        limit
      );

      return res
        .status(200)
        .json(new ApiResponse(200, allUsers, "fetched successfully"));
    } catch (error) {
      next(error);
    }
  };

  public getBusinessUser = async (req: Request, res: Response, next: NextFunction) => {
    try {

      const user = await this.businessUserService.findUserWithId(req.params);

      if (!user) {
        return res
          .status(404)
          .json(new ApiResponse(404, null, "User Not Found"));
      }

      return res
        .status(200)
        .json(new ApiResponse(200, user, "fetched successfully"));
    } catch (error) {
      next(error);
    }
  };

  public editBUser = async (req: Request, res: Response) => {
    const user = req.body;
    const userEdited = await this.businessUserService.editUser(user);

    if (!userEdited) {
      return res
        .status(422)
        .json(new ApiResponse(422, null, "Unprocessable Entity"));
    }

    if ("emailExists" in userEdited && userEdited.emailExists) {
      return res
        .status(409)
        .json(new ApiResponse(409, null, "Email Already Exists"));
    }

    return res
      .status(200)
      .json(new ApiResponse(200, userEdited, "Editing successful"));
  };

  public getWorkspaceSubmission = async (req: Request, res: Response ,next:NextFunction) => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 5;

      const allWorkplaceSubmission = await this.workspaceService.getWorkSpaceSubmission(
        page,
        limit
      );

      return res
        .status(200)
        .json(new ApiResponse(200, allWorkplaceSubmission, "fetched successfully"));

    } catch (error) {
        next(error)
    }
  };

  public approveWorkspace = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;

      const workspaceApproved = await this.workspaceService.approveWorkspace(id);

      if (!workspaceApproved) {
        return res
          .status(422)
          .json(new ApiResponse(422, null, "Unprocessable Entity"));
      }

      return res
        .status(200)
        .json(new ApiResponse(200, workspaceApproved, "Workspace Approved successfully"));
    } catch (error) {
      next(error);
    }
  };

  public rejectWorkspace = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;

      const workspaceRejected = await this.workspaceService.rejectWorkspace(id);

      if (!workspaceRejected) {
        return res
          .status(422)
          .json(new ApiResponse(422, null, "Unprocessable Entity"));
      }

      return res
        .status(200)
        .json(new ApiResponse(200, workspaceRejected, "Workspace Rejected successfully"));
    } catch (error) {
      next(error);
    }
  };

  
  public getApprovedWorkspaces = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 5;

      const approvedWorkspaces = await this.workspaceService.getApprovedWorkspaces(page, limit);

      
      return res
        .status(200)
        .json(new ApiResponse(200, approvedWorkspaces, "fetched successfully"));
    } catch (error) {
      next(error);
    }
  };
  
  
  public validateSuccessResponse = async (req: Request, res: Response, next: NextFunction) => {
    try {
      return res
        .status(200)
        .json(new ApiResponse(200, null, "Success"));
    } catch (error) {
      next(error);
    }
  };

}

export default new AdminController();
