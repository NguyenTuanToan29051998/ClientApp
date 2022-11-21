import axiosClient from "./axios-client";

export const storyApiManagement = {

  getStoryList(typeUser: number, newsType: number, pageNumber: number, pageSize: number) {
    // newsType = [0,1] = news page, story page
    return axiosClient.get(`Post/GetAll?PostType=${typeUser}&NewsType=${newsType}&PageNumber=${pageNumber}&PageSize=${pageSize}`);
  },

  getStoryByHashtag(typeUser: number, newsType: number, hashtag: string, pageNumber: number, pageSize: number) {
    return axiosClient.get(`/Post/GetAll?PostType=${typeUser}&NewsType=${newsType}&Hashtag=${hashtag}&PageNumber=${pageNumber}&PageSize=${pageSize}`);
  },
};
