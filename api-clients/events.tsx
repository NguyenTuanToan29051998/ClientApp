import axiosClient from "./axios-client";

export const eventApiManagement = {

  getEvents(pageNumber: number, pageSize: number) {
    return axiosClient.get(`/Event/GetAll?PageNumber=${pageNumber}&PageSize=${pageSize}`);
  },

  getEventDetail(id: string) {
    return axiosClient.get(`/Event/GetEvent/${id}`);
  },
};
