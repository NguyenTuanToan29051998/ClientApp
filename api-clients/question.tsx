import axiosClient from "./axios-client";

export const questionManagementAPI = {

  getAll(PageNumber: number, PageSize: number) {
    return axiosClient.get(`/FAQ/GetAll?PageNumber=${PageNumber}&PageSize=${PageSize}`);
  },
};
