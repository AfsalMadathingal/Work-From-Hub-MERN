import { adminAxiosInstance } from "./instance/adminInstance";
import { IUsers } from "../@types/user";
import { IBUsers } from "../@types/businessUser";
import { AxiosError } from "axios";
import { IPlan } from "../@types/plan";

const api = adminAxiosInstance;

export const getPlans = async (
  accessToken: string,
  page: number,
  itemsPerPage: number
) => {
  try {
    const response = await api.get(
      `/api/admin/plan?page=${page}&limit=${itemsPerPage}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return response;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      return error.response;
    } else {

      return null 

    }
  }
};

export const createPlan = async (accessToken: string, plan : IPlan) => {


  

  const response = await api.post("/api/admin/plan", plan, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },


  });

  return response;
};

export const changePlanStatus = async (id: string, action: string) => {
  try {
    return await api.patch("/api/admin/plan", { id, action });
  }  catch (error: unknown) {
    if (error instanceof AxiosError) {
      return error.response;
    } else {

      return null 

    }
  }
};

export const getAllUsers = async (page: number, itemsPerPage: number) => {
  try {
    const response = await api.get(
      `/api/admin/users?page=${page}&limit=${itemsPerPage}`
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

export const getAllBusinessUsers = async (
  page: number,
  itemsPerPage: number
) => {
  try {
    const response = await api.get(
      `/api/admin/business-users?page=${page}&limit=${itemsPerPage}`
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

export const manageBlockAndUnblock = async (user: IUsers) => {
  try {
    const response = await adminAxiosInstance.patch(
      `/api/admin/users/block-and-unblock/${user._id}`
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

export const blockAndUnblockBUser = async (user: IBUsers | null) => {
  try {
    const response = await adminAxiosInstance.patch(
      `/api/admin/business-user/block-and-unblock/${user?._id}`
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

export const EditUser = async (user: IUsers) => {
  try {
    const response = await adminAxiosInstance.patch(`/api/admin/users`, user);

    return response;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      return error.response;
    } else {

      return null 

    }
  }
};

export const editBusinessUser = async (user: IUsers) => {
  try {
    const response = await adminAxiosInstance.patch(
      `/api/admin/business-users`,
      user
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

export const searchPlans = async (
  page: number,
  itemsPerPage: number,
  query: string
) => {
  try {
    const response = await adminAxiosInstance.get(
      `/api/admin/plan?page=${page}&limit=${itemsPerPage}&query=${query}`
    );

    return response;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      return error.response;
    } else {

      return null 

    }
  }
};

export const getAllPendingSubmission = async (
  page: number,
  itemsPerPage: number
) => {
  try {
    const response = await api.get(
      `/api/admin/workspace-submission?page=${page}&limit=${itemsPerPage}`
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


export const getOwnerById = async (id:string)=>{

  try {

    
      
      const response = await api.get(`/api/admin/business-user/${id}`)

      return response

  }  catch (error: unknown) {
    if (error instanceof AxiosError) {
      return error.response;
    } else {

      return null 

    }
  }
}

export const approveWorkspace = async (id:string)=>{
  try {
    

    const response = await api.patch(`/api/admin/approve-workspace/${id}`)

    return response

  }  catch (error: unknown) {
    if (error instanceof AxiosError) {
      return error.response;
    } else {

      return null 

    }
  }
}

export const rejectWorkspace = async (id:string,reason:string)=>{
  try {
    

    const response = await api.patch(`/api/admin/reject-workspace/${id}`,{reason})

    return response

  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      return error.response;
    } else {

      return null 

    }
  }
}


export const getAllApprovedWorkspaces = async (page: number, itemsPerPage: number) => {

  try {
      const response = await api.get(`/api/admin/approved-workspaces?page=${page}&limit=${itemsPerPage}`)


      return response

  }  catch (error: unknown) {
    if (error instanceof AxiosError) {
      return error.response;
    } else {

      return null 

    }
  }
}

export const validateAdminSession = async ()=>{
  try {
    const response = await adminAxiosInstance.get('/api/admin/validate-session')
    return response
  }  catch (error: unknown) {
    if (error instanceof AxiosError) {
      return error.response;
    } else {

      return null 

    }
  }
}

export const getAllBookings = async (page: number, itemsPerPage: number) => {

  try {

    const response = await api.get(`/api/admin/bookings?page=${page}&limit=${itemsPerPage}`)

    return response

  }  catch (error: unknown) {
    if (error instanceof AxiosError) {
      return error.response;
    } else {

      return null 

    }
  }
}


export const getDashboardData = async ()=>{
  try {
    
    const response = await api.get('/api/admin/dashboard')

    return response; 

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
    

    const response = await api.get(`/api/admin/booking-report?${filters.toString()}`)

    return response

  }  catch (error: unknown) {
    if (error instanceof AxiosError) {
      return error.response;
    } else {

      return null 

    }
  }
}


export const getWorkspaceById = async  (id:string) =>{
  try {

    const response  =  await api.get(`/api/admin/approved-workspace/${id}`)

    return response;

    
  }  catch (error: unknown) {
    if (error instanceof AxiosError) {
      return error.response;
    } else {

      return null 

    }
  }
}


export const getWorkspace  = async  (id:string) =>{
  try {

    const response  =  await api.get(`/api/admin/workspace/${id}`)

    return response;

    
  }  catch (error: unknown) {
    if (error instanceof AxiosError) {
      return error.response;
    } else {

      return null 

    }
  }
}
