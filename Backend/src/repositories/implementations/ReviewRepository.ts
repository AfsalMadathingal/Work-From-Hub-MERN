import { IReview } from "../../entities/ReviewEntity";
import { Review } from "../../models/reviewsModel";
import { IReviewRepository } from "../../repositories/interface/IReviewRepository";

export class ReviewRepository implements IReviewRepository {



  async create(data: Partial<IReview>): Promise<IReview | null> {


    try {

      const {userId, workspaceId , rating, comment } = data


      const review = new  Review({userId,workspaceId,rating,comment});

      console.log('====================================');
      console.log(review);
      console.log('====================================');

      
      const savedReview = await review.save();

      return savedReview;
    } catch (error) {
      console.error('Error creating review:', error);
      return null;
    }

  }


  async getReviews(workspaceId: string): Promise<IReview[] | null> {
    try {

      const reviews = await Review.find({ workspaceId }).populate('userId', '-password');
      

      console.log('====================================');
      console.log(reviews);
      console.log('====================================');

      return reviews;
    } catch (error) {
      console.error('Error getting reviews:', error);
      return null;
    }
  }




}
