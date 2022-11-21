import axiosClient from "./axios-client";

export const supportProgramManagementAPI = {
  getAll() {
    return axiosClient.get('/SupportProgram/GetAll?PageNumber=1&PageSize=99&ProgramType=0');
  },

  getDetail(id: number) {
    return axiosClient.get(`/SupportProgram/Get/${id}`);
  },

  getProgramList(ProgramType: number) {
    return axiosClient.get(`/SupportProgram/GetAll?ProgramType=${ProgramType}&PageNumber=1&PageSize=99`);
  },
};
