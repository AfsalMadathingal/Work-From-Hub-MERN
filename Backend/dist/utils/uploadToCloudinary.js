"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadVideoToCloudinary = exports.uploadMultiplePhotosToCloudinary = exports.uploadToCloudinary = void 0;
const cloudinaryConfig_1 = __importDefault(require("./cloudinaryConfig"));
// Function to upload image to Cloudinary
const uploadToCloudinary = async (filePath) => {
    try {
        const result = await cloudinaryConfig_1.default.uploader.upload(filePath, {
            folder: 'work_from_hub',
        });
        return {
            url: result.secure_url,
            public_id: result.public_id,
        };
    }
    catch (error) {
        console.error('Error uploading to Cloudinary:', error);
        throw new Error('Failed to upload image');
    }
};
exports.uploadToCloudinary = uploadToCloudinary;
const uploadMultiplePhotosToCloudinary = async (filePaths) => {
    try {
        const promises = filePaths.map((filePath) => {
            return cloudinaryConfig_1.default.uploader.upload(filePath, {
                folder: 'work_from_hub',
            });
        });
        const results = await Promise.all(promises);
        return results.map((result) => {
            return {
                url: result.secure_url,
                public_id: result.public_id,
            };
        });
    }
    catch (error) {
        console.error('Error uploading multiple photos to Cloudinary:', error);
        throw new Error('Failed to upload multiple photos');
    }
};
exports.uploadMultiplePhotosToCloudinary = uploadMultiplePhotosToCloudinary;
const uploadVideoToCloudinary = async (filePath) => {
    try {
        console.log(filePath);
        const result = await cloudinaryConfig_1.default.uploader.upload(filePath, {
            folder: 'work_from_hub',
            resource_type: 'video',
        });
        return {
            url: result.secure_url,
            public_id: result.public_id,
        };
    }
    catch (error) {
        console.error('Error uploading video to Cloudinary:', error);
        throw new Error('Failed to upload video');
    }
};
exports.uploadVideoToCloudinary = uploadVideoToCloudinary;
//# sourceMappingURL=uploadToCloudinary.js.map