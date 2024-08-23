import axios from "axios";
import { Alert } from "../utils/alert";
import { IAdmin } from "../@types/admin";



const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});






export const login = async (credential: Partial <IAdmin>)=>{
  
  try {
    
      const loginResponse = await api.post('/api/admin/auth/login',credential)

      
      if(loginResponse.data.success){
        return loginResponse.data
      }

      return null


  } catch (error) {

    return error.response
    
    
  }

}



export const logout = async ()=>{


}
