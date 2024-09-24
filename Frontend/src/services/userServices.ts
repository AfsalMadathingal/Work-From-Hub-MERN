import { IUsers } from "../@types/user";
import { IWorkspace } from "../@types/workspace";
import { userAxiosInstance } from "./instance/userInstance";

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

export const getWorkspace = async () => {
  try {

    const response = await userAxiosInstance.get<IWorkspace>('/api/user/workspace')


    


    return response;

  } catch (error) {


    
    return error.response;
  }
}

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

