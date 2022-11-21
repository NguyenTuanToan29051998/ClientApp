import { FC } from 'react';
import { SecondStepType } from '@/models/register';
import CustomLabel from '../atoms/labels/CustomLabel';

type PropTypes = {
  secondStepForms: SecondStepType[];
};

const RegisterSecondStepResult: FC<PropTypes> = (props) => {
  const { secondStepForms } = props;
  console.log(secondStepForms);

  return (
    <>
      {(secondStepForms || []).map((secondForm, index) => (
        <div key={secondForm.name}>
          {index > 0 && <hr className="my-4 py-1" />}
          <div className="mb-4">
            <CustomLabel title={'Thành viên 1'} desc={secondForm.name} />
          </div>
          <div className="mb-4">
            <CustomLabel title={'Giới tính'} desc={secondForm.gender} />
          </div>
          <div className="mb-4">
            <CustomLabel title={'Email'} desc={secondForm.email} />
          </div>
          <div className="mb-4">
            <CustomLabel title={'Số di động'} desc={secondForm.phoneNumber} />
          </div>
          <div className="mb-4">
            <CustomLabel title={'Chức danh'} desc={secondForm.vocative} />
          </div>
        </div>
      ))}

    </>
  );
};

export default RegisterSecondStepResult;
