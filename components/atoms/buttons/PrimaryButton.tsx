import { FC } from 'react';
import styles from '../../../styles/components/atoms/buttons/PrimaryButton.module.scss';

type PropsType = {
  content: string;
  size?: 'large' | 'medium' | 'small';
  onClick?: () => void;
};

const PrimaryButton: FC<PropsType> = (props) => {
  const { content, size, onClick } = props;

  const classMap = {
    large: styles.large,
    medium: styles.medium,
    small: styles.small,
  };

  return (
    <button onClick={onClick} className={`${classMap[size!]} ${styles.primarybutton}`}>{content}</button>
  );
};

export default PrimaryButton;
