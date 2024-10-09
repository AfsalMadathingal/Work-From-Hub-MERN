import { Request, Response, NextFunction } from "express";
import UserService from "../services/implementations/UserService";
import AuthService from "../services/implementations/AuthService";
import ApiResponse from "../utils/ApiResponse";
import { uploadToCloudinary } from "../utils/uploadToCloudinary";
import { ApiError } from "../middleware/errorHandler";
import { IUploadService } from "../services/interface/IUploadService";
import UploadService from "../services/implementations/UploadService";
import { IUsers } from "entities/UserEntity";
import { IPlanService } from "../services/interface/IPlanService";
import PlanService from "../services/implementations/PlanService";
import WorkspaceService from "../services/implementations/WorkspaceService";
import { IFilters, IWorkspaceService } from "../services/interface/IWorkSpaceService";
import { ISeatService } from "../services/interface/ISeatService";
import { SeatService } from "../services/implementations/SeatService";
import { IPaymentService } from "../services/interface/IPaymentService";
import PaymentService from "../services/implementations/PaymentService";
import { IBookingService } from "../services/interface/IBookingService";
import BookingService from "../services/implementations/BookingServices";
import { IBooking } from "entities/BookingEntity";

class UserController {
  private userService: UserService;
  private uploadService: IUploadService;
  private AuthService: AuthService;
  private planService: IPlanService;
  private workspaceService: IWorkspaceService;
  private seatService: ISeatService;
  private paymentService: IPaymentService;
  private bookingService: IBookingService;




  constructor() {
    this.userService = new UserService();
    this.AuthService = new AuthService();
    this.uploadService = new UploadService();
    this.planService = new PlanService();
    this.workspaceService = new WorkspaceService();
    this.seatService = new SeatService();
    this.paymentService = new PaymentService();
    this.bookingService = new BookingService();
  }

  public editUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const editedUser = await this.userService.editUser(req.body);

      if (!editedUser) {
        return res
          .status(422)
          .json(new ApiResponse(422, null, "Unprocessable Entity"));
      }

      if ("emailExists" in editedUser && editedUser.emailExists) {
        return res
          .status(409)
          .json(new ApiResponse(409, null, "Email Already Exists"));
      }

