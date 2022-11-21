import { FC } from 'react';
import { pushIcon } from '../../../public/icons';
import styles from '../../../styles/components/atoms/buttons/AddButton.module.scss';

type PropsType = {
  label: string;
  name: string;
  ariaLabel: string;
  isDisable?: boolean;
  onClick?: () => void;
};

const AddButton: FC<PropsType> = (props) => {
  const { label, name, ariaLabel, isDisable, onClick } = props;

  return (
    <div className={styles.wrapper}>
      <p>{label}</p>
      <button className={isDisable ? styles.disabled : ''} type="button" disabled={isDisable} aria-label={ariaLabel} onClick={onClick}>{pushIcon} {name}</button>
    </div>
  );
};

export default AddButton;
