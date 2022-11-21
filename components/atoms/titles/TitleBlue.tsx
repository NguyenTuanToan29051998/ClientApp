import { FC } from 'react';
import styles from '../../../styles/components/atoms/titles/TitleBlue.module.scss';

type PropsType = {
  name: string,
  size?: 'small' | 'medium',
};

const TitleBlue: FC<PropsType> = (props) => {
  const { name, size } = props;
  const classMap = {
    large: styles.large,
    medium: styles.medium,
    small: styles.small,
  };

  return (
    <h5 className={`${styles.wrapper} ${classMap[size!]}`}>{name}</h5>
  );
};

export default TitleBlue;
