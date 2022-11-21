import axiosClient from "./axios-client";

export const mediaApiManagement = {

  getEventList(pageNumber: number, pageSize: number) {
    return axiosClient.get(`Event/GetAll?PageNumber=${pageNumber}&PageSize=${pageSize}`);
  },

  getEventByHashtag(hashtag: string, pageNumber: number, pageSize: number) {
    return axiosClient.get(`/Event/GetAll?Hashtag=${hashtag}&PageNumber=${pageNumber}&PageSize=${pageSize}`);
  },

  // newType:
  // 0 - news page
  // 1 - story page
  // 2 - SIB Support Package
  // 3 - General Training & Coaching
  // 4 - Enterprise connection
  // 5 - Market expansion
  // 6 - Capacity building
  // 7 - Policy development
  // 8 - Policy pilots

  getNewsList(typeUser: number, newsType: number, pageNumber: number, pageSize: number) {
    return axiosClient.get(`Post/GetAll?PostType=${typeUser}&NewsType=${newsType}&PageNumber=${pageNumber}&PageSize=${pageSize}`);
  },

  getNewsByHashtag(typeUser: number, newsType: number, hashtag: string, pageNumber: number, pageSize: number) {
    return axiosClient.get(`/Post/GetAll?PostType=${typeUser}&NewsType=${newsType}&Hashtag=${hashtag}&PageNumber=${pageNumber}&PageSize=${pageSize}`);
  },
};
