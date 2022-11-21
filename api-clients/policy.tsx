import axiosClient from "./axios-client";

export const policyApiManagement = {

  getAllPolicy(pageNumber: number, pageSize: number) {
    return axiosClient.get(`/Post/GetAll?PostType=2&NewsType=9&PageNumber=${pageNumber}&PageSize=${pageSize}`);
  },

  getPolicyByHashtag(hashtag: string, pageSize: number) {
    return axiosClient.get(`/Post/GetAll?PostType=2&NewsType=9&PageNumber=1&Hashtag=${hashtag}&PageSize=${pageSize}`);
  },
};
