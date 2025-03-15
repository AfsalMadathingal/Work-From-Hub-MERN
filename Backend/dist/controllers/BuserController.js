"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WorkspaceService_1 = __importDefault(require("../services/implementations/WorkspaceService"));
const BusinessUserService_1 = __importDefault(require("../services/implementations/BusinessUserService"));
const errorHandler_1 = require("../middleware/errorHandler");
const ApiResponse_1 = __importDefault(require("../utils/ApiResponse"));
const HttpStatus_1 = require("../enums/HttpStatus");
const BookingServices_1 = __importDefault(require("../services/implementations/BookingServices"));
class BUserController {
    workspaceService;
    bUserService;
    bookingService;
    constructor() {
        this.workspaceService = new WorkspaceService_1.default();
        this.bUserService = new BusinessUserService_1.default();
        this.bookingService = new BookingServices_1.default();
    }
    submitListingData = async (req, res, next) => {
        try {
            if (!req.files) {
                return res.status(HttpStatus_1.HttpStatus.INTERNAL_SERVER_ERROR)
                    .json(new errorHandler_1.ApiError(HttpStatus_1.HttpStatus.INTERNAL_SERVER_ERROR, "no files found ", "something wrong with uploading"));
            }
            console.log(req.file);
            const response = await this.workspaceService.submitWorkspaceListing(req);
            console.log(response);
            res.status(HttpStatus_1.HttpStatus.OK).json(new ApiResponse_1.default(HttpStatus_1.HttpStatus.OK, response, "Workspace listing created successfully"));
        }
        catch (error) {
            next(error);
        }
    };
    validateUser = async (req, res, next) => {
        try {
            const user = await this.bUserService.findUserWithId(req.user);
            if (user?.isBlocked) {
                throw (new errorHandler_1.ApiError(401, "User is blocked ", "validation failed user has no access to the website"));
            }
            if (!user) {
                throw new errorHandler_1.ApiError(HttpStatus_1.HttpStatus.INTERNAL_SERVER_ERROR, "something went wrong ", "please trddy again later");
            }
            next();
        }
        catch (error) {
            next(error);
        }
    };
    getAllPendingSubmission = async (req, res, next) => {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 5;
            const response = await this.workspaceService.getWorkSpaceSubmission(page, limit);
            return res.json(new ApiResponse_1.default(HttpStatus_1.HttpStatus.OK, response, "fetched successfully"));
        }
        catch (error) {
            next(error);
        }
    };
    getAllWorkspaces = async (req, res, next) => {
        try {
            const user = req.user;
            console.log(user);
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 5;
            const response = await this.workspaceService.getWorkspaceByOwnerId(user.id);
            console.log(response);
            return res.json(new ApiResponse_1.default(HttpStatus_1.HttpStatus.OK, response, "fetched successfully"));
        }
        catch (error) {
            next(error);
        }
    };
    getApprovedWorkspaces = async (req, res, next) => {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 5;
            const response = await this.workspaceService.findApprovedByOwnerId(req.user.id, page, limit);
            return res.json(new ApiResponse_1.default(HttpStatus_1.HttpStatus.OK, response, "fetched successfully"));
        }
        catch (error) {
            next(error);
        }
    };
    getBookingsByOwnerId = async (req, res, next) => {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 5;
            const id = req.query.ownerId.toString();
            const response = await this.bookingService.getBookingsByOwnerId(id, page, limit);
            console.log(response);
            return res.json(new ApiResponse_1.default(HttpStatus_1.HttpStatus.OK, response, "fetched successfully"));
        }
        catch (error) {
            next(error);
        }
    };
    getDashboardData = async (req, res, next) => {
        try {
            const [bookingData, workspaceData, countBooking] = await Promise.all([
                this.bookingService.getBookingsByOwnerId(req.user.id),
                this.workspaceService.getWorkspaceByOwnerId(req.user.id),
                this.bookingService.countByOwnerId(req.user.id),
                // this.workspaceService.countByOwnerId(req.user.id)
            ]);
            if (bookingData && workspaceData && countBooking) {
                return res.status(HttpStatus_1.HttpStatus.OK).json(new ApiResponse_1.default(HttpStatus_1.HttpStatus.OK, { bookingData, workspaceData, countBooking }));
            }
            throw new Error("something went wrong");
        }
        catch (error) {
            next(error);
        }
    };
    getReport = async (req, res, next) => {
        try {
            let filter = {};
            const ownerId = req.user.id;
            filter = { ownerId, ...req.query };
            const data = await this.bookingService.ReportByOwnerId(filter);
            if (!data) {
                throw new Error('something went Wrong');
            }
            res.status(HttpStatus_1.HttpStatus.OK)
                .json(new ApiResponse_1.default(HttpStatus_1.HttpStatus.OK, data, "successfully fetched "));
        }
        catch (error) {
            next(error);
        }
    };
    unHoldWorkspace = async (req, res, next) => {
        try {
            const workspaceId = req.params.workspaceId;
            const ownerId = req.user.id;
            console.log('====================================');
            console.log(workspaceId, ownerId);
            console.log('====================================');
            const workspace = await this.workspaceService.unHoldWorkspace(workspaceId, ownerId);
            if (!workspace) {
                throw new Error('something went wrong while unholding workspace');
            }
            res.status(HttpStatus_1.HttpStatus.OK)
                .json(new ApiResponse_1.default(HttpStatus_1.HttpStatus.OK, workspace, "successfully unholded "));
        }
        catch (error) {
            next(error);
        }
    };
}
exports.default = new BUserController();
//# sourceMappingURL=BuserController.js.map