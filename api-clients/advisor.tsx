import axiosClient from "./axios-client";

export const advisorApiManagement = {

  getAdvisors(isProfessor: boolean) {
    return axiosClient.get(`Adviser/GetAll?isProfessor=${isProfessor}`);
  },

  getAdvisorsHomepage() {
    return axiosClient.get('/Adviser/GetAdviserHomePage');
  },

  getAdvisorDetail(id: string) {
    return axiosClient.get(`/Adviser/GetPostById/${id}`);
  },
};
