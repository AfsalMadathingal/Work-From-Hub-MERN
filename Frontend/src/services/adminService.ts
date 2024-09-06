import axios from "axios";
import { IAdmin } from "../@types/admin";
import { adminAxiosInstance } from "./instance/adminInstance";
import { IUsers } from "../@types/user";
import { user } from "@nextui-org/react";
import { IBUsers } from "../@types/businessUser";



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


export const changePlanStatus = async(id:string,action:string)=>{

  try {
    

    return await  api.patch('/api/admin/plan',{id,action})

  } catch (error) {

    return error.response
    
  }

}


export const  getAllUsers = async (page:number,itemsPerPage:number)=>{

  try {

    const response = await api.get(`/api/admin/users?page=${page}&limit=${itemsPerPage}`)

    return response
    
  } catch (error) {
    return error.response
  }
}

export const  getAllBusinessUsers = async (page:number,itemsPerPage:number)=>{

  try {

    const response = await api.get(`/api/admin/business-users?page=${page}&limit=${itemsPerPage}`)

    return response
    
  } catch (error) {
    return error.response
  }
}


export const manageBlockAndUnblock = async (user: IUsers) => {
  try {


    const response = await adminAxiosInstance.patch(`/api/admin/users/block-and-unblock/${user._id}`);
    
    return response;
  } catch (error) {

    return error.response || { status: 500, data: { message: 'An error occurred' } };
  }
};


export const blockAndUnblockBUser = async (user: IBUsers) => {
  try {


    const response = await adminAxiosInstance.patch(`/api/admin/business-user/block-and-unblock/${user._id}`);
    
    return response;
  } catch (error) {

    return error.response || { status: 500, data: { message: 'An error occurred' } };
  }
};

export const EditUser = async (user:IUsers)=>{


  try {


    const response = await adminAxiosInstance.patch(`/api/admin/users`, user)


    return response
    
  } catch (error) {

    return error.response
    
  }



}


export const editBusinessUser = async (user:IUsers)=>{


  try {


    const response = await adminAxiosInstance.patch(`/api/admin/business-users`, user)


    return response
    
  } catch (error) {

    return error.response
    
  }



}
