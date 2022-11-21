import { FC } from 'react';
import styles from '../../styles/components/molecules/CardSib.module.scss';

type PropsType = {
  image?: string;
  title?: string;
};

const CardSib: FC<PropsType> = (props) => {
  const { image, title } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.image} style={{ backgroundImage: `url(${image})` }} />
      <div className={styles.boxTitle}>
        <h4 className={styles.title}>{title}</h4>
      </div>
    </div>
  );
};

export default CardSib;
