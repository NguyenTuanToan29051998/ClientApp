import { FC } from 'react';
import styles from '../../../styles/components/atoms/buttons/WhileButton.module.scss';

type PropsType = {
  name: string;
  onClick?: () => void;
};

const WhileButton: FC<PropsType> = (props) => {
  const { name, onClick } = props;

  return (
    <button onClick={onClick} className={styles.button}>{name}</button>
  );
};

export default WhileButton;
