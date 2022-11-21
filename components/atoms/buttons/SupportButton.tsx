import { FC } from 'react';
import styles from '../../../styles/components/atoms/buttons/SupportButton.module.scss';

type PropsType = {
  content: string;
  onClick?: () => void;
  isDisabled: boolean;
  ariaLabel?: string;
  selected?: boolean;
};

const SupportButton: FC<PropsType> = (props) => {
  const { content, isDisabled, selected, onClick, ariaLabel } = props;

  return (
    <button
      onClick={onClick}
      className={selected ? `${styles.support} ${styles.selected}` : styles.support}
      disabled={isDisabled}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
};

export default SupportButton;
