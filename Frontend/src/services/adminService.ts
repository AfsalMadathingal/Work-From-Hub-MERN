import axios from "axios";
import { IAdmin } from "../@types/admin";
import { adminAxiosInstance } from "./instance/adminInstance";



const api = adminAxiosInstance;


export const getPlans = async (accessToken :string , page:number,itemsPerPage:number)=>{

    try {

        const response = await api.get(`/api/admin/plan?page=${page}&limit=${itemsPerPage}`,{
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          })


          
        
          return response
    } catch (error) {
        



    return error.response;
    
    }


}


export const createPlan = async (accessToken:string , plan) =>{

  const response = await api.post('/api/admin/plan',plan,{
    headers: {
      Authorization: `Bearer ${accessToken}`
    }


  })





  

  return response
}


export const  getAllUsers = async (page:number,itemsPerPage:number)=>{

  try {

    const response = await api.get(`/api/admin/users?page=${page}&limit=${itemsPerPage}`)

    return response
    
  } catch (error) {
    return error.response
  }
}


