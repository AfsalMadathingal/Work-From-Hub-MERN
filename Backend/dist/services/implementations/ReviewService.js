"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewService = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ReviewRepository_1 = require("../../repositories/implementations/ReviewRepository");
const WorkspaceRepository_1 = require("../../repositories/implementations/WorkspaceRepository");
class reviewService {
    reviewRepository;
    workspaceRepository;
    constructor() {
        this.reviewRepository = new ReviewRepository_1.ReviewRepository();
        this.workspaceRepository = new WorkspaceRepository_1.WorkspaceRepository();
    }
    async createReview(id, uId, comment, rating) {
        try {
            const workspace = new mongoose_1.default.Types.ObjectId(id);
            const user = new mongoose_1.default.Types.ObjectId(uId);
            const review = await this.reviewRepository.create({
                workspaceId: workspace,
                userId: user,
                comment,
                rating,
            });
            return review;
        }
        catch (error) {
            return null;
        }
    }
    async getReviews(workspaceId) {
        try {
            const reviews = await this.reviewRepository.getReviews(workspaceId);
            return reviews;
        }
        catch (error) {
            return null;
        }
    }
    async updateRating(workspaceId) {
        const allReviews = await this.reviewRepository.getReviews(workspaceId);
        const newRating = allReviews.reduce((acc, review) => {
            acc += review.rating;
            return acc;
        }, 0);
        const ratingToUpdate = newRating / allReviews.length;
        await this.workspaceRepository.findByIdAndUpdate(workspaceId, { rating: ratingToUpdate });
        return allReviews;
    }
}
exports.reviewService = reviewService;
//# sourceMappingURL=ReviewService.js.map