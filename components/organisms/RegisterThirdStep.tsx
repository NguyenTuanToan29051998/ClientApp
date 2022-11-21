import { ChangeEvent, FC } from 'react';
import SecondaryButton from '../atoms/buttons/SecondaryButton';
import styles from '../../styles/components/organisms/RegisterThirdStep.module.scss';
import BackButton from '../atoms/buttons/BackButton';
import Title from '../atoms/titles/Title';
import TextAreaField from '../atoms/inputs/TextAreaField';
import { ThirdStepType } from '@/models/register';
import useTrans from '../../hooks/useTrans';

const MAX_LENGHT = 300;

type PropTypes = {
  thirdStepForms: ThirdStepType,
  name: string,
  changeThirdStepForm: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, maxLenght: number) => void,
  isDisableThirdStep: () => boolean,
  setStepWizard: (stepWizard: number) => void,
};

const RegisterThirdStep: FC<PropTypes> = (props) => {
  const trans = useTrans();
  const { thirdStepForms, name, changeThirdStepForm, isDisableThirdStep, setStepWizard } = props;

  const handleNextStep = () => {
    setStepWizard(4);
    window.scrollTo(0, 0);
  };

  return (
    <div className={styles.wrapper}>
      <div className="my-4 py-1">
        <Title name={name} size={'small'} />
      </div>
      <div>
        <div className="mb-4 pb-1">
          <TextAreaField
            label={'Mô tả các thách thức mà doanh nghiệp của bạn phải đối mặt do Covid-19'}
            placeholder={'Điền mô tả'}
            value={thirdStepForms.challenge}
            type={'text'}
            maxLenght={MAX_LENGHT}
            name={'challenge'}
            ariaLabel={'các thách thức'}
            onChange={(event) => changeThirdStepForm(event, MAX_LENGHT)}
          />
        </div>

        <div className="mb-4 pb-1">
          <TextAreaField
            label={'Mô tả các giải pháp giúp doanh nghiệp của bạn để thích ứng với Covid-19 và cách thức triển khaci các giải pháp'}
            placeholder={'Điền mô tả'}
            value={thirdStepForms.solution}
            type={'text'}
            maxLenght={MAX_LENGHT}
            name={'solution'}
            ariaLabel={'Mô tả các giải pháp'}
            onChange={(event) => changeThirdStepForm(event, MAX_LENGHT)}
          />
        </div>

        <div className="mb-4 pb-1">
          <TextAreaField
            label={'Mô tả lợi ích đối với khách hàng và tác động tích cực đến môi trường xã hội của các giải pháp'}
            placeholder={'Điền mô tả'}
            value={thirdStepForms.benefit}
            type={'text'}
            maxLenght={MAX_LENGHT}
            name={'benefit'}
            ariaLabel={'Mô tả lợi ích'}
            onChange={(event) => changeThirdStepForm(event, MAX_LENGHT)}
          />
        </div>

        <div className="d-flex justify-content-between align-items-center mt-5">
          <BackButton aria-label="Quay lại" content={trans.back} onClick={() => setStepWizard(2)} />
          <div className={styles.btnArea}>
            <SecondaryButton onClick={handleNextStep} ariaLabel={'Tiếp tục'} name={trans.continue} isDisabled={isDisableThirdStep()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterThirdStep;
