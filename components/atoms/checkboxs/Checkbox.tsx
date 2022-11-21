import { FC } from 'react';
import styles from '../../../styles/components/atoms/checkboxs/Checkbox.module.scss';

type PropsType = {
  label?: string;
  checked: boolean;
  onClick?: () => void;
};

const Checkbox: FC<PropsType> = (props) => {
  const { label, checked, onClick } = props;

  return (
    <label className={styles.container} >
      <div className={styles.customCheckbox}>
        <input className={styles.checkbox} type="checkbox" onClick={onClick}/>
        <span className={checked ? `${styles.checkmark} ${styles.checked}` : styles.checkmark}></span>
      </div>
      {label && (<span className={styles.label}>{label}</span>)}
    </label>
  );
};

export default Checkbox;
