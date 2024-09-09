import { IUsers } from "../@types/user";
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
