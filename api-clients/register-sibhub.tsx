import { FirstStepTypeBody } from "@/models/registerSIBHubs";
import axiosClient from "./axios-client";

export const sibhubManagementAPI = {

  getAllQuestion(typeForm: number) {
    return axiosClient.get(`/Form/GetQuestionFormByType?type=${typeForm}`);
  },

  addSibhub(data: FirstStepTypeBody) {
    return axiosClient.post('/SibHub/Add', data);
  },
};
