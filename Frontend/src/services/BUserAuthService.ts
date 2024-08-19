import axios from "axios";
import { IBUsers } from "../@types/businessUser";
import { Alert } from "../utils/aler";


const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

export const register = async (credentials: Partial<IBUsers>) => {
  try {
    const response = await api.post("/api/business/register", credentials);

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


export const login = async (credential: Partial <IBUsers>)=>{
  
  try {
    
      const loginResponse = await api.post('/api/business/login',credential)

      console.log(loginResponse);
      
      if(loginResponse.data.success){
        return loginResponse.data
      }


  } catch (error) {

    return error.response
    
    
  }

}



export const logout = async ()=>{


}
