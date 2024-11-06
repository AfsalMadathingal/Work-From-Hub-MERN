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
import { IBooking } from "../entities/BookingEntity";
import jwt, { JwtPayload } from 'jsonwebtoken';
import { IReviewService } from "../services/interface/IReviewService";
import { reviewService } from "../services/implementations/ReviewService";
import { HttpStatus } from "../enums/HttpStatus";
import { IDecode } from "entities/decode";

class UserController {
  private userService: UserService;
  private uploadService: IUploadService;
  private AuthService: AuthService;
  private planService: IPlanService;
  private workspaceService: IWorkspaceService;
  private seatService: ISeatService;
  private paymentService: IPaymentService;
  private bookingService: IBookingService;
  private reviewService: IReviewService;





  constructor() {
    this.userService = new UserService();
    this.AuthService = new AuthService();
    this.uploadService = new UploadService();
    this.planService = new PlanService();
    this.workspaceService = new WorkspaceService();
    this.seatService = new SeatService();
    this.paymentService = new PaymentService();
    this.bookingService = new BookingService();
    this.reviewService = new reviewService();
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

      const file = req.file;




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
      const {
        all,
        ac,
        restRoom,
        powerBackup,
        wifiAvailable,
        rating,
        price,
        page = 1, // Default to 1 if page is not provided
        itemsPerPage = 10, // Default to 10 if itemsPerPage is not provided
        search,
      } = req.query;
      let filter: IFilters = { approved: true } as IFilters;
            // Apply search functionality
            const query = search ? search.toString() : "";
      console.log("Received query:", req.query);
      const sortOrder: { pricePerSeat: number, createdAt: number } = { pricePerSeat: 1, createdAt: -1 };
      // Handle sorting by price, assuming 1 for highToLow and -1 for lowToHigh
      sortOrder.pricePerSeat = price  === "highToLow" ? -1 : 1;

      if(all){

        filter.all = true
        const workspace = await this.workspaceService.getWithFilters(
          filter,
          Number(page),
          Number(itemsPerPage),
          query,
          sortOrder
        );

        console.log('====================================');
        console.log(workspace);
        console.log('====================================');
  
        if (!workspace ) {
          return res.status(404).json(new ApiResponse(404, null, "Workspace not found"));
        }

        return res.status(200).json(new ApiResponse(200, workspace, "success"));


      }

            // If no specific filters or search, fetch default approved workspaces
         

 

      // Set the filters based on the query parameters
      if (restRoom === "true") filter.bathroom = true;
      if (ac === "true") filter.ac = true;
      if (powerBackup === "true") filter.powerBackup = true;
      if (wifiAvailable === "true") filter.wifiAvailable = true;





      // Determine if any filtering parameters are set
      const hasFilters =
        ac || restRoom || powerBackup || wifiAvailable || rating || price;

      if (hasFilters || search) {
        // Fetch based on filters and search if any filters are applied
        const filteredWorkspaces = await this.workspaceService.getWithFilters(
          filter,
          Number(page),
          Number(itemsPerPage),
          query,
          sortOrder
        );

        console.log("Applied filters:", filter);

        if (filteredWorkspaces) {
          return res.status(200).json(
            new ApiResponse(
              200,
              filteredWorkspaces,
              "Fetched Applied Successfully"
            )
          );
        } else {
          return res.status(404).json(new ApiResponse(404, null, "No workspaces found"));
        }
      }


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
    req: Request & IDecode,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { seatId, workspaceId, date } = req.params;

      const booking = await this.bookingService.getBookingsByUserId(req.user.id)

      const dateToCompare = new Date(date);


      const isBookedSameDate = booking.filter((value) => value.date.getTime() == dateToCompare.getTime())

      if (isBookedSameDate.length > 0) {
        return res
          .status(HttpStatus.FORBIDDEN)
          .json(new ApiError(404, "cant book multiple seat same day booking", "booking not allowed"));

      }

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

  public bookSeat = async (req: Request & IDecode, res: Response, next: NextFunction) => {
    try {



      const { seatId, workspaceId, date } = req.params;

      const booking = await this.bookingService.getBookingsByUserId(req.user.id)

      const dateToCompare = new Date(date);


      const isBookedSameDate = booking.filter((value) => value.date.getTime() == dateToCompare.getTime())

      if (isBookedSameDate.length > 0) {
        return res
          .status(HttpStatus.FORBIDDEN)
          .json(new ApiError(404, "cant book multiple seat same day booking", "booking not allowed"));

      }


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



      if (!bookingCreated) {
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

      const { userId } = req.params;

      const bookings = await this.bookingService.getBookingsByUserId(userId)

      return res
        .status(200)
        .json(new ApiResponse(200, bookings, "fetched successfully"));

    } catch (error) {
      next(error);
    }
  };

  public getSeatById = async (req: Request, res: Response, next: NextFunction) => {

    try {


      const { id } = req.params;

      const seat = await this.seatService.getSeatById(id);

      if (!seat) {
        return res
          .status(404)
          .json(new ApiResponse(404, null, "Seat is not found with this id"));
      }

      return res
        .status(200)
        .json(new ApiResponse(200, seat, "fetched successfully"));

    } catch (error) {
      next(error);


    }
  };


  public saveReview = async (req: Request & Partial<{ user: { id: string } | jwt.JwtPayload, }>, res: Response, next: NextFunction) => {
    try {

      const { workspaceId } = req.params;
      const { comment, rating } = req.body;

      const bookings = await this.bookingService.getBookingsByUserId(req.user?.id)

      console.log('====================================');
      console.log(bookings);
      console.log('====================================');

      if (bookings.length < 1) {
        return res
          .status(HttpStatus.FORBIDDEN)
          .json(new ApiResponse(HttpStatus.FORBIDDEN, null, "You cant write review for this workspace"))
      }

      const review = await this.reviewService.createReview(workspaceId, req.user?.id, comment, rating);

      return res
        .status(201)
        .json(new ApiResponse(201, review, "review saved successfully"));

    } catch (error) {
      next(error);
    }
  };


  public getReviews = async (req: Request, res: Response, next: NextFunction) => {
    try {

      const { workspaceId } = req.params;

      const reviews = await this.reviewService.getReviews(workspaceId);

      return res
        .status(200)
        .json(new ApiResponse(200, reviews, "reviews fetched successfully"));

    } catch (error) {
      next(error);
    }
  };


  public cancelBooking = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { bookingId } = req.params;



      console.log('====================================');
      console.log(bookingId);
      console.log('====================================');



      const booking = await this.bookingService.cancelBooking(bookingId);


      if (!booking) {
        throw new Error("You can't cancel this booking, because booking date is in the past or already canceled")
      }



      const dateString = booking.date.toISOString().split('T')[0];
      await this.seatService.makeAvailableByDate(booking.seatId, dateString)

      await this.paymentService.initiateRefund(booking.paymentIntentId, booking.amount)


      return res
        .status(200)
        .json(new ApiResponse(200, booking, "Booking canceled successfully"));

    } catch (error) {

      next(error);
    }
  };





}



export default new UserController();
