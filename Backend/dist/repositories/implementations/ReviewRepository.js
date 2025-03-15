"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewRepository = void 0;
const reviewsModel_1 = require("../../models/reviewsModel");
class ReviewRepository {
    async create(data) {
        try {
            const { userId, workspaceId, rating, comment } = data;
            const review = new reviewsModel_1.Review({ userId, workspaceId, rating, comment });
            console.log('====================================');
            console.log(review);
            console.log('====================================');
            const savedReview = await review.save();
            return savedReview;
        }
        catch (error) {
            console.error('Error creating review:', error);
            return null;
        }
    }
    async getReviews(workspaceId) {
        try {
            const reviews = await reviewsModel_1.Review.find({ workspaceId }).populate('userId', '-password');
            console.log('====================================');
            console.log(reviews);
            console.log('====================================');
            return reviews;
        }
        catch (error) {
            console.error('Error getting reviews:', error);
            return null;
        }
    }
}
exports.ReviewRepository = ReviewRepository;
//# sourceMappingURL=ReviewRepository.js.map