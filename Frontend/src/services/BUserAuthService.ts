import axios from "axios";
import { IBUsers } from "../@types/businessUser";
import { Alert } from "../utils/alert";
import { IOTP } from "../@types/otp";


const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});


export const sendOTP = async (credentials :  Partial<IBUsers>) =>{

  try {

    const response = await api.post('/api/business/auth/send-otp',credentials)
    return response;
    
  } catch (error ) {

    return error.response.data
    
  }

}


export const register = async (user: Partial<IBUsers>, otp: IOTP) => {
  try {
    const response = await api.post("/api/business/auth/register", { user, otp });

    return response.data.success ? response.data.data : null;
  } catch (error) {
    const responseData = error?.response?.data;

    if (responseData?.statusCode === 500) {
      return new Alert(true, responseData.error);
    }

    try {
      const errorData = JSON.parse(responseData?.error || "[]");

      if (Array.isArray(errorData)) {
        const formattedErrors: { [key: string]: string } = {};
        errorData.forEach((detail: { path: string[]; message: string }) => {
          if (detail.path?.[0]) {
            formattedErrors[detail.path[0]] = detail.message;
          }
        });

        return formattedErrors;
      }
    } catch (parseError) {
      console.error("Error parsing response error:", parseError);
    }

    return new Alert(true, "An unexpected error occurred.");
  }
};



export const login = async (credential: Partial <IBUsers>)=>{
  
  try {
    
      const loginResponse = await api.post('/api/business/auth/login',credential)

      
      if(loginResponse.data.success){
        return loginResponse.data
      }

      return null


  } catch (error) {

    return error.response
    
    
  }

}



export const logout = async ()=>{

  try {
    
    const response = await api.patch('/api/business/auth/logout',null,{
      withCredentials:true
    });

    localStorage.removeItem('businessAccessToken')

    if(response.data.success){
     
      return response.data
    }

    
    return null

  } catch (error) {

    return null

  }



}
