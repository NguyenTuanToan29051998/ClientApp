import axiosClient from "./axios-client";

export const introduceApi = {

  getIntroduce(type: number) {
    return axiosClient.get(`/Introduce/GetByType?introduceType=${type}`);
  },
};
