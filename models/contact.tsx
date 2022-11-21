export type ContactType = {
  id: number,
  name: string,
  address: string,
  createdAt: string,
  email_1: string,
  email_2: string,
  facebook: string,
  fax: string,
  isActive: boolean,
  modifiedAt: string,
  phone_1: string,
  phone_2: string,
}

export type ContactFormType = {
  name: string,
  email: string,
  question: string,
};
