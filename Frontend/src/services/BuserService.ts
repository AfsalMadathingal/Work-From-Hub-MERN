import { AxiosError } from "axios";
import { businessUserApi } from "./instance/BusinessInstance";


const api = businessUserApi;


export const  submitWorkspaceData = async(data : FormData)=>{

    try {

        const response = await api.post('/api/business/work-space',data)

        

        return response
        
    }  catch (error: unknown) {
      if (error instanceof AxiosError) {
        return error.response;
      } else {
        return null
      }
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
  
      ;
      
  
      return response;
    }  catch (error: unknown) {
      if (error instanceof AxiosError) {
        return error.response;
      } else {
        return null
      }
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
  
      ;
      
  
      return response;
    }  catch (error: unknown) {
      if (error instanceof AxiosError) {
        return error.response;
      } else {
        return null
      }
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
    }  catch (error: unknown) {
      if (error instanceof AxiosError) {
        return error.response;
      } else {
        return null
      }
    }
  };

export const getBookingsByOwnerId = async (ownerId: string, page: number, itemsPerPage: number) => {
  try {
    const response = await api.get(
      `/api/business/bookings?ownerId=${ownerId}&page=${page}&limit=${itemsPerPage}`
    );

    return response;
  }  catch (error: unknown) {
    if (error instanceof AxiosError) {
      return error.response;
    } else {
      return null
    }
  }
};


export const getDataForDashboard = async()=>{
  try {
     const response = await api.get('/api/business/dashboard')

     return response
    
  }  catch (error: unknown) {
    if (error instanceof AxiosError) {
      return error.response;
    } else {
      return null
    }
  }
}


export const getDetailedReport = async (filters:URLSearchParams)=>{
  try {
    

    const response = await api.get(`/api/business/booking-report?${filters.toString()}`)

    return response

  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      return error.response;
    } else {
      return null
    }
  }
}
