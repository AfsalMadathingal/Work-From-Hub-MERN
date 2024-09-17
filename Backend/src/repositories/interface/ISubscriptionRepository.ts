import { ISubscription } from "entities/SubscriptionEntity";

export interface ISubscriptionRepository {

  createSubscription(subscription: ISubscription): Promise<ISubscription | null>
  
//   getSubscription(id: string): Promise<ISubscription | null>
//   getAllSubscriptions(page: number, limit: number): Promise<GetAllUsers | null>
//   editSubscription(id: string, subscription: ISubscription): Promise<ISubscription | null>
//   deleteSubscription(id: string): Promise<ISubscription | null>

}

