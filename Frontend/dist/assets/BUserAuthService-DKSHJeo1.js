import { aL as axios, aJ as AxiosError, bp as Alert } from "./index-BA_d4uvr.js";
const api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true
});
const sendOTP = async (credentials) => {
  try {
    const response = await api.post("/api/business/auth/send-otp", credentials);
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    } else {
      return null;
    }
  }
};
const register = async (user, otp) => {
  var _a;
  try {
    const response = await api.post("/api/business/auth/register", { user, otp });
    return response.data.success ? response.data.data : null;
  } catch (error) {
    if (error instanceof AxiosError) {
      const responseData = (_a = error == null ? void 0 : error.response) == null ? void 0 : _a.data;
      if ((responseData == null ? void 0 : responseData.statusCode) === 500) {
        return new Alert(true, responseData.error);
      }
      try {
        const errorData = JSON.parse((responseData == null ? void 0 : responseData.error) || "[]");
        if (Array.isArray(errorData)) {
          const formattedErrors = {};
          errorData.forEach((detail) => {
            var _a2;
            if ((_a2 = detail.path) == null ? void 0 : _a2[0]) {
              formattedErrors[detail.path[0]] = detail.message;
            }
          });
          return formattedErrors;
        }
      } catch (parseError) {
        console.error("Error parsing response error:", parseError);
      }
      return new Alert(true, "An unexpected error occurred.");
    } else {
      return null;
    }
  }
};
const login = async (credential) => {
  try {
    const loginResponse = await api.post("/api/business/auth/login", credential);
    if (loginResponse.data.success) {
      return loginResponse.data;
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
    const response = await api.patch("/api/business/auth/logout", null, {
      withCredentials: true
    });
    localStorage.removeItem("businessAccessToken");
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
  login as a,
  logout as l,
  register as r,
  sendOTP as s
};
