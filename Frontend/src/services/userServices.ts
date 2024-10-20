import { Stripe } from "@stripe/stripe-js";
import { IUsers } from "../@types/user";
import { IWorkspace } from "../@types/workspace";
import { userAxiosInstance } from "./instance/userInstance";
import { IBookingDetails } from "../@types/bookingDetails";

const api = userAxiosInstance;

export const subscribe = async (userId: string, planId: string) => {
  try {
    const response = await api.post(
      "/api/subscriptions/create-checkout-session",
      {
        userId, 
        planId,
      }
    );

    return response;
  } catch (error) {
    return error.response;
  }
};

export const editUserData = async (user:IUsers) => {
  try {

    const response = await api.patch('/api/user/',user)

    return response

  } catch (error) {

    return error.response;
    
  }
};


export const editUserProfilePic = async (FormData:FormData)=>{

  try {


    const response = await userAxiosInstance.patch('/api/user/upload-profile-photo',FormData)


     console.log('====================================');
     console.log("hello");
     console.log('====================================');

    return response 

  } catch (error) {


    
    return error.response
  }
}


export const fetchActivePlan = async ()=>{
  try {


    const response = await userAxiosInstance.get('/api/user/active-plan')


    


    return response 

  } catch (error) {


    
    return error.response
  }
}

export const updatePaymentStatus = async (paymentData,user,stripeResponse)=>{
  try {

    const response = await userAxiosInstance.post('/api/user/payment/update-status',{paymentData,user,stripeResponse})

    return response
    
  } catch (error) {

    return error.response
  }
}


export const validateUserSession = async () => {
  try {
    const response = await api.get("/api/user/validate-session");

    return response;
  } catch (error) {
    return error.response;
  }
};

export const getWorkspace = async (currentPage: number, filters: any ,itemsPerPage:number) => {
  try {
 
    const queryParams = new URLSearchParams({ ...filters, page: currentPage , itemsPerPage}).toString();

    console.log(queryParams);


    const response = await userAxiosInstance.get<IWorkspace>(`/api/user/workspace/filters?${queryParams}`);

    return response;

  } catch (error) {

    if (error.response) {
      return error.response;
    }
    console.error("Error fetching workspaces:", error);
    throw new Error("Unable to fetch workspaces.");
  }
};


export const getSingleWorkspace = async (id: string) => {
  try {
    
    const response = await userAxiosInstance.get<IWorkspace>(`/api/user/workspace/${id}`)

    return response;

  } catch (error) {

    return error.response;
  }

}

export const getAvailableSeats = async (workspaceId: string) => {
  try {
    
    const response = await userAxiosInstance.get<number>(`/api/user/workspace/${workspaceId}/available-seats`)

    return response;

  } catch (error) {

    return error.response;
  }

}
 
export const reserveSeatAPI = async (seatId: string, workspaceId: string,date: string) => {
  try {
    
    const response = await userAxiosInstance.patch(`/api/user/workspace/${workspaceId}/reserve-seat/${seatId}/date/${date}`)

    return response;

  } catch (error) {

    return error.response;
  }
}

export const createPaymentIntentForBooking = async (seatId: string, userId: string, date: string) => {
  try {

    const response = await userAxiosInstance.post<{ clientSecret: string }>(`/api/user/payment/create-payment-intent`, {
      seatId,
      userId,
      date,
    });

    return response;

  } catch (error) {
    return error.response;
  }
};

export const updateBookingStatus = async (result , user: IUsers, bookingDetails: IBookingDetails, stripeResponse) => {

  try {
    const response = await userAxiosInstance.post(`/api/user/booking`, {
      result,
      user,
      bookingDetails,
      stripeResponse
    });

    return response;

  } catch (error) {
    return error.response;
  }
};

export const changePassword = async (currentPassword: string, newPassword: string , email : string) => {
  try {

    const response = await userAxiosInstance.patch<{ message: string }>(`/api/user/auth/change-password`, {
      currentPassword,
      newPassword,
      email
    });

    return response;

  } catch (error) {
    return error.response;
  }
};

export const getBooking = async (userId:string)=>{

  try {

    const response = await userAxiosInstance.get(`/api/user/bookings/${userId}`)

    return response;

  } catch (error) {
    
    return error.response;
  }
};

export const getSeatById = async (seatId: string )=>{

  try {

    const response  = await userAxiosInstance.get(`/api/user/seat/${seatId}`)

    return response
    
  } catch (error) {
    
   return error.response
  }
}


export const createReview = async(rating:number,comment:string,workspaceId:string) =>{


  try {

    const response = await userAxiosInstance.post(`/api/user/reviews/${workspaceId}`,{rating,comment})

    return response
    
  } catch (error) {
    return error.response
  }
}


export const getReviews = async (workspaceId: string) => {
  try {

    const response = await userAxiosInstance.get(`/api/user/reviews/${workspaceId}`)

    return response;

  } catch (error) {

    return error.response;
  }
};