      return res
        .status(200)
        .json(new ApiResponse(200, editedUser, "Editing successful"));
    } catch (error) {
      next(error);
    }
  };

  public editProfilePhoto = async (
    req: Request & { file: { path: string }; user: IUsers },
    res: Response,
    next: NextFunction
  ) => {
    try {


      if (!req.file) {
        return res
          .status(400)
          .json(new ApiError(400, "Upload Error", "No file to Upload"));
      }

      const  file = req.file;

      


      // console.log(fileUrl);
      

      // const uploadResult = await this.uploadService.uploadSinglePhoto(
      //   req.file.path
      // );

      const url = await this.uploadService.uploadSinglePhotoToS3(file.buffer)


      const user = { profilePic: url, id: req.user.id };

      console.log(user);

      const userFound = await this.userService.editUser(user);

      console.log(userFound);

      // const {password,refreshToken,...userToSend} = userFound;

      if (userFound) {
        return res
          .status(200)
          .json(new ApiResponse(200, userFound, "Success fully Uploaded"));
      }

      return res
        .status(500)
        .json(new ApiError(500, "Error While Uploading", "uploading failed"));
    } catch (error) {

      next(error);
    }
  };

  public getActivePlan = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const activePlan = await this.planService.getActivePlan();

      if (!activePlan) {
        return res
          .status(404)
          .json(
            new ApiError(
              404,
              "No active Plan",
              "Currently subscription not available"
            )
          );
      }

      return res
        .status(200)
        .json(new ApiResponse(200, activePlan, "Fetched Successfully"));
    } catch (error) {

      next(error);
    }
  };

  public validateSuccessResponse = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      return res
        .status(200)
        .json(new ApiResponse(200, null, "Validation successful"));
    } catch (error) {
      next(error);
    }
  };

  public getWorkspace = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {

   

      const {ac,restRoom,powerBackup,wifiAvailable,rating,price} = req.query;

      console.log(req.query);
      

      if(ac || restRoom || powerBackup || wifiAvailable || rating || price){

        let filter: IFilters = {} as IFilters;

        if(restRoom !== undefined){
          filter.bathroom = restRoom === 'true'
        }
        if (ac !== undefined) {
            filter.ac = ac === 'true';
        }
        if (powerBackup !== undefined) {
            filter.powerBackup = powerBackup === 'true'; 
        }

        filter.approved = true;

        console.log(filter);
        

        const filteredWorkspaces = await this.workspaceService.getWithFilters(filter)

        console.log(filteredWorkspaces);
        return res
        .status(200)
        .json(new ApiResponse(200, {approvedWorkspaces:filteredWorkspaces}, "Fetched Successfully"));

      }

      const workspace = await this.workspaceService.getApprovedWorkspaces(1, 4);


      if (!workspace) {
        return res
          .status(404)
          .json(new ApiResponse(404, null, "Workspace not found"));
      }

      return res
        .status(200)
        .json(new ApiResponse(200, workspace, "Fetched Successfully"));
    } catch (error) {
      next(error);
    }
  };

  public getSingleWorkspace = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const id = req.params.id;

      const workspace = await this.workspaceService.getSingleWorkspace(id);
      if (!workspace) {
        return res
          .status(404)
          .json(new ApiResponse(404, null, "Workspace not found"));
      }

      return res
        .status(200)
        .json(new ApiResponse(200, workspace, "Fetched Successfully"));
    } catch (error) {
      next(error);
    }
  };

  public getAvailableSeatsOfWorkspace = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { workspaceId } = req.params;

      const workspace = await this.workspaceService.getSingleWorkspace(
        workspaceId
      );
      if (!workspace) {
        return res
          .status(404)
          .json(new ApiResponse(404, null, "Workspace not found"));
      }

      const availableSeats = await this.seatService.getSeatsByWorkspaceId(
        workspace.id
      );
      if (!availableSeats) {
        return res
          .status(404)
          .json(new ApiResponse(404, null, "No available seats"));
      }

      return res
        .status(200)
        .json(new ApiResponse(200, availableSeats, "Fetched Successfully"));
    } catch (error) {
      next(error);
    }
  };

  public reserveSeat = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { seatId, workspaceId, date } = req.params;

      const workspace = await this.workspaceService.getSingleWorkspace(
        workspaceId
      );

      if (!workspace) {
        return res
          .status(404)
          .json(new ApiResponse(404, null, "The workspace not available"));
      }

      const seatData = await this.seatService.getSeatById(seatId);

      console.log(seatData.workspaceId.toString() != workspace._id.toString());

      if (seatData.workspaceId.toString() != workspace._id.toString()) {
        return res
          .status(404)
          .json(new ApiResponse(404, null, "Something went Wrong"));
      }

      console.log("====================================");
      console.log(seatData);
      console.log("====================================");

      if (!seatData) {
        return res
          .status(404)
          .json(new ApiResponse(404, null, "No available seats"));
      }

      const reservedSeat = await this.seatService.reserveSeatForBooking(
        seatId,
        date
      );

      console.log(reservedSeat);

      if (!reservedSeat) {
        return res
          .status(404)
          .json(new ApiResponse(404, null, "seat Cant Be booked"));
      }

      return res
        .status(200)
        .json(new ApiResponse(200, null, "Reserved Successfully"));
    } catch (error) {
      next(error);
    }
  };

  public bookSeat = async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("====================================");
      console.log(req.body);
      console.log("====================================");
      const { seatId, workspaceId, date } = req.params;

      const workspace = await this.workspaceService.getSingleWorkspace(
        workspaceId
      );

      if (!workspace) {
        return res
          .status(404)
          .json(new ApiResponse(404, null, "The workspace not available"));
      }

      const seatData = await this.seatService.getSeatById(seatId);

      if (seatData.workspaceId.toString() != workspace._id.toString()) {
        return res
          .status(404)
          .json(new ApiResponse(404, null, "Something went Wrong"));
      }

      if (!seatData) {
        return res
          .status(404)
          .json(new ApiResponse(404, null, "No available seats"));
      }

      const reservedSeat = await this.seatService.bookSeat(
        workspaceId,
        seatData._id as string,
        date
      );

      if (!reservedSeat) {
        return res
          .status(404)
          .json(new ApiResponse(404, null, "seat Cant Be booked"));
      }

      return res
        .status(200)
        .json(new ApiResponse(200, null, "Reserved Successfully"));
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");

      next(error);
    }
  };

  public confirmBooking = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { result, user, bookingDetails, stripeResponse } = req.body;

      const { paymentIntent } = result;

      const paymentStatus = await this.paymentService.checkPaymentStatus(
        paymentIntent.id
      );

      if (paymentStatus.status != "succeeded") {
        return res
          .status(404)
          .json(new ApiResponse(404, null, "seat Cant Be booked"));
      }



      const booking: Partial<IBooking> = {
        userId: user._id as string,
        seatId: bookingDetails.seatId as string,
        workspaceId: bookingDetails.workspaceId as string,
        date: new Date(bookingDetails.date), 
        status: "success",
        paymentIntentId: stripeResponse.id as string,
        paymentStatus: paymentStatus.status as string,
        amount: stripeResponse.amount / 100,
        currency: "INR",
        paymentMethod: "CARD",
        paymentDate: new Date(),
        isDeleted: false,
      };

      const bookingCreated = await this.bookingService.createBooking(booking);



      if(!bookingCreated){
        return res
        .status(404)
        .json(new ApiResponse(404, null, "something Went Wrong"));
      }

      return res
        .status(200)
        .json(new ApiResponse(200, null, "Reserved Successfully"));

    } catch (error) {
      next(error);
    }
  };

  public getBookings = async (req: Request, res: Response, next: NextFunction) => {

    try {

      const {userId}= req.params;

      const bookings = await this.bookingService.getBookingsByUserId(userId)

      return res
        .status(200)
        .json(new ApiResponse(200, bookings, "fetched successfully"));

    } catch (error) {
      next(error);
    }
  };
}

export default new UserController();
