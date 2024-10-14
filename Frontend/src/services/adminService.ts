import { adminAxiosInstance } from "./instance/adminInstance";
import { IUsers } from "../@types/user";
import { IBUsers } from "../@types/businessUser";
import { userAxiosInstance } from "./instance/userInstance";

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
  } catch (error) {
    return error.response;
  }
};

export const createPlan = async (accessToken: string, plan) => {


  

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
  } catch (error) {
    return error.response;
  }
};

export const getAllUsers = async (page: number, itemsPerPage: number) => {
  try {
    const response = await api.get(
      `/api/admin/users?page=${page}&limit=${itemsPerPage}`
    );

    return response;
  } catch (error) {
    return error.response;
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
  } catch (error) {
    return error.response;
  }
};

export const manageBlockAndUnblock = async (user: IUsers) => {
  try {
    const response = await adminAxiosInstance.patch(
      `/api/admin/users/block-and-unblock/${user._id}`
    );

    return response;
  } catch (error) {
    return (
      error.response || { status: 500, data: { message: "An error occurred" } }
    );
  }
};

export const blockAndUnblockBUser = async (user: IBUsers) => {
  try {
    const response = await adminAxiosInstance.patch(
      `/api/admin/business-user/block-and-unblock/${user._id}`
    );

    return response;
  } catch (error) {
    return (
      error.response || { status: 500, data: { message: "An error occurred" } }
    );
  }
};

export const EditUser = async (user: IUsers) => {
  try {
    const response = await adminAxiosInstance.patch(`/api/admin/users`, user);

    return response;
  } catch (error) {
    return error.response;
  }
};

export const editBusinessUser = async (user: IUsers) => {
  try {
    const response = await adminAxiosInstance.patch(
      `/api/admin/business-users`,
      user
    );

    return response;
  } catch (error) {
    return error.response;
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
  } catch (error) {
    return error.response;
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

    console.log(response);
    

    return response;
  } catch (error) {
    return error.response;
  }
};


export const getOwnerById = async (id:string)=>{

  try {
      
      const response = await api.get(`/api/admin/business-user/${id}`)

      return response

  } catch (error) {
      return error.response
  }
}

export const approveWorkspace = async (id:string)=>{
  try {
    

    const response = await api.patch(`/api/admin/approve-workspace/${id}`)

    return response

  } catch (error) {
    return error.response
  }
}

export const rejectWorkspace = async (id:string)=>{
  try {
    

    const response = await api.patch(`/api/admin/reject-workspace/${id}`)

    return response

  } catch (error) {

    return error.response
  }
}


export const getAllApprovedWorkspaces = async (page: number, itemsPerPage: number) => {

  try {
      const response = await api.get(`/api/admin/approved-workspaces?page=${page}&limit=${itemsPerPage}`)

      console.log('===================fromapi=================');
      console.log(response);
      console.log('====================================');

      return response

  } catch (error) {
      return error.response
  }
}

export const validateAdminSession = async ()=>{
  try {
    const response = await adminAxiosInstance.get('/api/admin/validate-session')
    return response
  } catch (error) {
    return error.response
  }
}

export const getAllBookings = async (page: number, itemsPerPage: number) => {

  try {

    const response = await api.get(`/api/admin/bookings?page=${page}&limit=${itemsPerPage}`)

    return response

  } catch (error) {

    return error.response
  }
}

