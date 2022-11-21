export type FirstStepType = {
  name: string,
  position: string,
  companyName: string,
  companyCode: string,
  phoneNumber: string,
  ortherBusinessType?: string,
  email: string,
  businessType: number | null,
}

export type SecondStepType = {
  question1: any,
  question2: any,
  question3: any,
  question4: any,
}

export type AnswerType = {
  formId: number,
  questionId: number,
  answer: string,
}

export type FirstStepTypeBody = {
  sibModel: {
    sibName: string,
    taxCode: string,
    zaloPhone: string,
    email: string,
    staffName: string,
    staffPosition: string,
    businessType: string,
  },
  answerModels: AnswerType[]
}
