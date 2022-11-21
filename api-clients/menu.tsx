import axiosClient from "./axios-client";

export const menuApiManagement = {

  getMenuList(typeUser: number) {
    return axiosClient.get(`/Menu/GetAll?dashBoard=${typeUser}`);
  },
};
