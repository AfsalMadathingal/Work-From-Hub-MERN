"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const s3UploadService_1 = __importDefault(require("../../utils/s3UploadService"));
const UserRepository_1 = __importDefault(require("../../repositories/implementations/UserRepository"));
const uploadToCloudinary_1 = require("../../utils/uploadToCloudinary");
const uuid_1 = require("uuid");
class UploadService {
    userRepository;
    constructor() {
        this.userRepository = new UserRepository_1.default();
    }
    async uploadSinglePhoto(path) {
        const uploadResult = await (0, uploadToCloudinary_1.uploadToCloudinary)(path);
        return uploadResult;
    }
    async uploadMultiplePhoto(path) {
        const uploadResult = await (0, uploadToCloudinary_1.uploadMultiplePhotosToCloudinary)(path);
        console.log(uploadResult);
        return uploadResult;
    }
    async uploadVideoFile(path) {
        const uploadResult = await (0, uploadToCloudinary_1.uploadVideoToCloudinary)(path);
        return uploadResult;
    }
    async uploadVideoToS3(buffer) {
        const uniqueName = (0, uuid_1.v4)();
        const fileUrl = s3UploadService_1.default.uploadVideo(buffer, uniqueName);
        return fileUrl;
    }
    async uploadSinglePhotoToS3(buffer) {
        try {
            const uniqueName = (0, uuid_1.v4)();
            const fileUrl = s3UploadService_1.default.uploadSinglePhoto(buffer, uniqueName);
            return (await fileUrl).url;
        }
        catch (error) {
            return null;
        }
    }
}
exports.default = UploadService;
//# sourceMappingURL=UploadService.js.map