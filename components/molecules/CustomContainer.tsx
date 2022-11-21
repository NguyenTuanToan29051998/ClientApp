import { FC, ReactNode } from 'react';
import styles from '../../styles/components/molecules/CustomContainer.module.scss';

type PropsType = {
  size?: 'large' | 'medium' | 'small';
  children: ReactNode;
};

const CustomContainer: FC<PropsType> = (props) => {
  const { size, children } = props;

  const classMap = {
    large: styles.large,
    medium: styles.medium,
    small: styles.small,
  };

  return (
    <div className={`${styles.customContainer} ${classMap[size!]}`}>
      {children}
    </div>
  );
};

export default CustomContainer;
