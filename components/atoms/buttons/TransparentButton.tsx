import { FC } from 'react';
import styles from '../../../styles/components/atoms/buttons/TransparentButton.module.scss';

type PropsType = {
  name: string,
  ariaLabel?: string,
  onClick?: () => void,
  isRouter?: boolean,
};

const TransparentButton: FC<PropsType> = (props) => {
  const { name, ariaLabel, onClick, isRouter } = props;

  return (
    <button aria-label={ariaLabel} onClick={onClick} className={styles.button} role={isRouter ? "link" : ""}>{name}</button>
  );
};

export default TransparentButton;
