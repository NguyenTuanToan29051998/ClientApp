import { FC } from 'react';
import styles from '../../../styles/components/atoms/buttons/SecondaryButton.module.scss';

type PropsType = {
  name: string;
  size?: 'large' | 'medium' | 'small';
  onClick?: () => void;
  isDisabled?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
  ariaLabel?: string;
};

const SecondaryButton: FC<PropsType> = (props) => {
  const { name, isDisabled, size, type, onClick, ariaLabel } = props;
  const classMap = {
    large: styles.large,
    medium: styles.medium,
    small: styles.small,
  };

  return (
    <button
      onClick={onClick}
      className={`${classMap[size!]} ${styles.secondary}`}
      type={type}
      disabled={isDisabled}
      aria-label={ariaLabel}
    >
      {name}
    </button>
  );
};

export default SecondaryButton;
