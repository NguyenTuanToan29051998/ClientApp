import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from 'react';
import SecondaryButton from '../atoms/buttons/SecondaryButton';
import InputField from '../atoms/inputs/InputField';
import TextAreaField from '../atoms/inputs/TextAreaField';
import Title from '../atoms/titles/Title';
import { FirstStepType } from '@/models/register';
import useTrans from '../../hooks/useTrans';
import { defaultValueFirstStep } from '../../public/const';
import styles from '../../styles/components/organisms/RegisterFirstStep.module.scss';
import CancelButton from '../atoms/buttons/CancelButton';
import useValidate from '../../hooks/useValidate';

type PropTypes = {
  fisrtStepForm: FirstStepType,
  name: string,
  changeFisrtStepForm: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  setFisrtStepForm: Dispatch<SetStateAction<FirstStepType>>,
  setStepWizard: (stepWizard: number) => void,
  isDisableFisrtStep: () => boolean,
};

const RegisterFirstStep: FC<PropTypes> = (props) => {
  const { fisrtStepForm, name, changeFisrtStepForm, setStepWizard, isDisableFisrtStep, setFisrtStepForm } = props;
  const trans = useTrans();
  const { isPercentInvalid } = useValidate();
  const [showValidate, setShowValidate] = useState<boolean>(false);

  const handleValidatePercent = (value: string) => {
    return !!value && (isNaN(+value.replace('%', '')) || isPercentInvalid(+value.replace('%', '')) || !value.includes('%'));
  };

  const handleNextStep = (event: any) => {
    if (event) event.preventDefault();
    setShowValidate(true);
    if (handleValidatePercent(fisrtStepForm.femaleEmployee) || handleValidatePercent(fisrtStepForm.vulnerable)) return;
    setStepWizard(2);
    window.scrollTo(0, 0);
  };

  const resetFormValue = () => {
    setFisrtStepForm(defaultValueFirstStep);
  };

  return (
    <div className={styles.firstStep}>
      <div className="my-4">
        <Title name={name} size={'small'} />
      </div>
      <form onSubmit={handleNextStep}>
        <div className="mb-4">
          <InputField
            label={'Tên doanh nghiệp/tổ chức (bắt buộc)'}
            placeholder={'Ví dụ: Công ty TNHH ABC'}
            required
            value={fisrtStepForm.companyName}
            type={'text'}
            name={'companyName'}
            ariaLabel={'Tên doanh nghiệp/tổ chức'}
            onChange={(event) => changeFisrtStepForm(event)}
          />
        </div>
        <div className="mb-4">
          <InputField
            label={'Địa chỉ (bắt buộc)'}
            placeholder={'Số nhà, phường/xã, quận/huyện, tỉnh/thành'}
            required
            value={fisrtStepForm.address}
            type={'text'}
            name={'address'}
            ariaLabel={'Địa chỉ'}
            onChange={(event) => changeFisrtStepForm(event)}
          />
        </div>
        <div className="mb-4">
          <InputField
            label={'Ngành nghề (bắt buộc)'}
            placeholder={'Vui lòng điền ngành nghề'}
            required
            value={fisrtStepForm.occupation}
            type={'text'}
            name={'occupation'}
            ariaLabel={'Ngành nghề'}
            onChange={(event) => changeFisrtStepForm(event)}
          />
        </div>
        <div className="mb-4">
          <InputField
            label={'Năm thành lập (bắt buộc)'}
            placeholder={'Ví dụ: 2019'}
            required
            value={fisrtStepForm.yearEstablishment}
            type={'text'}
            name={'yearEstablishment'}
            ariaLabel={'Năm thành lập'}
            onChange={(event) => changeFisrtStepForm(event)}
          />
        </div>
        <div className="mb-4">
          <InputField
            label={'Số lượng nhân viên'}
            placeholder={'Ví dụ: 2000'}
            value={fisrtStepForm.numberEmployees}
            type={'text'}
            name={'numberEmployees'}
            ariaLabel={'Số lượng nhân viên'}
            onChange={(event) => changeFisrtStepForm(event)}
          />
        </div>
        <div className="mb-4">
          <InputField
            label={'Tỷ lệ nhân viên nữ'}
            placeholder={'Ví dụ: 2018'}
            value={fisrtStepForm.femaleEmployee}
            type={'text'}
            name={'femaleEmployee'}
            ariaLabel={'Tỷ lệ nhân viên nữ'}
            isError={showValidate && !!fisrtStepForm.femaleEmployee && handleValidatePercent(fisrtStepForm.femaleEmployee)}
            errorText={trans.percentInvalid}
            onChange={(event) => changeFisrtStepForm(event)}
          />
        </div>
        <div className="mb-4">
          <InputField
            label={'Tỷ lệ nhân viên thuộc nhóm dễ tổn thương'}
            placeholder={'Ví dụ: 40%'}
            value={fisrtStepForm.vulnerable}
            type={'text'}
            name={'vulnerable'}
            isError={showValidate && !!fisrtStepForm.vulnerable && handleValidatePercent(fisrtStepForm.vulnerable)}
            errorText={trans.percentInvalid}
            ariaLabel={'Tỷ lệ nhân viên thuộc nhóm dễ tổn thương'}
            onChange={(event) => changeFisrtStepForm(event)}
          />
        </div>
        <div className="mb-4">
          <TextAreaField
            label={'Kinh nghiệm, thành tựu chính'}
            placeholder={''}
            value={fisrtStepForm.experience}
            type={'text'}
            maxLenght={1000}
            name={'experience'}
            ariaLabel={'Kinh nghiệm, thành tựu chính'}
            onChange={(event) => changeFisrtStepForm(event)}
          />
        </div>
        <div className="mb-4">
          <TextAreaField
            label={'Thông tin bổ sung'}
            placeholder={''}
            value={fisrtStepForm.information}
            type={'text'}
            maxLenght={250}
            name={'information'}
            ariaLabel={'Thông tin bổ sung'}
            onChange={(event) => changeFisrtStepForm(event)}
          />
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <div>
            {Object.values(fisrtStepForm).some((val) => !!val) && (
              <CancelButton
                ariaLabel={'Xóa form'}
                onClick={resetFormValue}
                name={trans.registerToReceiveSupport.reset}
              />
            )}
          </div>
          <div className={styles.submitFormBtn}>
            <SecondaryButton type="submit" ariaLabel="Tiếp tục" name={trans.continue} isDisabled={isDisableFisrtStep()} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterFirstStep;
