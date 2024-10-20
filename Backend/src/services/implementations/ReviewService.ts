import { IReview } from "entities/ReviewEntity";
import mongoose, { Mongoose, Types } from "mongoose";
import { ReviewRepository } from "../../repositories/implementations/ReviewRepository";
import { IReviewRepository } from "../../repositories/interface/IReviewRepository";
import { IReviewService } from "../../services/interface/IReviewService";

export class reviewService implements IReviewService {
  private reviewRepository: IReviewRepository;

  constructor() {
    this.reviewRepository = new ReviewRepository();
  }

  async createReview(id: string, uId: string, comment: string, rating: number): Promise<IReview | null> {
    try {
  



        const workspace = new mongoose.Types.ObjectId(id);
        const user = new mongoose.Types.ObjectId(uId);

        const review = await this.reviewRepository.create({
            workspaceId: workspace,
            userId: user,          
            comment,
            rating
        });

        return review;
    } catch (error) {
      
        return null
    }
}
}
