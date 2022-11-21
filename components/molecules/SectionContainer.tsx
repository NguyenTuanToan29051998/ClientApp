import { FC, ReactNode } from 'react';
import Label from '../atoms/labels/Label';
import CustomContainer from './CustomContainer';

type PropsType = {
  label: string;
  children: ReactNode;
};

const SectionContainer: FC<PropsType> = (props) => {
  const { label, children } = props;

  return (
    <CustomContainer size="medium">
      <Label title={label} />
      {children}
    </CustomContainer>
  );
};

export default SectionContainer;
