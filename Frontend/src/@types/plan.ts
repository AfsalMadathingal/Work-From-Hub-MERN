export interface IPlan {
    id:string;
    planId: string;
    stripeId:string ;
    price:number;
    discount?:number;
    discountAmount: number;
    createdAt: Date;
    status:string;
    isDeleted:boolean;
}