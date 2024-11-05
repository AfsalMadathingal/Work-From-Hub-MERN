import { aL as axios, bh as store, bi as resetBUser, aJ as AxiosError } from "./index-CTy2qHgP.js";
const API_URL = "http://localhost:5000";
const businessUserApi = axios.create({
  baseURL: API_URL,
  withCredentials: true
});
const controllerMap = /* @__PURE__ */ new Map();
businessUserApi.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("businessAccessToken");
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
businessUserApi.interceptors.response.use(
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
        localStorage.setItem("businessAccessToken", newAccessToken);
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return businessUserApi(originalRequest);
      } catch (error2) {
        store.dispatch(resetBUser());
        return Promise.reject(error2);
      }
    }
    controllerMap.delete(url);
    return Promise.reject(error);
  }
);
async function getNewAccessToken() {
  const response = await axios.get(
    `${API_URL}api/business/auth/refresh-token`,
    { withCredentials: true }
  );
  return response.data.data.accessToken;
}
const api = businessUserApi;
const submitWorkspaceData = async (data) => {
  try {
    const response = await api.post("/api/business/work-space", data);
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    } else {
      return null;
    }
  }
};
const getAllWorkspaces = async (page, itemsPerPage) => {
  try {
    const response = await api.get(
      `/api/business/workspaces?page=${page}&limit=${itemsPerPage}`
    );
    ;
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    } else {
      return null;
    }
  }
};
const getApprovedWorkspaces = async (page, itemsPerPage) => {
  try {
    const response = await api.get(
      `/api/business/approved-workspaces?page=${page}&limit=${itemsPerPage}`
    );
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    } else {
      return null;
    }
  }
};
const getBookingsByOwnerId = async (ownerId, page, itemsPerPage) => {
  try {
    const response = await api.get(
      `/api/business/bookings?ownerId=${ownerId}&page=${page}&limit=${itemsPerPage}`
    );
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    } else {
      return null;
    }
  }
};
const getDataForDashboard = async () => {
  try {
    const response = await api.get("/api/business/dashboard");
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    } else {
      return null;
    }
  }
};
const getDetailedReport = async (filters) => {
  try {
    const response = await api.get(`/api/business/booking-report?${filters.toString()}`);
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    } else {
      return null;
    }
  }
};
export {
  getBookingsByOwnerId as a,
  getDataForDashboard as b,
  getAllWorkspaces as c,
  getApprovedWorkspaces as d,
  getDetailedReport as g,
  submitWorkspaceData as s
};
