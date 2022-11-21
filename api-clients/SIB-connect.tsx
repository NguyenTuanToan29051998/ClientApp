import axiosClient from "./axios-client";

export const SIBConnectManagementAPI = {

  getSIBNeedSupport(PageNumber: number, PageSize: number) {
    return axiosClient.get(`/SibConnect/GetAll?PageNumber=${PageNumber}&PageSize=${PageSize}&Type=0`);
  },

  getSIBSupport(PageNumber: number, PageSize: number) {
    return axiosClient.get(`/SibConnect/GetAll?PageNumber=${PageNumber}&PageSize=${PageSize}&Type=1`);
  },
};
