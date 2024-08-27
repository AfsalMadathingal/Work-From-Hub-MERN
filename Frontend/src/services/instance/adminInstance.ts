import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
export const adminAxiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

const cancelTokenMap = new Map();

//request interceptor
adminAxiosInstance.interceptors.request.use(async (config) => {
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
adminAxiosInstance.interceptors.response.use(
  (response) => {
    cancelTokenMap.delete(response.config.url);
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const url = originalRequest.url;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const newAccessToken = await getNewAccessToken();

        localStorage.setItem("accessToken", newAccessToken);
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return adminAxiosInstance(originalRequest);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    cancelTokenMap.delete(url);
    return Promise.reject(error);
  }
);

async function getNewAccessToken() {
  const response = await axios.get(
    `${API_URL}api/admin/auth/refresh-token`,
    { withCredentials: true }
  );


  return response.data.data.accessToken;
}