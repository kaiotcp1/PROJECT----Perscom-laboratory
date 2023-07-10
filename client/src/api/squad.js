import apiRequest from "./axiosConfig";

export const createSquad = async (payload) => {
    return await apiRequest({
      method: "POST",
      endPoint: "/api/v1/squad/",
      payload,
    });
  };

  export const getSquads = async () => {
    return await apiRequest({
      method: "GET",
      endPoint: "/api/v1/squad/",
    });
  };