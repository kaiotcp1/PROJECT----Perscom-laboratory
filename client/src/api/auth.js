import apiRequest from "./axiosConfig";

export const LoginUser = async (payload) => {
    return await apiRequest({
      method: "POST",
      endPoint: "/api/v1/auth/login",
      payload,
    });
  };

  export const GetCurrentUser = async () => {
    return await apiRequest({
      method: "GET",
      endPoint: "/api/v1/user/current-user",
    });
  };