import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from 'react';
import SecondaryButton from '../atoms/buttons/SecondaryButton';
import BackButton from '../atoms/buttons/BackButton';
import RegisterMember from '../molecules/RegisterMember';
import AddButton from '../atoms/buttons/AddButton';
import { SecondStepType } from '@/models/register';
import styles from '../../styles/components/organisms/RegisterSecondStep.module.scss';
import useTrans from '../../hooks/useTrans';
import useValidate from '../../hooks/useValidate';

const MAX_LENGHT = 50;

type PropTypes = {
  secondStepForms: SecondStepType[],
  handleChangeDropdow: (value: string, name: string, index: number) => void,
  changeSecondStepForm: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => void,
  isDisableSecondtep: () => boolean,
  setSecondStepForms: Dispatch<SetStateAction<SecondStepType[]>>,
  setStepWizard: (stepWizard: number) => void,
};

const RegisterSecondStep: FC<PropTypes> = (props) => {
  const {
    secondStepForms,
    changeSecondStepForm,
    setSecondStepForms,
    isDisableSecondtep,
    setStepWizard,
    handleChangeDropdow,
  } = props;
  const trans = useTrans();
  const { isEmailInvalid, isPhoneNumberInvalid } = useValidate();
  const [showInvalid, setShowInvalid] = useState<boolean>(false);

  const addMember = () => {
    const defaultValueSecondStep = {
      name: '',
      vocative: '',
      gender: '',
      email: '',
      phoneNumber: '',
      title: '',
    };
    setSecondStepForms([...secondStepForms, defaultValueSecondStep]);
  };

  const removeMember = (index: number) => {
    let newFormValues = [...secondStepForms];
    newFormValues.splice(index, 1);
    setSecondStepForms(newFormValues);
  };

  const isDisableNextStep = () => {
    return secondStepForms.some((val) => {
      return isEmailInvalid(val.email)
        || isPhoneNumberInvalid(val.phoneNumber)
        || val.name.length > MAX_LENGHT
        || val.title.length > MAX_LENGHT;
    });
  };

  const handleNextStep = (event: any) => {
    if (event) event.preventDefault();
    setShowInvalid(true);
    if (isDisableNextStep()) return;
    setStepWizard(3);
    window.scrollTo(0, 0);
  };

  return (
    <form className={styles.firstStep} onSubmit={handleNextStep}>
      {secondStepForms.map((val, index) => (
        <RegisterMember
          key={index}
          formValue={val}
          index={index}
          showInvalid={showInvalid}
          showBtnRemove={secondStepForms.length > 1}
          removeMember={removeMember}
          handleChangeDropdow={handleChangeDropdow}
          changeSecondStepForm={changeSecondStepForm}
        />
      ))}
      <AddButton
        label={trans.registerToReceiveSupport.addMember}
        name={trans.registerToReceiveSupport.addMemberBtn}
        onClick={addMember}
        isDisable={secondStepForms.length > 9}
        ariaLabel="Thêm thành viên"
      />
      <div className="d-flex justify-content-between align-items-center">
        <BackButton content={trans.back} onClick={() => setStepWizard(1)} />
        <div className={styles.btnArea}>
          <SecondaryButton name={trans.continue} type={'submit'} isDisabled={isDisableSecondtep()} ariaLabel="Tiếp tục" />
        </div>
      </div>
    </form>
  );
};

export default RegisterSecondStep;
