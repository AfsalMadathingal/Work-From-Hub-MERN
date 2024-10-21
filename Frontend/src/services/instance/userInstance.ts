import axios from "axios";
import { toast } from "react-toastify";

const API_URL = import.meta.env.VITE_API_URL;

export const userAxiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});


const controllerMap = new Map();


// Request interceptor
userAxiosInstance.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  // Create a new AbortController for each request if one doesn't exist
  if (!config.signal) {
    const controller = new AbortController();
    config.signal = controller.signal;
    controllerMap.set(config.url, controller);
  }

  return config;
});

// Response interceptor
userAxiosInstance.interceptors.response.use(
  (response) => {
    controllerMap.delete(response.config.url);
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const url = originalRequest.url;

    if (error.response) {
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

      if (error.response.status >= 500) {
        toast.error("Server error, please try again later.");
      }

      if (error.response.status >= 400 && error.response.status < 500 && error.response.status !== 401) {
        toast.error(`${error.response.data.error || 'An error occurred'}`);
      }
    } else if (error.request) {
      toast.error("Network error, please check your connection.");
    } else {
      toast.error("An unexpected error occurred.");
    }

    controllerMap.delete(url);
    return Promise.reject(error);
  }
);

async function getNewAccessToken() {
  const response = await axios.get(`${API_URL}api/user/auth/refresh-token`, {
    withCredentials: true,
  });
  return response.data.data.accessToken;
}