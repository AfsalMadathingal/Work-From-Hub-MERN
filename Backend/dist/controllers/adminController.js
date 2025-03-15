"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = __importDefault(require("../services/implementations/UserService"));
const ApiResponse_1 = __importDefault(require("../utils/ApiResponse"));
const BusinessUserService_1 = __importDefault(require("../services/implementations/BusinessUserService"));
const WorkspaceService_1 = __importDefault(require("../services/implementations/WorkspaceService"));
const HttpStatus_1 = require("../enums/HttpStatus");
const BookingServices_1 = __importDefault(require("../services/implementations/BookingServices"));
class AdminController {
    userService;
    businessUserService;
    workspaceService;
    bookingService;
    constructor() {
        this.userService = new UserService_1.default();
        this.businessUserService = new BusinessUserService_1.default();
        this.workspaceService = new WorkspaceService_1.default();
        this.bookingService = new BookingServices_1.default();
    }
    getAllUser = async (req, res) => {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;
        const allUsers = await this.userService.getAllUsers(page, limit);
        return res
            .status(200)
            .json(new ApiResponse_1.default(200, allUsers, "fetched successfully"));
    };
    blockUsers = async (req, res) => {
        const id = req.params.id;
        const userBlocked = await this.userService.blockUser(id);
        if (!userBlocked) {
            return res
                .status(422)
                .json(new ApiResponse_1.default(422, null, "Unprocessable Entity"));
        }
        return res
            .status(200)
            .json(new ApiResponse_1.default(200, userBlocked, "Operation successful"));
    };
    blockBUseres = async (req, res) => {
        const id = req.params.id;
        const userBlocked = await this.businessUserService.blockUser(id);
        if (!userBlocked) {
            return res
                .status(422)
                .json(new ApiResponse_1.default(422, null, "Unprocessable Entity"));
        }
        return res
            .status(200)
            .json(new ApiResponse_1.default(200, userBlocked, "Operation successful"));
    };
    editUser = async (req, res) => {
        const user = req.body;
        const userEdited = await this.userService.editUser(user);
        if (!userEdited) {
            return res
                .status(422)
                .json(new ApiResponse_1.default(422, null, "Unprocessable Entity"));
        }
        if ("emailExists" in userEdited && userEdited.emailExists) {
            return res
                .status(409)
                .json(new ApiResponse_1.default(409, null, "Email Already Exists"));
        }
        return res
            .status(200)
            .json(new ApiResponse_1.default(200, userEdited, "Editing successful"));
    };
    getBusinessUsers = async (req, res, next) => {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 5;
            const allUsers = await this.businessUserService.getBusinessUsers(page, limit);
            return res
                .status(200)
                .json(new ApiResponse_1.default(200, allUsers, "fetched successfully"));
        }
        catch (error) {
            next(error);
        }
    };
    getBusinessUser = async (req, res, next) => {
        try {
            const user = await this.businessUserService.findUserWithId(req.params);
            if (!user) {
                return res
                    .status(404)
                    .json(new ApiResponse_1.default(404, null, "User Not Found"));
            }
            return res
                .status(200)
                .json(new ApiResponse_1.default(200, user, "fetched successfully"));
        }
        catch (error) {
            next(error);
        }
    };
    editBUser = async (req, res) => {
        const user = req.body;
        const userEdited = await this.businessUserService.editUser(user);
        if (!userEdited) {
            return res
                .status(422)
                .json(new ApiResponse_1.default(422, null, "Unprocessable Entity"));
        }
        if ("emailExists" in userEdited && userEdited.emailExists) {
            return res
                .status(409)
                .json(new ApiResponse_1.default(409, null, "Email Already Exists"));
        }
        return res
            .status(200)
            .json(new ApiResponse_1.default(200, userEdited, "Editing successful"));
    };
    getWorkspaceSubmission = async (req, res, next) => {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 5;
            const allWorkplaceSubmission = await this.workspaceService.getWorkSpaceSubmission(page, limit);
            return res
                .status(200)
                .json(new ApiResponse_1.default(200, allWorkplaceSubmission, "fetched successfully"));
        }
        catch (error) {
            next(error);
        }
    };
    approveWorkspace = async (req, res, next) => {
        try {
            const { id } = req.params;
            const workspaceApproved = await this.workspaceService.approveWorkspace(id);
            if (!workspaceApproved) {
                return res
                    .status(422)
                    .json(new ApiResponse_1.default(422, null, "Unprocessable Entity"));
            }
            return res
                .status(200)
                .json(new ApiResponse_1.default(200, workspaceApproved, "Workspace Approved successfully"));
        }
        catch (error) {
            next(error);
        }
    };
    rejectWorkspace = async (req, res, next) => {
        try {
            const { id } = req.params;
            const { reason } = req.body;
            const data = {
                rejected: true,
                rejectionReason: reason,
                approved: false,
            };
            const updatedWp = await this.workspaceService.findByIdAndUpdate(id, data);
            // const workspaceRejected = await this.workspaceService.rejectWorkspace(id);
            if (!updatedWp) {
                return res
                    .status(422)
                    .json(new ApiResponse_1.default(422, null, "Unprocessable Entity"));
            }
            return res
                .status(200)
                .json(new ApiResponse_1.default(200, updatedWp, "Workspace Rejected successfully"));
        }
        catch (error) {
            next(error);
        }
    };
    getApprovedWorkspaces = async (req, res, next) => {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 5;
            const approvedWorkspaces = await this.workspaceService.getApprovedWorkspaces(page, limit);
            return res
                .status(200)
                .json(new ApiResponse_1.default(200, approvedWorkspaces, "fetched successfully"));
        }
        catch (error) {
            next(error);
        }
    };
    validateSuccessResponse = async (req, res, next) => {
        try {
            return res
                .status(200)
                .json(new ApiResponse_1.default(200, null, "Success"));
        }
        catch (error) {
            next(error);
        }
    };
    getBookings = async (req, res, next) => {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 5;
            const bookings = await this.bookingService.getBookings(page, limit);
            return res
                .status(200)
                .json(new ApiResponse_1.default(HttpStatus_1.HttpStatus.OK, bookings, "fetched successfully"));
        }
        catch (error) {
            next(error);
        }
    };
    dashboard = async (req, res, next) => {
        try {
            const [userData, bookingData, workspaceData, lastSevenBookings] = await Promise.all([
                this.userService.getTotalUsers(),
                this.bookingService.getTotalBookings(),
                this.workspaceService.getTotalWorkspaces(),
                this.bookingService.getBookingForDashboard()
            ]);
            if (userData && bookingData && workspaceData) {
                return res.status(HttpStatus_1.HttpStatus.OK).json(new ApiResponse_1.default(HttpStatus_1.HttpStatus.OK, { userData, bookingData, workspaceData, lastSevenBookings }));
            }
            throw new Error("something went wrong");
        }
        catch (error) {
            next(error);
        }
    };
    getBookingsForDashboard = async (req, res, next) => {
        try {
            const bookings = await this.bookingService.getBookingForDashboard();
            return res
                .status(200)
                .json(new ApiResponse_1.default(HttpStatus_1.HttpStatus.OK, bookings, "fetched successfully"));
        }
        catch (error) {
            next(error);
        }
    };
    getBookingsReport = async (req, res, next) => {
        try {
            const bookings = await this.bookingService.getBookingsReport(req.query);
            return res
                .status(200)
                .json(new ApiResponse_1.default(HttpStatus_1.HttpStatus.OK, bookings, "fetched successfully"));
        }
        catch (error) {
            next(error);
        }
    };
    approvedWorkspaceById = async (req, res, next) => {
        try {
            const { id } = req.params;
            const workspace = await this.workspaceService.getApprovedWorkspaceById(id);
            if (!workspace) {
                throw new Error("Workspace not found");
            }
            return res
                .status(200)
                .json(new ApiResponse_1.default(HttpStatus_1.HttpStatus.OK, workspace, "fetched successfully"));
        }
        catch (error) {
            next(error);
        }
    };
    getWorkspace = async (req, res, next) => {
        try {
            const { workspaceId } = req.params;
            console.log(workspaceId);
            const workspace = await this.workspaceService.findBothById(workspaceId);
            if (!workspace) {
                throw new Error("Workspace not found");
            }
            return res
                .status(200)
                .json(new ApiResponse_1.default(HttpStatus_1.HttpStatus.OK, workspace, "fetched successfully"));
        }
        catch (error) {
            next(error);
        }
    };
}
exports.default = new AdminController();
//# sourceMappingURL=adminController.js.map