import axios, { AxiosError } from "axios";
import { IUsers } from "../@types/user";
import { Alert } from "../utils/alert";
import { auth, provider } from "../utils/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { IOTP } from "../@types/otp";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});



export const sendOTP = async (credentials :  Partial<IUsers>) =>{

  try {

    const response = await api.post('/api/user/auth/send-otp',credentials)

    

    return response;
    
  } catch (error ) {


    
    return error.response.data
    
  }

}

export const register = async (user: Partial<IUsers>,otp: IOTP) => {
  try {
    const response = await api.post("/api/user/auth/register", {user,otp});

    if (response.data.success) {
      return response.data.data;
    }
    return null;
  } catch (error) {

    const responseData = error?.response?.data;

    if (responseData?.statusCode === 500) {
    
      return new Alert(true, responseData.error);
    }

    const errorData = JSON.parse(responseData?.error || "[]");

    if (Array.isArray(errorData)) {
      const formattedErrors: { [key: string]: string } = {};
      errorData.forEach((detail: { path: string[]; message: string }) => {
        if (detail.path && detail.path.length > 0) {
          formattedErrors[detail.path[0]] = detail.message;
        }
      });

      return formattedErrors; 
    }

   
    return new Alert(true, "An unexpected error occurred.");
  }
};


export const login = async (credential: Partial <IUsers>)=>{
  
  try {
    
      const loginResponse = await api.post('/api/user/auth/login',credential)

      console.log(loginResponse);
      
      if(loginResponse.data.success){
        return loginResponse.data
      }


  } catch (error) {

    return error.response
    
    
  }

}

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const {user} = result;
    const response =  await api.post('/api/user/auth/google-sign-in',user)

    return response.data
  
  } catch (error) {

    return null
   
  }
};


export const logout = async ()=>{


}
