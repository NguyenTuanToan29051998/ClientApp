import { Dispatch, FC, SetStateAction } from 'react';
import { AnswerType, FirstStepType, FirstStepTypeBody, SecondStepType } from '@/models/registerSIBHubs';
import RadioButton from '../atoms/radiobuttons/RadioButton';
import BottomButtons from '../molecules/BottomButtons';
import TabTitle from '../atoms/titles/TabTitle';
import Checkbox from '../atoms/checkboxs/Checkbox';
import styles from '../../styles/components/organisms/RegisterSIBHubSecondStep.module.scss';
import Title from '../atoms/titles/Title';
import { BUSINESS_OPTIONS, SIB_HUBS_QUESTION_1, SIB_HUBS_QUESTION_2, SIB_HUBS_QUESTION_3, SIB_HUBS_QUESTION_4 } from '../../public/const';
import TitleBlue from '../atoms/titles/TitleBlue';
import useTrans from '../../hooks/useTrans';
import { sibhubManagementAPI } from '../../api-clients/register-sibhub';

type PropTypes = {
  fisrtStepForm: FirstStepType;
  secondStepForms: SecondStepType;
  setSecondStepForms: Dispatch<SetStateAction<SecondStepType>>;
  setStepWizard: (stepWizard: number) => void;
};

const RegisterSIBHubSecondStep: FC<PropTypes> = (props) => {
  const { fisrtStepForm, secondStepForms, setSecondStepForms, setStepWizard } = props;
  const trans = useTrans();

  const handleNextStep = (event: any) => {
    if (event) event.preventDefault();
    const secondStepFormsData: Array<AnswerType> = [];
    const answer1: AnswerType = {
      formId: 29,
      questionId: 41,
      answer: JSON.stringify(secondStepForms.question1)
    };
    const answer2: AnswerType = {
      formId: 29,
      questionId: 42,
      answer: JSON.stringify(secondStepForms.question2)
    };
    const answer3: AnswerType = {
      formId: 29,
      questionId: 43,
      answer: JSON.stringify(secondStepForms.question3)
    };
    const answer4: AnswerType = {
      formId: 29,
      questionId: 44,
      answer: secondStepForms.question4
    };
    secondStepFormsData.push(answer1, answer2, answer3, answer4);
    const fisrtStepFormData: FirstStepTypeBody = {
      sibModel: {
        staffName: fisrtStepForm.name,
        taxCode: fisrtStepForm.companyCode,
        zaloPhone: fisrtStepForm.phoneNumber,
        email: fisrtStepForm.email,
        sibName: fisrtStepForm.companyName,
        staffPosition: fisrtStepForm.position,
        businessType: (fisrtStepForm.businessType === 4 ? fisrtStepForm.ortherBusinessType : BUSINESS_OPTIONS[fisrtStepForm.businessType || 0].content) || '',
      },
      answerModels: secondStepFormsData
    };
    sibhubManagementAPI.addSibhub(fisrtStepFormData)
      .then((_) => {
      })
      .catch((err) => console.log(err));
    setStepWizard(2);
    window.scrollTo(0, 0);
  };

  const handleBackStep = () => {
    setStepWizard(0);
  };

  const handleCheckbox = (index: string, datas: string[]) => {
    const answerValue = datas.includes(index)
      ? datas.filter((val: any) => val !== index)
      : [...datas, index];
    return answerValue;
  };

  const handleMuiltiCheckbox = (index: string, data: any, value: number) => {
    const answerValue = Object.keys(data).includes(index.toString()) && data[index] === value
      ? delete data[index] && data
      : { ...data, [index]: value };
    return answerValue;
  };

  return (
    <form className={styles.wrapper} onSubmit={handleNextStep}>
      <Title name={trans.registerSIBHub.completeTitle} size={'large'} isUpperCase />
      <hr className="mb-4 pb-2" />
      <div className="mb-4">
        <TitleBlue name={trans.registerSIBHub.demandSurvey} />
      </div>
      <div className={styles.question}>
        <div className="mb-3">
          <TabTitle title={SIB_HUBS_QUESTION_1.question} />
        </div>
        {SIB_HUBS_QUESTION_1.answer.map((val, index) => (
          <div key={val.id} className="my-3">
            <Checkbox
              label={val.content}
              checked={secondStepForms.question1.includes(val.content)}
              onClick={() => setSecondStepForms({ ...secondStepForms, question1: handleCheckbox(val.content, secondStepForms.question1) })}
            />
          </div>
        ))}
      </div>
      <div className={styles.question}>
        <div className="mb-3">
          <TabTitle title={SIB_HUBS_QUESTION_2.question} />
        </div>
        <div className={`row ${styles.formatTab}`}>
          <div className="col-7 p-0" />
          <div className="col col-lg-2 d-flex justify-content-center">Miễn phí</div>
          <div className="col col-lg-2 d-flex justify-content-center">Trả phí</div>
        </div>
        {SIB_HUBS_QUESTION_2.answer.map((val, index) => (
          <div className="row my-3 m-0" key={val.id}>
            <div className="col-7 p-0">
              <div className="col-9">{val.content}</div>
            </div>
            <div className="col col-lg-2 d-flex justify-content-center">
              <Checkbox checked={secondStepForms.question2[val.content] === 0} onClick={() => setSecondStepForms({ ...secondStepForms, question2: handleMuiltiCheckbox(val.content, secondStepForms.question2, 0) })} />
            </div>
            <div className="col col-lg-2 d-flex justify-content-center">
              <Checkbox checked={secondStepForms.question2[val.content]} onClick={() => setSecondStepForms({ ...secondStepForms, question2: handleMuiltiCheckbox(val.content, secondStepForms.question2, 1) })} />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.question}>
        <div className="mb-3">
          <TabTitle title={SIB_HUBS_QUESTION_3.question} />
        </div>
        <div className={`row ${styles.formatTab}`}>
          <div className="col-5 p-0" />
          <div className="col-7 row">
            {[...Array(5)].map((_, index) => (
              <div key={Math.random()} className="col d-flex justify-content-center">{index + 1}</div>
            ))}
          </div>
        </div>
        {SIB_HUBS_QUESTION_3.answer.map((val, indexAnswer) => (
          <div key={val.id} className="row my-3 m-0">
            <div className="col-5 p-0">
              <div className="col-8">{val.content}</div>
            </div>
            <div className="col-7 row">
              {[...Array(5)].map((_, index) => (
                <div key={Math.random()} className="col d-flex justify-content-center p-0">
                  <Checkbox checked={secondStepForms.question3[val.content] === index + 1} onClick={() => setSecondStepForms({ ...secondStepForms, question3: handleMuiltiCheckbox(val.content, secondStepForms.question3, index + 1) })} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.question}>
        <div className="mb-3">
          <TabTitle title={SIB_HUBS_QUESTION_4.question} />
        </div>
        {SIB_HUBS_QUESTION_4.answer.map((val, index) => (
          <div key={val.id} className="row my-3">
            <RadioButton label={val.content} checked={secondStepForms.question4 === val.content} onClick={() => setSecondStepForms({ ...secondStepForms, question4: val.content })} />
          </div>
        ))}
      </div>
      <div className="mt-5">
        <BottomButtons next={trans.send} handleBack={handleBackStep} />
      </div>
    </form>
  );
};

export default RegisterSIBHubSecondStep;
