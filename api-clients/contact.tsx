import axiosClient from "./axios-client";

export const contactApiManagement = {

  getContactFooter() {
    return axiosClient.get('/Contact/GetMainContact');
  },

  getContact() {
    return axiosClient.get('/Contact/GetListContact');
  },
};
