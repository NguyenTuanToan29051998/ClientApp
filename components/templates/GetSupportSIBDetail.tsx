import { FC, useState } from 'react';
import RegisterFirstStep from '../organisms/RegisterFirstStep';
import RegisterSecondStep from '../organisms/RegisterSecondStep';
import RegisterThirdStep from '../organisms/RegisterThirdStep';
import CustomWizard from '../molecules/CustomWizard';
import useRegistration from '../../hooks/useRegistration';
import BreadCrumb from '../molecules/BreadCrumb';
import useTrans from '../../hooks/useTrans';
import GetSupportSIBDetailResult from './GetSupportSIBDetailResult';
import CustomContainer from '../molecules/CustomContainer';
import styles from '../../styles/components/templates/GetSupportSIBDetail.module.scss';
import { SupportPackageType } from '@/models/support-package';

type PropsTypes = {
  supportPackage: SupportPackageType,
};

const GetSupportSIBDetail: FC<PropsTypes> = (props) => {
  const { supportPackage } = props;

  const {
    fisrtStepForm,
    secondStepForms,
    thirdStepForms,
    changeFisrtStepForm,
    isDisableFisrtStep,
    setFisrtStepForm,
    changeSecondStepForm,
    setSecondStepForms,
    handleChangeDropdow,
    isDisableSecondStep,
    changeThirdStepForm,
    setThirdStepForms,
    isDisableThirdStep,
  } = useRegistration();
  const [stepWizard, setStepWizard] = useState<number>(1);
  const trans = useTrans();

  const handleCurrentElement = () => {
    switch (stepWizard) {
      case 2:
        return (
          <RegisterSecondStep
            secondStepForms={secondStepForms}
            changeSecondStepForm={changeSecondStepForm}
            handleChangeDropdow={handleChangeDropdow}
            isDisableSecondtep={isDisableSecondStep}
            setSecondStepForms={setSecondStepForms}
            setStepWizard={setStepWizard}
          />
        );
      case 3:
        return (
          <RegisterThirdStep
            thirdStepForms={thirdStepForms}
            name={supportPackage.name}
            changeThirdStepForm={changeThirdStepForm}
            isDisableThirdStep={isDisableThirdStep}
            setStepWizard={setStepWizard}
          />
        );
      default:
        return (
          <RegisterFirstStep
            fisrtStepForm={fisrtStepForm}
            name={supportPackage.name}
            setFisrtStepForm={setFisrtStepForm}
            changeFisrtStepForm={changeFisrtStepForm}
            isDisableFisrtStep={isDisableFisrtStep}
            setStepWizard={setStepWizard}
          />
        );
    }
  };

  return (
    <>
      {[1, 2, 3].includes(stepWizard) ? (
        <CustomContainer size="large">
          <BreadCrumb firstLayer={trans.homePage} firstPath={'/home'} lastLayer={trans.registerToReceiveSupport.title} />
          <div className={styles.wrapper}>
            <h3 className={styles.title}>{trans.registerToReceiveSupport.title}</h3>
            <p className={styles.subTitle}>{trans.registerToReceiveSupport.subTitle[stepWizard - 1]}</p>
            <CustomWizard stepWizard={stepWizard} setStepWizard={setStepWizard} disableStep={[isDisableFisrtStep(), isDisableSecondStep(), isDisableThirdStep()]} />
            <hr className={styles.line} />
            {handleCurrentElement()}
          </div>
        </CustomContainer>
      ) : (
        <GetSupportSIBDetailResult
          fisrtStepForm={fisrtStepForm}
          secondStepForms={secondStepForms}
          thirdStepForms={thirdStepForms}
          setFisrtStepForm={setFisrtStepForm}
          setSecondStepForms={setSecondStepForms}
          setThirdStepForms={setThirdStepForms}
          setStepWizardForm={setStepWizard}
        />
      )}
    </>
  );
};

export default GetSupportSIBDetail;
