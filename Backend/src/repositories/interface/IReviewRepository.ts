import { IReview } from "../../entities/ReviewEntity";

export interface IReviewRepository{


    create(data:Partial<IReview >):Promise <IReview | null> ;

}