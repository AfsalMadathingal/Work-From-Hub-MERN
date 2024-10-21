import { IReview } from "../../entities/ReviewEntity";

export interface IReviewRepository{


    create(data:Partial<IReview >):Promise <IReview | null> ;
    getReviews(workspaceId: string): Promise<IReview[] | null>;
}