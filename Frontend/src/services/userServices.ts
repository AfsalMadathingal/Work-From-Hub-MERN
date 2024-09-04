import { IUsers } from "../@types/user";
import { userAxiosInstance } from "./instance/userInstance";

const api = userAxiosInstance;

export const subscribe = async (userId: string, planId: string) => {
  try {
    const response = await api.post(
      "/api/subscriptions/create-checkout-session",
      {
        userId,
        planId,
      }
    );

    return response;
  } catch (error) {
    return error.response;
  }
};

export const editUserData = async (user:IUsers) => {
  try {

    const response = await api.patch('/api/user/',user)

    return response

  } catch (error) {

    return error.response;
    
  }
};
