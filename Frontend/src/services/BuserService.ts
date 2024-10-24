import { IWorkspace } from "../@types/workspace";
import { businessUserApi } from "./instance/BusinessInstance";


const api = businessUserApi;


export const  submitWorkspaceData = async(data:IWorkspace)=>{

    try {

        const response = await api.post('/api/business/work-space',data)

        

        return response
        
    } catch (error) {
        
        return error.response
    }

}

export const getAllPendingSubmission = async (
    page: number,
    itemsPerPage: number
  ) => {
    try {
      const response = await api.get(
        `/api/business/workspace-submission?page=${page}&limit=${itemsPerPage}`
      );
  
      console.log(response);
      
  
      return response;
    } catch (error) {
      return error.response;
    }
  };

  
  export const getAllWorkspaces = async (
    page: number,
    itemsPerPage: number
  ) => {
    try {
      const response = await api.get(
        `/api/business/workspaces?page=${page}&limit=${itemsPerPage}`
      );
  
      console.log(response);
      
  
      return response;
    } catch (error) {
      return error.response;
    }
  };
  

  
  export const getApprovedWorkspaces = async (
    page: number,
    itemsPerPage: number
  ) => {
    try {
      const response = await api.get(
        `/api/business/approved-workspaces?page=${page}&limit=${itemsPerPage}`
      );
  
      return response;
    } catch (error) {
      return error.response;
    }
  };

export const getBookingsByOwnerId = async (ownerId: string, page: number, itemsPerPage: number) => {
  try {
    const response = await api.get(
      `/api/business/bookings?ownerId=${ownerId}&page=${page}&limit=${itemsPerPage}`
    );

    return response;
  } catch (error) {
    return error.response;
  }
};


export const getDataForDashboard = async()=>{
  try {
     const response = await api.get('/api/business/dashboard')

     return response
    
  } catch (error) {

    return error.response;
  }
}


export const getDetailedReport = async (filters:URLSearchParams)=>{
  try {
    

    const response = await api.get(`/api/business/booking-report?${filters.toString()}`)

    return response

  } catch (error) {
    
    return error.response
  }
}
