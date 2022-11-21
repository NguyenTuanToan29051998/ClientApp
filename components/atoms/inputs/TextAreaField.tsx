import { ChangeEvent, FC } from 'react';
import styles from '../../../styles/components/atoms/inputs/TextAreaField.module.scss';

type PropsType = {
  name: string;
  label?: string;
  required?: boolean;
  isError?: boolean;
  errorText?: string;
  isDissable?: boolean;
  value: string;
  ariaLabel?: string;
  placeholder?: string;
  type: 'text' | 'number';
  maxLenght?: number;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextAreaField: FC<PropsType> = (props) => {
  const { name, label, required, value, ariaLabel, isError, errorText, maxLenght, placeholder, isDissable, onChange } = props;

  return (
    <label className={styles.textareaField} style={{ opacity: isDissable ? .5 : 1 }}>
      {label}&nbsp;
      {required && (<span>*</span>)}
      <textarea
        name={name}
        rows={5}
        className={isError ? styles.error : ''}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        aria-label={ariaLabel}
      />
      <div className="d-flex justify-content-between align-items-center">
        <p className={styles.errorText}>{isError && errorText}</p>
        <p className={styles.lenght}>{value.length} / {maxLenght}</p>
      </div>
    </label>
  );
};

export default TextAreaField;
