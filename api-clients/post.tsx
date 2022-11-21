import axiosClient from "./axios-client";

export const productApi = {

  getPost() {
    return axiosClient.get('/products');
  },
};
