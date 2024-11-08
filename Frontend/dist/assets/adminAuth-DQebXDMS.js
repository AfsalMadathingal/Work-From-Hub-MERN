import { a as axios, A as AxiosError } from "./index-Bxisd2S8.js";
import { s as store, g as resetAdmin } from "./index-BgyoVvld.js";
const API_URL = "https://workfromhub.afsalmadathingal.online";
const adminAxiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true
});
const controllerMap = /* @__PURE__ */ new Map();
adminAxiosInstance.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("adminAccessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  if (!config.signal) {
    const controller = new AbortController();
    config.signal = controller.signal;
    controllerMap.set(config.url, controller);
  }
  return config;
});
adminAxiosInstance.interceptors.response.use(
  (response) => {
    controllerMap.delete(response.config.url);
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const url = originalRequest.url;
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const newAccessToken = await getNewAccessToken();
        localStorage.setItem("adminAccessToken", newAccessToken);
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return adminAxiosInstance(originalRequest);
      } catch (error2) {
        store.dispatch(resetAdmin());
        return Promise.reject(error2);
      }
    }
    controllerMap.delete(url);
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
const api = adminAxiosInstance;
const login = async (credential) => {
  try {
    const response = await api.post("/api/admin/auth/login", credential);
    if (response.data.success) {
      localStorage.setItem("adminAccessToken", response.data.data.accessToken);
      return response.data;
    }
    return null;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    } else {
      return null;
    }
  }
};
const logout = async () => {
  try {
    const response = await api.patch("/api/admin/auth/logout", null, {
      withCredentials: true
    });
    localStorage.removeItem("adminAccessToken");
    if (response.data.success) {
      return response.data;
    }
    return null;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    } else {
      return null;
    }
  }
};
export {
  adminAxiosInstance as a,
  login as b,
  logout as l
};
