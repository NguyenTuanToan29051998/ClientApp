import { FC } from 'react';
import { closeIcon } from '../../../public/icons';
import styles from '../../../styles/components/atoms/buttons/CancelButton.module.scss';

type PropsType = {
  name: string,
  ariaLabel: string,
  onClick?: () => void,
};

const CancelButton: FC<PropsType> = (props) => {
  const { name, ariaLabel, onClick } = props;

  return (
    <button className={styles.wrapper} aria-label={ariaLabel} onClick={onClick} type="button">
      {closeIcon}{name}
    </button>
  );
};

export default CancelButton;
