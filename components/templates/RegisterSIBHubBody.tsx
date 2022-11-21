import type { NextPage } from 'next';
import { useState } from 'react';
import useRegistrationSIBHubs from '../../hooks/useRegistrationSIBHubs';
import useTrans from '../../hooks/useTrans';
import CompleteRegistration from '../organisms/CompleteRegistration';
import RegisterSIBHubFirstStep from '../organisms/RegisterSIBHubFirstStep';
import RegisterSIBHubSecondStep from '../organisms/RegisterSIBHubSecondStep';

const RegisterSIBHubBody: NextPage = () => {
  const {
    fisrtStepForm,
    secondStepForms,
    setFisrtStepForm,
    changeFisrtStepForm,
    isDisableFisrtStep,
    setSecondStepForms
  } = useRegistrationSIBHubs();
  const trans = useTrans();

  const [stepWizard, setStepWizard] = useState<number>(0);

  const handleCurrentElement = () => {
    switch (stepWizard) {
      case 1:
        return (
          <RegisterSIBHubSecondStep
            fisrtStepForm={fisrtStepForm}
            secondStepForms={secondStepForms}
            setSecondStepForms={setSecondStepForms}
            setStepWizard={setStepWizard}
          />
        );
        break;
      case 2:
        return (
          <CompleteRegistration
            pageName={trans.registerSIBHub.completeTitle}
            completeSubTitle={trans.registerSIBHub.completeSubTitle}
            completeDesc={trans.registerSIBHub.completeDesc}
          />
        );
        break;
      default:
        return (
          <RegisterSIBHubFirstStep
            fisrtStepForm={fisrtStepForm}
            changeFisrtStepForm={changeFisrtStepForm}
            setFisrtStepForm={setFisrtStepForm}
            setStepWizard={setStepWizard}
            isDisableFisrtStep={isDisableFisrtStep}
          />
        );
        break;
    }
  };

  return (
    <div className="mt-3 pt-3">
      {handleCurrentElement()}
    </div>
  );
};

export default RegisterSIBHubBody;
