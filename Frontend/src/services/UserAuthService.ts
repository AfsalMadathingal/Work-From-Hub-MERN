import axios, { AxiosError } from "axios";
import { IUsers } from "../@types/user";
import { Alert } from "../utils/alert";
import { auth, provider } from "../utils/firebase";
import { signInWithPopup } from "firebase/auth";
import { IOTP } from "../@types/otp";
import { userAxiosInstance } from "./instance/userInstance";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});



export const sendOTP = async (credentials :  Partial<IUsers>) =>{

  try {

    const response = await api.post('/api/user/auth/send-otp',credentials)

    

    return response;
    
  }  catch (error: unknown) {
    if (error instanceof AxiosError) {
      return error.response;
    } else {
      return null
    }
  }

}

export const register = async (user: Partial<IUsers>,otp: IOTP) => {
  try {
    const response = await api.post("/api/user/auth/register", {user,otp});

    if (response.data.success) {
      return response.data.data;
    }
    return null;
  }  catch (error: unknown) {

    if (error instanceof AxiosError) {
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
    } else {
      return null
    }
  }

};


export const login = async (credential: Partial <IUsers>)=>{
  
  try {
    
      const loginResponse = await api.post('/api/user/auth/login',credential)

      ;
      
      if(loginResponse.data.success){
        return loginResponse.data
      }


  }  catch (error: unknown) {
    if (error instanceof AxiosError) {
      return error.response;
    } else {
      return null
    }
  }

}

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const {user} = result;
    const response =  await api.post('/api/user/auth/google-sign-in',user)

    return response.data
  
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      return error.response;
    } else {
      return null
    }
  }
};


export const logout = async ()=>{

  try {
    const response = await api.patch('/api/user/auth/logout',null,{
      withCredentials:true
    });

    localStorage.removeItem('accessToken')

    if(response.data.success){
     
      return response.data
    }

    
    return null

  }  catch (error: unknown) {
    if (error instanceof AxiosError) {
      return error.response;
    } else {
      return null
    }
  }

}


export const forgotPasswordSendOTP = async (email:string)=>{


  try {

    const response = await userAxiosInstance.post('/api/user/auth/send-otp-forgot',{email})



    return response
    
  }  catch (error: unknown) {
    if (error instanceof AxiosError) {
      return error.response;
    } else {
      return null
    }
  }

}

export const forgotPasswordVerifyOTP = async (otp :string,email:string)=>{
  try {

    const response = await userAxiosInstance.post('/api/user/auth/otp-verify',{otp,email})

    return response
    
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      return error.response;
    } else {
      return null
    }
  }
}

export const forgotPasswordReset = async (password :string,token:string)=>{
  try {

    const response = await userAxiosInstance.patch('/api/user/auth/forgot-password-reset',{password,token})

    return response
    
  }  catch (error: unknown) {
    if (error instanceof AxiosError) {
      return error.response;
    } else {
      return null
    }
  }
}
