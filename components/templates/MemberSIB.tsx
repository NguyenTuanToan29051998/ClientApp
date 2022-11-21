import { ChangeEvent, FC, useState } from 'react';
import InputField from '../atoms/inputs/InputField';
import Title from '../atoms/titles/Title';
import TextAreaField from '../atoms/inputs/TextAreaField';
import SecondaryButton from '../atoms/buttons/SecondaryButton';
import styles from '../../styles/components/templates/MemberSIB.module.scss';
import Checkbox from '../atoms/checkboxs/Checkbox';
import { NUMBER_REG, PHONE_NUMBER_REG } from '../../public/const';
import AddButton from '../atoms/buttons/AddButton';

type FormType = {
  companyName: string;
  email: string;
  phoneNumber: string;
  reasonToJoin: string;
}

const MemberSIB: FC = () => {

  const [memberSIBForm, setMemberSIBForm] = useState<FormType>({
    companyName: '',
    email: '',
    phoneNumber: '',
    reasonToJoin: '',
  });

  const [checkbox, setCheckbox] = useState(false);

  const handleValidateForm = (name: string, value: string) => {
    if (name.includes('phoneNumber') && !NUMBER_REG.test(value)) {
      if (!NUMBER_REG.test(value)) return;
      if (!PHONE_NUMBER_REG.test(value)) return console.log(1);
    }
  };

  const changeForm = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = event.target;
    handleValidateForm(name, value);
    setMemberSIBForm({ ...memberSIBForm, [name]: value });
  };

  const handleSubmit = () => {
    console.log(1);
  };

  return (
    <div className={styles.memberSIB}>
      <div className="mb-3">
        <Title name={'Đăng ký thành viên mạng lưới SIB'} />
      </div>
      <hr className="my-4" />
      {/* <form action=""> */}
      <div className="mb-4">
        <InputField
          label={'Tên doanh nghiệp/tổ chức (bắt buộc)'}
          placeholder={'Ví dụ: Công ty TNHH ABC'}
          required
          value={memberSIBForm.companyName}
          type={'text'}
          name={'companyName'}
          ariaLabel={'Tên doanh nghiệp/tổ chức'}
          onChange={(event) => changeForm(event)}
        />
      </div>
      <div className="mb-4">
        <InputField
          label={'Số điện thoại liên hệ (bắt buộc)'}
          placeholder={'Ví dụ: 0234567891'}
          required
          value={memberSIBForm.phoneNumber}
          type={'text'}
          name={'phoneNumber'}
          ariaLabel={'Số điện thoại liên hệ'}
          onChange={(event) => changeForm(event)}
        />
      </div>
      <div className="mb-4">
        <InputField
          label={'Địa chỉ email (bắt buộc)'}
          placeholder={'Ví dụ: thongtin@abc.com'}
          required
          value={memberSIBForm.email}
          type={'text'}
          name={'email'}
          ariaLabel={'email'}
          onChange={(event) => changeForm(event)}
        />
      </div>
      <div className="mb-4">
        <TextAreaField
          label={'Lý do tổ chức hoặc doanh nghiệp của bạn muốn tham gia (bắt buộc)'}
          placeholder={'Lý do tham gia'}
          required
          value={memberSIBForm.reasonToJoin}
          type={'text'}
          isError
          errorText="aaa"
          maxLenght={250}
          name={'reasonToJoin'}
          ariaLabel={'Lý do tham gia'}
          onChange={(event) => changeForm(event)}
        />
      </div>

      <AddButton label={'Các tài liệu khác'} name={'Thêm tài liệu'} ariaLabel={'Thêm tài liệu'} />

      <div className="mb-4">
        <Checkbox label={'Nhận thông tin mới nhất là ISEECOVID'} checked={checkbox} onClick={() => setCheckbox(!checkbox)} />
      </div>

      <div className={styles.btnArea}>
        <SecondaryButton name={'GỬI'} onClick={handleSubmit} />
      </div>
      {/* </form> */}
    </div>
  );
};

export default MemberSIB;
