import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from 'react';
import { useRouter } from 'next/router';
import Title from '../atoms/titles/Title';
import { FirstStepType } from '@/models/registerSIBHubs';
import InputField from '../atoms/inputs/InputField';
import RadioButton from '../atoms/radiobuttons/RadioButton';
import {
  BUSINESS_OPTIONS,
  PHONE_NUMBER_REG,
  REGEX_EMAIL,
} from '../../public/const';
import BottomButtons from '../molecules/BottomButtons';
import styles from '../../styles/components/organisms/RegisterSIBHubFirstStep.module.scss';
import useTrans from '../../hooks/useTrans';

type PropTypes = {
  fisrtStepForm: FirstStepType;
  changeFisrtStepForm: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  setFisrtStepForm: Dispatch<SetStateAction<FirstStepType>>;
  setStepWizard: (stepWizard: number) => void;
  isDisableFisrtStep: () => boolean;
};

const RegisterSIBHubFirstStep: FC<PropTypes> = (props) => {
  const { fisrtStepForm, setFisrtStepForm, changeFisrtStepForm, setStepWizard, isDisableFisrtStep } = props;
  const router = useRouter();
  const trans = useTrans();
  const [showValidate, setShowValidate] = useState(false);

  const handleNextStep = (event: any) => {
    if (event) event.preventDefault();
    setShowValidate(true);
    if (isDisableFisrtStep()) {
      return;
    }
    setStepWizard(1);
  };

  return (
    <div className={styles.wrapper}>
      <Title name={trans.registerSIBHub.completeTitle} size={'large'} isUpperCase />
      <hr className="mb-4 pb-2" />
      <form onSubmit={handleNextStep}>
        <div className="mb-4 pb-2">
          <InputField
            label={'Họ và tên (bắt buộc)'}
            placeholder={'Vui lòng điền họ tên của bạn'}
            required
            value={fisrtStepForm.name}
            type={'text'}
            name={'name'}
            onChange={(event) => changeFisrtStepForm(event)}
            isError={showValidate && !fisrtStepForm.name.trim()}
            errorText={trans.requiredTextError}
          />
        </div>
        <div className="mb-4 pb-2">
          <InputField
            label={'Anh/chị giữ chức vụ gì trong doanh nghiệp? (bắt buộc)'}
            placeholder={'Vui lòng điền chức vụ trong doanh nghiệp của bạn'}
            required
            value={fisrtStepForm.position}
            type={'text'}
            name={'position'}
            onChange={(event) => changeFisrtStepForm(event)}
            isError={showValidate && !fisrtStepForm.position.trim()}
            errorText={trans.requiredTextError}
          />
        </div>
        <div className="mb-4 pb-2">
          <InputField
            label={'Tên đơn vị/doanh nghiệp (bắt buộc)'}
            placeholder={'Vui lòng điền tên đơn vị/doanh nghiệp'}
            required
            value={fisrtStepForm.companyName}
            type={'text'}
            name={'companyName'}
            onChange={(event) => changeFisrtStepForm(event)}
            isError={showValidate && !fisrtStepForm.companyName.trim()}
            errorText={trans.requiredTextError}
          />
        </div>
        <div className="mb-4 pb-2">
          <InputField
            label={'Mã số doanh nghiệp/mã số thuế (bắt buộc)'}
            placeholder={'Vui lòng nhập mã số thuế'}
            required
            value={fisrtStepForm.companyCode}
            type={'text'}
            name={'companyCode'}
            onChange={(event) => changeFisrtStepForm(event)}
            isError={showValidate && !fisrtStepForm.companyCode.trim()}
            errorText={trans.requiredTextError}
          />
        </div>
        <div className="mb-2 d-flex flex-column">
          <p className={styles.label}>Loại hình kinh doanh của doanh nghiệp là (bắt buộc) <span>*</span></p>
          {BUSINESS_OPTIONS.map((val, index) => (
            <div key={val.id} className="mb-3">
              <RadioButton ariaLabel="radio" label={val.content} checked={fisrtStepForm.businessType === val.id} onClick={() => setFisrtStepForm({ ...fisrtStepForm, businessType: index })} />
            </div>
          ))}
          {fisrtStepForm.businessType === 4 && (
            <div className="mb-3">
              <InputField
                placeholder={'Vui lòng điền loại hình kinh doanh'}
                value={fisrtStepForm.ortherBusinessType || ''}
                type={'text'}
                name={'ortherBusinessType'}
                onChange={(event) => changeFisrtStepForm(event)}
                isError={showValidate && !fisrtStepForm.ortherBusinessType?.trim()}
                errorText={trans.requiredTextError}
              />
            </div>
          )}
          {showValidate && fisrtStepForm.businessType === null && (
            <p className={styles.errorText}>{trans.registerSIBHub.ortherBusinessTypeInvalid}</p>
          )}
        </div>
        <div className="mb-4 pb-2">
          <InputField
            label={'Số điện thoại đăng ký Zalo (bắt buộc)'}
            placeholder={'Vui lòng điền số điện thoại'}
            required
            value={fisrtStepForm.phoneNumber}
            type={'text'}
            name={'phoneNumber'}
            onChange={(event) => changeFisrtStepForm(event)}
            isError={showValidate && (!fisrtStepForm.phoneNumber || !PHONE_NUMBER_REG.test(fisrtStepForm.phoneNumber))}
            errorText={!fisrtStepForm.phoneNumber ? trans.requiredTextError : trans.phoneTextError}
          />
        </div>
        <div className="mb-4 pb-2">
          <InputField
            label={'Email (bắt buộc)'}
            placeholder={'Vui lòng điền email'}
            required
            value={fisrtStepForm.email}
            type={'text'}
            name={'email'}
            onChange={(event) => changeFisrtStepForm(event)}
            isError={showValidate && (!fisrtStepForm.email || !REGEX_EMAIL.test(fisrtStepForm.email))}
            errorText={!fisrtStepForm.email ? trans.requiredTextError : trans.emailTextError}
          />
        </div>
        <BottomButtons next={trans.continue} handleBack={() => router.back()} />
      </form>
    </div>
  );
};

export default RegisterSIBHubFirstStep;
