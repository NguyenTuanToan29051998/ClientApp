import { FC } from 'react';
import styles from '../../../styles/components/atoms/titles/Title.module.scss';

type PropsType = {
  name: string;
  isUpperCase?: boolean;
  size?: 'small' | 'medium' | 'large';
};

const Title: FC<PropsType> = (props) => {
  const { name, size, isUpperCase } = props;

  const classMap = {
    large: styles.large,
    medium: styles.medium,
    small: styles.small,
  };

  let className = `${classMap[size!]} ${styles.title} `;
  className += isUpperCase && styles.upperCase;

  return (
    <h3 className={className}>{name}</h3>
  );
};

export default Title;
