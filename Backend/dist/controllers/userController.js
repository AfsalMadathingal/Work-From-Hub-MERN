"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = __importDefault(require("../services/implementations/UserService"));
const AuthService_1 = __importDefault(require("../services/implementations/AuthService"));
const ApiResponse_1 = __importDefault(require("../utils/ApiResponse"));
const errorHandler_1 = require("../middleware/errorHandler");
const UploadService_1 = __importDefault(require("../services/implementations/UploadService"));
const PlanService_1 = __importDefault(require("../services/implementations/PlanService"));
const WorkspaceService_1 = __importDefault(require("../services/implementations/WorkspaceService"));
const SeatService_1 = require("../services/implementations/SeatService");
const PaymentService_1 = __importDefault(require("../services/implementations/PaymentService"));
const BookingServices_1 = __importDefault(require("../services/implementations/BookingServices"));
const ReviewService_1 = require("../services/implementations/ReviewService");
const HttpStatus_1 = require("../enums/HttpStatus");
class UserController {
    userService;
    uploadService;
    AuthService;
    planService;
    workspaceService;
    seatService;
    paymentService;
    bookingService;
    reviewService;
    constructor() {
        this.userService = new UserService_1.default();
        this.AuthService = new AuthService_1.default();
        this.uploadService = new UploadService_1.default();
        this.planService = new PlanService_1.default();
        this.workspaceService = new WorkspaceService_1.default();
        this.seatService = new SeatService_1.SeatService();
        this.paymentService = new PaymentService_1.default();
        this.bookingService = new BookingServices_1.default();
        this.reviewService = new ReviewService_1.reviewService();
    }
    editUser = async (req, res, next) => {
        try {
            const editedUser = await this.userService.editUser(req.body);
            if (!editedUser) {
                return res
                    .status(422)
                    .json(new ApiResponse_1.default(422, null, "Unprocessable Entity"));
            }
            if ("emailExists" in editedUser && editedUser.emailExists) {
                return res
                    .status(409)
                    .json(new ApiResponse_1.default(409, null, "Email Already Exists"));
            }
            return res
                .status(200)
                .json(new ApiResponse_1.default(200, editedUser, "Editing successful"));
        }
        catch (error) {
            next(error);
        }
    };
    editProfilePhoto = async (req, res, next) => {
        try {
            if (!req.file) {
                return res
                    .status(400)
                    .json(new errorHandler_1.ApiError(400, "Upload Error", "No file to Upload"));
            }
            const file = req.file;
            // console.log(fileUrl);
            // const uploadResult = await this.uploadService.uploadSinglePhoto(
            //   req.file.path
            // );
            const url = await this.uploadService.uploadSinglePhotoToS3(file.buffer);
            const user = { profilePic: url, id: req.user.id };
            console.log(user);
            const userFound = await this.userService.editUser(user);
            console.log(userFound);
            // const {password,refreshToken,...userToSend} = userFound;
            if (userFound) {
                return res
                    .status(200)
                    .json(new ApiResponse_1.default(200, userFound, "Success fully Uploaded"));
            }
            return res
                .status(500)
                .json(new errorHandler_1.ApiError(500, "Error While Uploading", "uploading failed"));
        }
        catch (error) {
            next(error);
        }
    };
    getActivePlan = async (req, res, next) => {
        try {
            const activePlan = await this.planService.getActivePlan();
            if (!activePlan) {
                return res
                    .status(404)
                    .json(new errorHandler_1.ApiError(404, "No active Plan", "Currently subscription not available"));
            }
            return res
                .status(200)
                .json(new ApiResponse_1.default(200, activePlan, "Fetched Successfully"));
        }
        catch (error) {
            next(error);
        }
    };
    validateSuccessResponse = async (req, res, next) => {
        try {
            return res
                .status(200)
                .json(new ApiResponse_1.default(200, null, "Validation successful"));
        }
        catch (error) {
            next(error);
        }
    };
    getWorkspace = async (req, res, next) => {
        try {
            const { all, ac, restRoom, powerBackup, wifiAvailable, rating, price, page = 1, itemsPerPage = 10, search, } = req.query;
            let filter = { approved: true };
            const query = search ? search.toString() : "";
            const sortOrder = {
                pricePerSeat: price === "highToLow" ? -1 : 1,
                createdAt: -1,
            };
            console.log("Received query:", req.query);
            // If 'all' is true, skip other filters
            if (all) {
                filter.all = true;
                const workspaces = await this.workspaceService.getWithFilters(filter, Number(page), Number(itemsPerPage), query, sortOrder);
                if (!workspaces) {
                    return res
                        .status(404)
                        .json(new ApiResponse_1.default(404, null, "Workspace not found"));
                }
                return res
                    .status(200)
                    .json(new ApiResponse_1.default(200, workspaces, "success"));
            }
            // Set the filters based on the query parameters
            if (restRoom === "true")
                filter.bathroom = true;
            if (ac === "true")
                filter.ac = true;
            if (powerBackup === "true")
                filter.powerBackup = true;
            if (wifiAvailable === "true")
                filter.wifiAvailable = true;
            if (rating)
                filter.rating = Number(rating);
            const hasFilters = ac || restRoom || powerBackup || wifiAvailable || rating || price;
            if (hasFilters || search) {
                const filteredWorkspaces = await this.workspaceService.getWithFilters(filter, Number(page), Number(itemsPerPage), query, sortOrder);
                console.log("Applied filters:", filter);
                if (!filteredWorkspaces) {
                    return res
                        .status(404)
                        .json(new ApiResponse_1.default(404, null, "No workspaces found"));
                }
                return res
                    .status(200)
                    .json(new ApiResponse_1.default(200, filteredWorkspaces, "Fetched Applied Successfully"));
            }
        }
        catch (error) {
            next(error);
        }
    };
    getSingleWorkspace = async (req, res, next) => {
        try {
            const id = req.params.id;
            const workspace = await this.workspaceService.getSingleWorkspace(id);
            if (!workspace) {
                return res
                    .status(404)
                    .json(new ApiResponse_1.default(404, null, "Workspace not found"));
            }
            return res
                .status(200)
                .json(new ApiResponse_1.default(200, workspace, "Fetched Successfully"));
        }
        catch (error) {
            next(error);
        }
    };
    getAvailableSeatsOfWorkspace = async (req, res, next) => {
        try {
            const { workspaceId } = req.params;
            const workspace = await this.workspaceService.getSingleWorkspace(workspaceId);
            if (!workspace) {
                return res
                    .status(404)
                    .json(new ApiResponse_1.default(404, null, "Workspace not found"));
            }
            const availableSeats = await this.seatService.getSeatsByWorkspaceId(workspace.id);
            if (!availableSeats) {
                return res
                    .status(404)
                    .json(new ApiResponse_1.default(404, null, "No available seats"));
            }
            return res
                .status(200)
                .json(new ApiResponse_1.default(200, availableSeats, "Fetched Successfully"));
        }
        catch (error) {
            next(error);
        }
    };
    reserveSeat = async (req, res, next) => {
        try {
            const { seatId, workspaceId, date } = req.params;
            const booking = await this.bookingService.getBookingsByUserId(req.user.id);
            const dateToCompare = new Date(date);
            const isBookedSameDate = booking.filter((value) => value.date.getTime() == dateToCompare.getTime());
            if (isBookedSameDate.length > 0) {
                return res
                    .status(HttpStatus_1.HttpStatus.FORBIDDEN)
                    .json(new errorHandler_1.ApiError(404, "cant book multiple seat same day booking", "booking not allowed"));
            }
            const workspace = await this.workspaceService.getSingleWorkspace(workspaceId);
            if (!workspace) {
                return res
                    .status(404)
                    .json(new ApiResponse_1.default(404, null, "The workspace not available"));
            }
            const seatData = await this.seatService.getSeatById(seatId);
            console.log(seatData.workspaceId.toString() != workspace._id.toString());
            if (seatData.workspaceId.toString() != workspace._id.toString()) {
                return res
                    .status(404)
                    .json(new ApiResponse_1.default(404, null, "Something went Wrong"));
            }
            console.log("====================================");
            console.log(seatData);
            console.log("====================================");
            if (!seatData) {
                return res
                    .status(404)
                    .json(new ApiResponse_1.default(404, null, "No available seats"));
            }
            const reservedSeat = await this.seatService.reserveSeatForBooking(seatId, date);
            console.log(reservedSeat);
            if (!reservedSeat) {
                return res
                    .status(404)
                    .json(new ApiResponse_1.default(404, null, "seat Cant Be booked"));
            }
            return res
                .status(200)
                .json(new ApiResponse_1.default(200, null, "Reserved Successfully"));
        }
        catch (error) {
            next(error);
        }
    };
    bookSeat = async (req, res, next) => {
        try {
            const { seatId, workspaceId, date } = req.params;
            const booking = await this.bookingService.getBookingsByUserId(req.user.id);
            const dateToCompare = new Date(date);
            const isBookedSameDate = booking.filter((value) => value.date.getTime() == dateToCompare.getTime());
            if (isBookedSameDate.length > 0) {
                return res
                    .status(HttpStatus_1.HttpStatus.FORBIDDEN)
                    .json(new errorHandler_1.ApiError(404, "cant book multiple seat same day booking", "booking not allowed"));
            }
            const workspace = await this.workspaceService.getSingleWorkspace(workspaceId);
            if (!workspace) {
                return res
                    .status(404)
                    .json(new ApiResponse_1.default(404, null, "The workspace not available"));
            }
            const seatData = await this.seatService.getSeatById(seatId);
            if (seatData.workspaceId.toString() != workspace._id.toString()) {
                return res
                    .status(404)
                    .json(new ApiResponse_1.default(404, null, "Something went Wrong"));
            }
            if (!seatData) {
                return res
                    .status(404)
                    .json(new ApiResponse_1.default(404, null, "No available seats"));
            }
            const reservedSeat = await this.seatService.bookSeat(workspaceId, seatData._id, date);
            if (!reservedSeat) {
                return res
                    .status(404)
                    .json(new ApiResponse_1.default(404, null, "seat Cant Be booked"));
            }
            return res
                .status(200)
                .json(new ApiResponse_1.default(200, null, "Reserved Successfully"));
        }
        catch (error) {
            console.log("====================================");
            console.log(error);
            console.log("====================================");
            next(error);
        }
    };
    confirmBooking = async (req, res, next) => {
        try {
            const { result, user, bookingDetails, stripeResponse } = req.body;
            const { paymentIntent } = result;
            const paymentStatus = await this.paymentService.checkPaymentStatus(paymentIntent.id);
            if (paymentStatus.status != "succeeded") {
                return res
                    .status(404)
                    .json(new ApiResponse_1.default(404, null, "seat Cant Be booked"));
            }
            const booking = {
                userId: user._id,
                seatId: bookingDetails.seatId,
                workspaceId: bookingDetails.workspaceId,
                date: new Date(bookingDetails.date),
                status: "success",
                paymentIntentId: stripeResponse.id,
                paymentStatus: paymentStatus.status,
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
                    .json(new ApiResponse_1.default(404, null, "something Went Wrong"));
            }
            return res
                .status(200)
                .json(new ApiResponse_1.default(200, null, "Reserved Successfully"));
        }
        catch (error) {
            next(error);
        }
    };
    getBookings = async (req, res, next) => {
        try {
            const { userId } = req.params;
            const bookings = await this.bookingService.getBookingsByUserId(userId);
            return res
                .status(200)
                .json(new ApiResponse_1.default(200, bookings, "fetched successfully"));
        }
        catch (error) {
            next(error);
        }
    };
    getSeatById = async (req, res, next) => {
        try {
            const { id } = req.params;
            const seat = await this.seatService.getSeatById(id);
            if (!seat) {
                return res
                    .status(404)
                    .json(new ApiResponse_1.default(404, null, "Seat is not found with this id"));
            }
            return res
                .status(200)
                .json(new ApiResponse_1.default(200, seat, "fetched successfully"));
        }
        catch (error) {
            next(error);
        }
    };
    saveReview = async (req, res, next) => {
        try {
            const { workspaceId } = req.params;
            const { comment, rating } = req.body;
            const bookings = await this.bookingService.getBookingsByUserId(req.user?.id);
            if (bookings.length < 1) {
                return res
                    .status(HttpStatus_1.HttpStatus.FORBIDDEN)
                    .json(new ApiResponse_1.default(HttpStatus_1.HttpStatus.FORBIDDEN, null, "You cant write review for this workspace"));
            }
            const review = await this.reviewService.createReview(workspaceId, req.user?.id, comment, rating);
            await this.reviewService.updateRating(workspaceId);
            return res
                .status(201)
                .json(new ApiResponse_1.default(201, review, "review saved successfully"));
        }
        catch (error) {
            next(error);
        }
    };
    getReviews = async (req, res, next) => {
        try {
            const { workspaceId } = req.params;
            const reviews = await this.reviewService.getReviews(workspaceId);
            return res
                .status(200)
                .json(new ApiResponse_1.default(200, reviews, "reviews fetched successfully"));
        }
        catch (error) {
            next(error);
        }
    };
    cancelBooking = async (req, res, next) => {
        try {
            const { bookingId } = req.params;
            console.log('====================================');
            console.log(bookingId);
            console.log('====================================');
            const booking = await this.bookingService.cancelBooking(bookingId);
            if (!booking) {
                throw new Error("You can't cancel this booking, because booking date is in the past or already canceled");
            }
            const dateString = booking.date.toISOString().split('T')[0];
            await this.seatService.makeAvailableByDate(booking.seatId, dateString);
            await this.paymentService.initiateRefund(booking.paymentIntentId, booking.amount);
            return res
                .status(200)
                .json(new ApiResponse_1.default(200, booking, "Booking canceled successfully"));
        }
        catch (error) {
            next(error);
        }
    };
    isBlocked = async (req, res, next) => {
        try {
            const userDecode = req.user;
            const user = await this.userService.findById(userDecode.id);
            if (!user) {
                throw new Error("User not found");
            }
            if (user.isBlocked) {
                return res
                    .status(HttpStatus_1.HttpStatus.FORBIDDEN)
                    .json(new ApiResponse_1.default(HttpStatus_1.HttpStatus.FORBIDDEN, null, "User is not allowed"));
            }
            next();
        }
        catch (error) {
            next(error);
        }
    };
}
exports.default = new UserController();
//# sourceMappingURL=userController.js.map