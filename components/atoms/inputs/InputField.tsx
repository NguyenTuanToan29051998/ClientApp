import { ChangeEvent, FC } from 'react';
import styles from '../../../styles/components/atoms/inputs/InputField.module.scss';

type PropsType = {
  name: string;
  label?: string;
  required?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
  errorText?: string;
  errorSend?: string;
  successText?: string;
  isDissable?: boolean;
  value: string;
  placeholder?: string;
  type: 'text' | 'number';
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  ariaLabel?: string;
};

const InputField: FC<PropsType> = (props) => {
  const { name, label, required, value, isError, isSuccess, errorText, successText, type, placeholder, isDissable, onChange, ariaLabel, errorSend } = props;
  return (
    <>
      {label && <label htmlFor={name} className={styles.inputField} style={{ opacity: isDissable ? .5 : 1 }}>{label}&nbsp;{required && (<span>*</span>)}</label>}
      <input id={name} name={name} value={value} type={type} placeholder={placeholder} aria-label={ariaLabel} onChange={onChange} className={isError ? `${styles.input} ${styles.error}` : styles.input} />
      {isSuccess && (<h5 className={styles.successText}>{successText}</h5>)}
      {isError && (<p className={styles.errorText}>{errorText}</p>)}
      {errorSend && (<p className={styles.errorText}>{errorSend}</p>)}
    </>
  );
};

export default InputField;
