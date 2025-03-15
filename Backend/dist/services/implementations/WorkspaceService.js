"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WorkspaceRepository_1 = require("../../repositories/implementations/WorkspaceRepository");
const UploadService_1 = __importDefault(require("./UploadService"));
const SeatRepository_1 = require("../../repositories/implementations/SeatRepository");
const s3UploadService_1 = __importDefault(require("../../utils/s3UploadService"));
const BusinessRepository_1 = __importDefault(require("../../repositories/implementations/BusinessRepository"));
const mailNotification_1 = __importDefault(require("../../utils/mailNotification"));
class WorkspaceService {
    workspaceRepository;
    uploadService;
    seatRepository;
    bUserRepository;
    constructor() {
        this.workspaceRepository = new WorkspaceRepository_1.WorkspaceRepository();
        this.uploadService = new UploadService_1.default();
        this.seatRepository = new SeatRepository_1.SeatRepository();
        this.bUserRepository = new BusinessRepository_1.default();
    }
    async findByIdAndUpdate(workspaceId, data) {
        const ws = await this.workspaceRepository.findByIdAndUpdate(workspaceId, data);
        return ws;
    }
    async submitWorkspaceListing(req) {
        console.log(req?.user);
        console.log(req.files);
        // Extract photo paths
        const photos = req.files?.photos;
        const photoPaths = photos.map((photo) => photo.path);
        const photoBuffers = photos.map((photo) => photo?.buffer);
        const photoNames = photos.map((photo) => photo.originalname);
        console.log(req.body);
        const photoUploads = await s3UploadService_1.default.uploadMultiplePhotos(photoBuffers, photoNames);
        // Upload photos
        // const photoUploads = await this.uploadService.uploadMultiplePhoto(
        //   photoPaths as [string]
        // );
        // let videoUploads = await this.uploadService.uploadVideoFile(
        //   req.files.video[0].path
        // );
        const videoUploads = await s3UploadService_1.default.uploadVideo(req.files.video[0].buffer, req.files.video[0].originalname);
        // Destructure body fields, excluding imageAdded and videoAdded
        const { imageAdded, videoAdded, ...rest } = req.body;
        // Prepare data to save, including photos and optionally videos
        const dataToSave = {
            ownerId: req.user.id,
            ...rest,
            photos: photoUploads.urls,
            video: videoUploads.url, // Add video URLs if available
        };
        // Save the data using the repository pattern
        const response = await this.workspaceRepository.create(dataToSave);
        await this.seatRepository.createSeatsForWorkspace(response);
        return response;
    }
    async getWorkSpaceSubmission(page, limit) {
        const response = await this.workspaceRepository.findWithPagination(page, limit);
        return response;
    }
    async getAllWorkspaces() {
        const response = await this.workspaceRepository.getAllWorkspaces();
        return response;
    }
    async approveWorkspace(id) {
        const response = await this.workspaceRepository.approveWorkspace(id);
        const ownerData = await this.bUserRepository.findById(response.ownerId.toString());
        if (response && ownerData) {
            (0, mailNotification_1.default)(ownerData.email, "You're submission is approved", ownerData.fullName, `Congratulations ${ownerData.fullName}, your submission has been approved. From now on, you will start getting booking from customers.`);
        }
        return response;
    }
    async rejectWorkspace(id) {
        const response = await this.workspaceRepository.rejectWorkspace(id);
        const ownerData = await this.bUserRepository.findById(response.ownerId.toString());
        if (response && ownerData) {
            (0, mailNotification_1.default)(ownerData.email, "You're submission is rejected", ownerData.fullName, `Sorry ${ownerData.fullName}, your submission has been rejected. Please try to resubmit with correct information.`);
        }
        return response;
    }
    async getApprovedWorkspaces(page, limit) {
        const response = await this.workspaceRepository.findWithPagination(page, limit, true);
        return response;
    }
    async findApprovedByOwnerId(id, page, limit) {
        const response = await this.workspaceRepository.findApprovedByOwnerId(id, page, limit);
        return response;
    }
    async getSingleWorkspace(id) {
        const response = await this.workspaceRepository.findById(id);
        return response;
    }
    async unHoldWorkspace(workspaceId, ownerId) {
        const workspace = await this.workspaceRepository.findById(workspaceId);
        if (workspace.ownerId.toString() != ownerId) {
            throw Error("This is not Owned by You");
        }
        const response = await this.workspaceRepository.unHoldWorkspace(workspaceId);
        return response;
    }
    async getWithFilters(filter, page, limit, query, sortOrder) {
        const response = await this.workspaceRepository.getWithFilters(query, filter, page, limit, sortOrder);
        return response;
    }
    async getWorkspaceByOwnerId(id) {
        const response = await this.workspaceRepository.findByOwnerId(id);
        return response;
    }
    async searchWorkspace(query, page, limit) {
        const response = await this.workspaceRepository.searchWorkspace(query, page, limit);
        return response;
    }
    async getTotalWorkspaces() {
        return this.workspaceRepository.getTotalWorkspace();
    }
    async getApprovedWorkspaceById(id) {
        const response = await this.workspaceRepository.findById(id);
        if (response && response.approved) {
            return response;
        }
        return null;
    }
    async findBothById(workspaceId) {
        const response = await this.workspaceRepository.findBothById(workspaceId);
        return response;
    }
}
exports.default = WorkspaceService;
//# sourceMappingURL=WorkspaceService.js.map