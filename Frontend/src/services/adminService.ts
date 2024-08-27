import axios from "axios";
import { IAdmin } from "../@types/admin";
import { adminAxiosInstance } from "./instance/adminInstance";



const api = adminAxiosInstance;


export const getPlans = async (accessToken :string)=>{

    try {

        const response = await api.get('/api/admin/plan',{
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          })


          
        
          return response
    } catch (error) {
        



    return error.response;
    
    }


}


