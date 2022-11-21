import axiosClient from "./axios-client";

export const searchManagementAPI = {

  getAll(searchInput: string, typeUser: number, pageNumber: number, pageSize: number) {
    return axiosClient.get(`Search?searchInput=${searchInput}&PostType=${typeUser}&PageNumber=${pageNumber}&PageSize=${pageSize}`);
  },
};
