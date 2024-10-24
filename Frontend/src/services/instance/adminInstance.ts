import axios from "axios";
import store from "../../redux/store/store";
import { resetAdmin } from "../../redux/slices/adminSlice";

const API_URL = import.meta.env.VITE_API_URL;
export const adminAxiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

const controllerMap = new Map();

// Request interceptor
adminAxiosInstance.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("adminAccessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  // Create a new AbortController if one doesn't exist for the request
  if (!config.signal) {
    const controller = new AbortController();
    config.signal = controller.signal;
    controllerMap.set(config.url, controller);
  }

  return config;
});

// Response interceptor
adminAxiosInstance.interceptors.response.use(
  (response) => {
    // Remove the controller from the map once the request is successful
    controllerMap.delete(response.config.url);
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const url = originalRequest.url;

    // Handle token refresh if 401 Unauthorized is encountered
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const newAccessToken = await getNewAccessToken();

        localStorage.setItem("adminAccessToken", newAccessToken);
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return adminAxiosInstance(originalRequest);
      } catch (error) {
        store.dispatch(resetAdmin())
        return Promise.reject(error);
      }
    }

    // Remove the controller from the map in case of an error
    controllerMap.delete(url);
    return Promise.reject(error);
  }
);

// Function to get a new access token
async function getNewAccessToken() {
  const response = await axios.get(
    `${API_URL}api/admin/auth/refresh-token`,
    { withCredentials: true }
  );

  return response.data.data.accessToken;
}
