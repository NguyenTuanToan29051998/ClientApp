import axios from "axios";
import axiosClient from "./axios-client";

export const libraryApiManagement = {

  getBookList(libraryType: number, pageNumber: number, pageSize: number) {
    return axiosClient.get(`Book/GetAll?LibraryType=${libraryType}&PageNumber=${pageNumber}&PageSize=${pageSize}`);
  },

  getVideoList(libraryType: number, pageNumber: number, pageSize: number) {
    return axiosClient.get(`Video/GetAll?LibraryType=${libraryType}&PageNumber=${pageNumber}&PageSize=${pageSize}`);
  },

  getDocumentList(libraryType: number, pageNumber: number, pageSize: number) {
    return axiosClient.get(`Document/GetAll?LibraryType=${libraryType}&PageNumber=${pageNumber}&PageSize=${pageSize}`);
  },

  getAudioURL(text: string) {
    return axiosClient.get(`/Speech/GetVoice?input=${text}`);
  },

};
