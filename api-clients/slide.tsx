import axiosClient from "./axios-client";

export const slideApiManagement = {

  get() {
    return axiosClient.get('/Slide/GetAll');
  },
};
