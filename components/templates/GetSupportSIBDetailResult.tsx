import { Dispatch, FC, SetStateAction, useState } from 'react';
import useTrans from '../../hooks/useTrans';
import { FirstStepType, SecondStepType, ThirdStepType } from '@/models/register';
import BreadCrumb from '../molecules/BreadCrumb';
import TitleBlue from '../atoms/titles/TitleBlue';
import SecondaryButton from '../atoms/buttons/SecondaryButton';
import CancelButton from '../atoms/buttons/CancelButton';
import CompleteRegistration from '../organisms/CompleteRegistration';
import RegisterFirstStepResult from '../organisms/RegisterFirstStepResult';
import RegisterSecondStepResult from '../organisms/RegisterSecondStepResult';
import RegisterThirdStepResult from '../organisms/RegisterThirdStepResult';
import CustomModal from '../organisms/CustomModal';
import CustomContainer from '../molecules/CustomContainer';
import styles from '../../styles/components/templates/GetSupportSIBDetailResult.module.scss';
import { defaultValueFirstStep, defaultValueThirdStep } from '../../public/const';

const defaultValueSecondStep = {
  name: '',
  vocative: '',
  gender: '',
  email: '',
  phoneNumber: '',
  title: '',
};

type PropTypes = {
  fisrtStepForm: FirstStepType,
  secondStepForms: SecondStepType[],
  thirdStepForms: ThirdStepType,
  setStepWizardForm: (stepWizard: number) => void,
  setFisrtStepForm: Dispatch<SetStateAction<FirstStepType>>;
  setSecondStepForms: Dispatch<SetStateAction<SecondStepType[]>>
  setThirdStepForms: Dispatch<SetStateAction<ThirdStepType>>;
}

const GetSupportSIBDetailResult: FC<PropTypes> = (props) => {
  const {
    fisrtStepForm,
    secondStepForms,
    thirdStepForms,
    setSecondStepForms,
    setFisrtStepForm,
    setThirdStepForms,
    setStepWizardForm,
  } = props;
  const trans = useTrans();
  const [stepWizard, setStepWizard] = useState<number>(0);
  const [isComplated, setIsComplated] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleSubmit = () => {
    setIsComplated(true);
  };

  const handleCancel = () => {
    setSecondStepForms([defaultValueSecondStep]);
    setFisrtStepForm(defaultValueFirstStep);
    setThirdStepForms(defaultValueThirdStep);
    setShowModal(false);
    setStepWizardForm(1);
    window.scrollTo(0, 0);
  };

  const handleCurrentElement = () => {
    switch (stepWizard) {
      case 1:
        return <RegisterSecondStepResult secondStepForms={secondStepForms} />;
      case 2:
        return <RegisterThirdStepResult thirdStepForms={thirdStepForms} />;
      default:
        return <RegisterFirstStepResult fisrtStepForm={fisrtStepForm} />;
    }
  };

  return (
    <CustomContainer size="large">
      <div className={styles.breadCrumb}>
        <BreadCrumb firstLayer={trans.homePage} lastLayer={trans.registerToReceiveSupport.title} />
      </div>
      {!isComplated ? (
        <div className={styles.wrapper}>
          <h3 className={styles.title}>{trans.registerToReceiveSupport.title}</h3>
          <p className={styles.subTitle}>{'Tên gói hỗ trợ A'}</p>
          <div className={styles.container}>
            <TitleBlue name={trans.registerToReceiveSupport.subTitle[stepWizard]} size={'medium'} />
            <div className={styles.contentArea}>
              {handleCurrentElement()}
              <div className="text-center mt-4 pt-2">
                <div className={styles.wizardArea}>
                  {[...Array(3)].map((_, index: number) => (
                    <div
                      key={Math.random()}
                      className={stepWizard === index ? `${styles.item} ${styles.selected}` : styles.item}
                      onClick={() => setStepWizard(index)}
                      onKeyDown={() => setStepWizard(index)}
                      role="presentation"
                    >
                      {index + 1}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bottomArea}>
            <CancelButton
              ariaLabel={'Hủy bỏ'}
              onClick={() => setShowModal(true)}
              name={trans.cancel}
            />
            <div className={styles.btnArea}>
              <SecondaryButton onClick={handleSubmit} ariaLabel={'submit'} name={trans.register} />
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.completeArea}>
          <CompleteRegistration
            pageName={trans.registerToReceiveSupport.title}
            completeSubTitle={trans.registerToReceiveSupport.completeSubTitle}
            completeDesc={trans.collectNeeds.requestContent}
          />
        </div>
      )}

      <CustomModal title={trans.registerToReceiveSupport.modal.title} show={showModal} setShow={setShowModal}>
        <p className={styles.modalDecs}>{trans.registerToReceiveSupport.modal.desc}</p>
        <div className={styles.modalBtnArea}>
          <SecondaryButton
            name={trans.registerToReceiveSupport.modal.btn}
            ariaLabel={'Hủy đăng ký'}
            onClick={handleCancel}
          />
        </div>
      </CustomModal>
    </CustomContainer>
  );
};

export default GetSupportSIBDetailResult;
