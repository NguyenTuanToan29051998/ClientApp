import { ChangeEvent, FC, useState } from 'react';
import InputField from '../atoms/inputs/InputField';
import Dropdown from '../atoms/dropdowns/Dropdown';
import { SecondStepType } from '@/models/register';
import { NavDropdown } from 'react-bootstrap';
import useValidate from '../../hooks/useValidate';
import useTrans from '../../hooks/useTrans';
import styles from '../../styles/components/molecules/RegisterMember.module.scss';

type PropTypes = {
  index: number,
  formValue: SecondStepType,
  showInvalid: boolean,
  showBtnRemove?: boolean,
  removeMember: (index: number) => void,
  handleChangeDropdow: (value: string, name: string, index: number) => void,
  changeSecondStepForm: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => void,
};

const MAX_LENGHT = 50;

const RegisterMember: FC<PropTypes> = (props) => {
  const { formValue, index, showInvalid, showBtnRemove, removeMember, changeSecondStepForm, handleChangeDropdow } = props;
  const { isEmailInvalid, isPhoneNumberInvalid } = useValidate();
  const trans = useTrans();

  return (
    <div className={styles.wrapper}>
      {index > 0 && <hr className="my-4 py-1" />}
      <div className="mb-4 pb-1 d-flex justify-content-between">
        <h4 className={styles.title}>{trans.member} {index + 1}</h4>
        {showBtnRemove && <button className={styles.btnRemove} onClick={() => removeMember(index)}>{trans.registerToReceiveSupport.removeMemberBtn}</button>}
      </div>
      <div>
        <div className="mb-3 pb-3">
          <InputField
            label={'Họ và tên (bắt buộc)'}
            placeholder={'Ví dụ: Nguyễn Văn A'}
            required
            value={formValue.name}
            type={'text'}
            name={'name'}
            isError={showInvalid && formValue.name.length > MAX_LENGHT}
            errorText={`Không được vượt quá ${MAX_LENGHT} ký tự`}
            ariaLabel={'Họ và tên'}
            onChange={(event) => changeSecondStepForm(event, index)}
          />
        </div>

        <div className={styles.dropdown}>
          <Dropdown
            label={'Xưng hô (không bắt buộc)'}
            placeholder={'Vui lòng chọn'}
            value={formValue.vocative}
            name={'vocative'}
          >
            {(['Ông', 'Bà'] || []).map((val) => (
              <NavDropdown.Item onClick={() => handleChangeDropdow(val, 'vocative', index)} key={Math.random()}>{val}</NavDropdown.Item>
            ))}
          </Dropdown>
        </div>

        <div className={styles.dropdown}>
          <Dropdown
            label={'Giới tính (không bắt buộc)'}
            placeholder={'Vui lòng chọn'}
            value={formValue.gender}
            name={'gender'}
          >
            {(['Nam', 'Nữ'] || []).map((val) => (
              <NavDropdown.Item onClick={() => handleChangeDropdow(val, 'gender', index)} key={Math.random()}>{val}</NavDropdown.Item>
            ))}
          </Dropdown>
        </div>

        <div className="mb-3 pb-3">
          <InputField
            label={'Email (bắt buộc)'}
            placeholder={'Ví dụ: thongtin@info.com'}
            required
            value={formValue.email}
            type={'text'}
            name={'email'}
            isError={showInvalid && isEmailInvalid(formValue.email)}
            errorText={trans.emailTextError}
            ariaLabel={'Email'}
            onChange={(event) => changeSecondStepForm(event, index)}
          />
        </div>

        <div className="mb-3 pb-3">
          <InputField
            label={'Số di động (bắt buộc)'}
            placeholder={'Vui lòng điền số di động'}
            required
            value={formValue.phoneNumber}
            type={'text'}
            name={'phoneNumber'}
            isError={showInvalid && isPhoneNumberInvalid(formValue.phoneNumber)}
            errorText={trans.phoneTextError}
            ariaLabel={'Số di động'}
            onChange={(event) => changeSecondStepForm(event, index)}
          />
        </div>

        <div className="mb-3 pb-3">
          <InputField
            label={'Chức danh (bắt buộc)'}
            placeholder={'Vui lòng điền chức danh'}
            required
            value={formValue.title}
            type={'text'}
            name={'title'}
            isError={showInvalid && formValue.title.length > MAX_LENGHT}
            errorText={`Không được vượt quá ${MAX_LENGHT} ký tự`}
            ariaLabel={'Chức danh'}
            onChange={(event) => changeSecondStepForm(event, index)}
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterMember;
