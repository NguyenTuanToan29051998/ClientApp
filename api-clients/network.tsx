import axiosClient from "./axios-client";

export const netWorkApiManagement = {

  getNetworkOfSIBList(pageNumber: number, pageSize: number) {
    return axiosClient.get(`SibNetwork/GetAll?PageNumber=${pageNumber}&PageSize=${pageSize}`);
  },
};
