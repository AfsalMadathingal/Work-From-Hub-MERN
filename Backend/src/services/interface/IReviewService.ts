import { IReview } from "entities/ReviewEntity";

export interface IReviewService{


    createReview(workspaceId: string,userId:string, comment: string, rating: number): Promise<IReview | null>
    getReviews(workspaceId: string): Promise<IReview[] | null>;
    updateRating(workspaceId:string):Promise <IReview [] | null>;

}