
import { FirstStepType, SecondStepType } from "@/models/registerSIBHubs";
import { ChangeEvent, useState } from "react";
import { TEXT_NUMBER_REG } from "../public/const";
import useValidate from "./useValidate";

const MAX_LENGHT = 50;

const useRegistrationSIBHubs = () => {
  const { isEmailInvalid, isPhoneNumberInvalid, isNumberInvalid, isTextInvalid } = useValidate();
  const [fisrtStepForm, setFisrtStepForm] = useState<FirstStepType>({
    name: '',
    position: '',
    companyName: '',
    companyCode: '',
    phoneNumber: '',
    email: '',
    businessType: null,
    ortherBusinessType: '',
  });

  const [secondStepForms, setSecondStepForms] = useState<SecondStepType>({
    question1: [],
    question2: [],
    question3: [],
    question4: '',
  });

  const changeFisrtStepForm = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    if (['name', 'position'].includes(name) && (isTextInvalid(value) || value.length > MAX_LENGHT)) return;
    if (['companyName'.includes(name)] && value.length > MAX_LENGHT) return;
    if (['companyCode'].includes(name) && (value.length > 20 || !TEXT_NUMBER_REG.test(value))) return;
    if (name.includes('phoneNumber') && isNumberInvalid(value)) return;
    setFisrtStepForm({ ...fisrtStepForm, [name]: value });
  };

  const isDisableFisrtStep = () => {
    const { companyCode, companyName, email, name, phoneNumber, position, businessType, ortherBusinessType } = fisrtStepForm;
    if (
      !companyCode.trim() ||
      !companyName.trim() ||
      !email.trim() ||
      !name.trim() ||
      !phoneNumber ||
      !position.trim() ||
      businessType === null ||
      businessType === 4 && !ortherBusinessType ||
      isEmailInvalid(email) ||
      isPhoneNumberInvalid(phoneNumber)
      ) {
      return true;
    }

    return false;
  };

  return {
    fisrtStepForm,
    setFisrtStepForm,
    changeFisrtStepForm,
    isDisableFisrtStep,
    secondStepForms,
    setSecondStepForms
  };
};

export default useRegistrationSIBHubs;
