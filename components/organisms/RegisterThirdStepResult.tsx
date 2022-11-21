import { FC } from 'react';
import { ThirdStepType } from '@/models/register';
import CustomLabel from '../atoms/labels/CustomLabel';

type PropTypes = {
  thirdStepForms: ThirdStepType;
};

const RegisterThirdStepResult: FC<PropTypes> = (props) => {
  const { thirdStepForms } = props;

  return (
    <>
      <div className="mb-4">
        <CustomLabel
          title={'Mô tả các thách thức mà doanh nghiệp của bạn phải đối mặt do Covid-19'}
          desc={thirdStepForms.challenge}
          isDecoration
        />
      </div>
      <div className="mb-4">
        <CustomLabel
          title={'Mô tả các giải pháp giúp doanh nghiệp của bạn để thích ứng với Covid-19 và cách thức triển khai các giải pháp'}
          desc={thirdStepForms.solution}
          isDecoration
        />
      </div>
      <div className="mb-4">
        <CustomLabel
          title={'Mô tả lợi ích đối với khách hàng và tác động tích cực đến môi trường xã hội của các giải pháp'}
          desc={thirdStepForms.benefit}
          isDecoration
        />
      </div>
    </>
  );
};

export default RegisterThirdStepResult;
