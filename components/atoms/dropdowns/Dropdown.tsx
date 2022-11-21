import { FC, ReactNode } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from '../../../styles/components/atoms/dropdowns/Dropdown.module.scss';

type PropsType = {
  name: string,
  label?: string,
  required?: boolean,
  isError?: boolean,
  errorText?: string,
  isDissable?: boolean,
  value: string,
  placeholder?: string,
  children: ReactNode,
};

const CustomDropdown: FC<PropsType> = (props) => {
  const { label, required, value, isError, errorText, placeholder, isDissable, children } = props;

  return (
    <label className={styles.wrapper} style={{ opacity: isDissable ? .5 : 1 }}>
      {label}&nbsp;
      {required && (<span>*</span>)}
      <NavDropdown title={value || placeholder} className={styles.customDropdown}>
        {children}
      </NavDropdown>
      {isError && (<p className={styles.errorText}>{errorText}</p>)}
    </label>
  );
};

export default CustomDropdown;
