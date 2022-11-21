import { FC } from 'react';
import { arrowLeftIcon } from '../../../public/icons';
import styles from '../../../styles/components/atoms/buttons/BackButton.module.scss';

type PropsType = {
  content: string;
  size?: 'large' | 'medium' | 'small';
  onClick?: () => void;
};

const BackButton: FC<PropsType> = (props) => {
  const { content, size, onClick } = props;

  const classMap = {
    large: styles.large,
    medium: styles.medium,
    small: styles.small,
  };

  return (
    <button aria-label="Quay lại" type="button" onClick={onClick} className={`${classMap[size!]} ${styles.backButton}`}>{arrowLeftIcon}{content}</button>
  );
};

export default BackButton;
