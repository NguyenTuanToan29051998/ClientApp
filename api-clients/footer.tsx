import axiosClient from "./axios-client";

export const sendEmail = {

  send(email: string) {
    return axiosClient.post('EmailAnnounce/Add',{Email: email});
  },
};
