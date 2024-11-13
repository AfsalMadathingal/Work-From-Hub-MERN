import { IReview } from "entities/ReviewEntity";
import mongoose, { Mongoose, Types } from "mongoose";
import { ReviewRepository } from "../../repositories/implementations/ReviewRepository";
import { IReviewRepository } from "../../repositories/interface/IReviewRepository";
import { IReviewService } from "../../services/interface/IReviewService";
import { IWorkspaceRepository } from "../../repositories/interface/IWorkspaceRepository";
import { WorkspaceRepository } from "../../repositories/implementations/WorkspaceRepository";

export class reviewService implements IReviewService {
  private reviewRepository: IReviewRepository;
  private workspaceRepository: IWorkspaceRepository;

  constructor() {
    this.reviewRepository = new ReviewRepository();
    this.workspaceRepository = new WorkspaceRepository();
  }

  async createReview(
    id: string,
    uId: string,
    comment: string,
    rating: number
  ): Promise<IReview | null> {
    try {
      const workspace = new mongoose.Types.ObjectId(id);
      const user = new mongoose.Types.ObjectId(uId);

      const review = await this.reviewRepository.create({
        workspaceId: workspace,
        userId: user,
        comment,
        rating,
      });

      return review;
    } catch (error) {
      return null;
    }
  }

  async getReviews(workspaceId: string): Promise<IReview[] | null> {

    try {
    
      const reviews = await this.reviewRepository.getReviews(workspaceId);

      return reviews;
    } catch (error) {
      return null;
    }

  }


  async updateRating(workspaceId: string): Promise<IReview[] | null> {
      
    const allReviews  = await this.reviewRepository.getReviews(workspaceId)


    const newRating = allReviews.reduce((acc,review)=>{

      acc += review.rating
      return acc
    },0)





    const ratingToUpdate = newRating/ allReviews.length;



    await this.workspaceRepository.findByIdAndUpdate(workspaceId,{rating:ratingToUpdate})


    return allReviews


  }

  
}
