import axios from "axios";
import { toast } from "react-toastify";

const API_URL = import.meta.env.VITE_API_URL;

export const userAxiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});



const cancelTokenMap = new Map();

//request interceptor
userAxiosInstance.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  if (!config.cancelToken) {
    const source = axios.CancelToken.source();
    config.cancelToken = source.token;
    cancelTokenMap.set(config.url, source);
  }
  return config;
});

//response interceptor
userAxiosInstance.interceptors.response.use(
  (response) => {
    cancelTokenMap.delete(response.config.url);
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const url = originalRequest.url;

    if (error.response) {
      // Handle specific error codes
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          const newAccessToken = await getNewAccessToken();
          localStorage.setItem("accessToken", newAccessToken);
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return userAxiosInstance(originalRequest);
        } catch (err) {
          toast.error("Session expired, please log in again.");
          return Promise.reject(err);
        }
      }

      // Handle other server errors (5xx)
      if (error.response.status >= 500) {
        toast.error("Server error, please try again later.");
      }

      // Handle other client errors (4xx, excluding 401)
      if (error.response.status >= 400 && error.response.status < 500 && error.response.status !== 401) {
        toast.error(`Error ${error.response.status}: ${error.response.data.message || 'An error occurred'}`);
      }
    } else if (error.request) {
      // Handle network or request errors
      toast.error("Network error, please check your connection.");
    } else {
      // Any other error
      toast.error("An unexpected error occurred.");
    }

    cancelTokenMap.delete(url);
    return Promise.reject(error);
  }
);


async function getNewAccessToken() {
  const response = await axios.get(
    `${API_URL}api/user/auth/refresh-token`,
    { withCredentials: true }
  );


  return response.data.data.accessToken;
}