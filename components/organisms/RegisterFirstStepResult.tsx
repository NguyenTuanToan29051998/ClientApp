import { FC } from 'react';
import { FirstStepType } from '@/models/register';
import CustomLabel from '../atoms/labels/CustomLabel';

type PropTypes = {
  fisrtStepForm: FirstStepType;
};

const RegisterFirstStepResult: FC<PropTypes> = (props) => {
  const { fisrtStepForm } = props;

  return (
    <>
      <div className="mb-4">
        <CustomLabel title={'Tên doanh nghiệp/tổ chức'} desc={fisrtStepForm.companyName} />
      </div>
      <div className="mb-4">
        <CustomLabel title={'Địa chỉ'} desc={fisrtStepForm.address} />
      </div>
      <div className="mb-4">
        <CustomLabel title={'Ngành nghề'} desc={fisrtStepForm.occupation} />
      </div>
      <div className="mb-4">
        <CustomLabel title={'Năm thành lập'} desc={fisrtStepForm.yearEstablishment} />
      </div>
      <div className="mb-4">
        <CustomLabel title={'Số lượng nhân viên'} desc={fisrtStepForm.numberEmployees} />
      </div>
      <div className="mb-4">
        <CustomLabel title={'Tỷ lệ nhân viên nữ'} desc={fisrtStepForm.femaleEmployee.replace(/^0+/, '')} />
      </div>
      <div className="mb-4">
        <CustomLabel title={'Tỷ lệ nhân viên thuộc nhóm dễ tổn thương'} desc={fisrtStepForm.vulnerable.replace(/^0+/, '')} />
      </div>
      <div className="mb-4">
        <CustomLabel title={'Kinh nghiệm, thành tựu chính'} desc={fisrtStepForm.experience} isDecoration />
      </div>
      <div className="mb-4">
        <CustomLabel title={'Thông tin bổ sung'} desc={fisrtStepForm.information} isDecoration />
      </div>
    </>
  );
};

export default RegisterFirstStepResult;
