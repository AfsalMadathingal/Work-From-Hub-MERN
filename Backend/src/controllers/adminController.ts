import { NextFunction, Request, Response } from "express";
import UserService from "../services/implementations/UserService";
import ApiResponse from "../utils/ApiResponse";
import BusinessUserService from "../services/implementations/BusinessUserService";
import { IWorkspaceService } from "../services/interface/IWorkSpaceService";
import WorkspaceService from "../services/implementations/WorkspaceService";
import { HttpStatus } from "../enums/HttpStatus";
import { IBookingService } from "../services/interface/IBookingService";
import BookingService from "../services/implementations/BookingServices";
import { workerData } from "worker_threads";
import { http } from "winston";
import { error } from "console";
import { IWorkspace } from "entities/workspace";

class AdminController {
  private userService: UserService;
  private businessUserService: BusinessUserService;
  private workspaceService: IWorkspaceService;
  private bookingService : IBookingService;

  constructor() {
    this.userService = new UserService();
    this.businessUserService = new BusinessUserService();
    this.workspaceService = new WorkspaceService();
    this.bookingService = new BookingService();
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

      const {reason  } = req.body;

      const data= {
        rejected :true,
        rejectionReason:reason,
        approved:false,
      } as IWorkspace

      const updatedWp = await this.workspaceService.findByIdAndUpdate(id,data)

      // const workspaceRejected = await this.workspaceService.rejectWorkspace(id);

      if (!updatedWp) {
        return res
          .status(422)
          .json(new ApiResponse(422, null, "Unprocessable Entity"));
      }

      return res
        .status(200)
        .json(new ApiResponse(200, updatedWp, "Workspace Rejected successfully"));

        
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

  public getBookings = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 5;

      const bookings = await this.bookingService.getBookings(page, limit)

      return res
        .status(200)
        .json(new ApiResponse(HttpStatus.OK, bookings, "fetched successfully"));
    } catch (error) {
      next(error);
    }
  };


  public dashboard = async (req: Request, res: Response, next: NextFunction) => {


    try {


      const [userData, bookingData, workspaceData, lastSevenBookings] = await Promise.all([
        this.userService.getTotalUsers(),
        this.bookingService.getTotalBookings(),
        this.workspaceService.getTotalWorkspaces(),
        this.bookingService.getBookingForDashboard()
      ]);


      if(userData && bookingData && workspaceData ){
        return res.status(HttpStatus.OK).json(new ApiResponse(HttpStatus.OK,{userData,bookingData , workspaceData ,lastSevenBookings}))
      }
      

      throw new Error("something went wrong")

      
    } catch (error) {
      next(error)
    }
  };

  public getBookingsForDashboard = async (req: Request, res: Response, next: NextFunction) => {
    try {


      const bookings = await this.bookingService.getBookingForDashboard()
      return res
        .status(200)
        .json(new ApiResponse(HttpStatus.OK, bookings, "fetched successfully"));

    } catch (error) {
      next(error);
    }
  };


  public getBookingsReport = async (req: Request, res: Response, next: NextFunction) => {
    try {



      const bookings = await this.bookingService.getBookingsReport(req.query)

      return res
        .status(200)
        .json(new ApiResponse(HttpStatus.OK, bookings, "fetched successfully"));

    } catch (error) {
      next(error);
    }
  };


  public approvedWorkspaceById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;

      const workspace = await this.workspaceService.getApprovedWorkspaceById(id);

      if (!workspace) {
        throw new Error("Workspace not found");
      }

      return res
        .status(200)
        .json(new ApiResponse(HttpStatus.OK, workspace, "fetched successfully"));

    } catch (error) {
      next(error);
    }
  };

  public getWorkspace = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { workspaceId } = req.params;

      console.log(workspaceId);
      

      const workspace = await this.workspaceService.findBothById(workspaceId);

      if (!workspace) {
        throw new Error("Workspace not found");
      }

      return res
        .status(200)
        .json(new ApiResponse(HttpStatus.OK, workspace, "fetched successfully"));

    } catch (error) {
      next(error);
    }
  };




}

export default new AdminController();
