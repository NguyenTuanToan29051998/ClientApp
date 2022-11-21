import { FirstStepType, SecondStepType, ThirdStepType } from "@/models/register";
import { ChangeEvent, useState } from "react";
import { defaultValueFirstStep, defaultValueThirdStep } from "../public/const";
import useValidate from "./useValidate";

const MAX_LENGHT = 9_999_999;
const MAX_LENGHT_COMPANY_NAME = 50;
const MAX_LENGHT_EXPERIENCE = 1000;
const MAX_LENGHT_INFORMATION = 250;

const defaultValueSecondStep = {
  name: '',
  vocative: '',
  gender: '',
  email: '',
  phoneNumber: '',
  title: '',
};

const useRegistration = () => {
  const { isNumberInvalid, isTextInvalid } = useValidate();
  const [fisrtStepForm, setFisrtStepForm] = useState<FirstStepType>(
    defaultValueFirstStep
  );

  const [secondStepForms, setSecondStepForms] = useState<SecondStepType[]>([
    defaultValueSecondStep
  ]);

  const [thirdStepForms, setThirdStepForms] = useState<ThirdStepType>(
    defaultValueThirdStep
  );

  const changeFisrtStepForm = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    if (['yearEstablishment', 'numberEmployees'].includes(name) && isNumberInvalid(value)) return;
    if (['numberEmployees'].includes(name) && +value > MAX_LENGHT) return;
    if (['companyName'].includes(name) && value.length > MAX_LENGHT_COMPANY_NAME) return;
    if (['experience'].includes(name) && value.length > MAX_LENGHT_EXPERIENCE) return;
    if (['information'].includes(name) && value.length > MAX_LENGHT_INFORMATION) return;
    if (['occupation'].includes(name) && isTextInvalid(value)) return;
    setFisrtStepForm({ ...fisrtStepForm, [name]: value });
  };

  const handleChangeDropdow = (value: string, name: string, index: number) => {
    const data = [...secondStepForms];
    (data[index] as any)[name] = value;
    setSecondStepForms(data);
  };


  const changeSecondStepForm = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
    const { name, value } = event.target;
    if (['name', 'title'].includes(name) && isTextInvalid(value)) return;
    if (name.includes('phoneNumber') && isNumberInvalid(value)) return;

    const data = [...secondStepForms];
    (data[index] as any)[name] = value;
    setSecondStepForms(data);
  };

  const changeThirdStepForm = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, maxLenght: number) => {
    const { name, value } = event.target;
    if (value.length > maxLenght) {
      return;
    }
    setThirdStepForms({ ...thirdStepForms, [name]: value });
  };

  const isDisableFisrtStep = () => {
    const { companyName, address, occupation, yearEstablishment } = fisrtStepForm;
    if (!companyName.trim() || !address.trim() || !occupation.trim() || !yearEstablishment.trim()) {
      return true;
    }
    return false;
  };

  const isDisableSecondStep = () => {
    return secondStepForms.some((value: SecondStepType) => {
      const { name, email, phoneNumber, title } = value;
      return !name.trim() || !email || !phoneNumber || !title.trim();
    });
  };

  const isDisableThirdStep = () => {
    return Object.values(thirdStepForms).some((val) => val.trim() === '');
  };

  return {
    fisrtStepForm,
    secondStepForms,
    thirdStepForms,
    isDisableFisrtStep,
    setFisrtStepForm,
    changeFisrtStepForm,
    changeSecondStepForm,
    setSecondStepForms,
    handleChangeDropdow,
    isDisableSecondStep,
    changeThirdStepForm,
    setThirdStepForms,
    isDisableThirdStep,
  };
};

export default useRegistration;