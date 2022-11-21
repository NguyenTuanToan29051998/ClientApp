import { FC } from 'react';
import styles from '../../../styles/components/atoms/radiobuttons/RadioButton.module.scss';

type PropsType = {
  label: string;
  checked: boolean;
  onClick?: () => void;
  ariaLabel?: string;
};

const RadioButton: FC<PropsType> = (props) => {
  const { label, checked, onClick, ariaLabel } = props;

  return (
    <label className={styles.container} >
      <div className={styles.customRadioButton}>
        <input className={styles.RadioButton} type="checkbox" aria-label={ariaLabel} onClick={onClick} role="radio" aria-checked="true" />
        <span className={checked ? `${styles.checkmark} ${styles.checked}` : styles.checkmark}></span>
      </div>
      <span>{label}</span>
    </label>
  );
};

export default RadioButton;
