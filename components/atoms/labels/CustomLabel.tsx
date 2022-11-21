import { FC } from 'react';
import styles from '../../../styles/components/atoms/labels/Customlabel.module.scss';

type PropsType = {
  title: string;
  desc: string;
  isDecoration?: boolean;
};

const CustomLabel: FC<PropsType> = (props) => {
  const { title, desc, isDecoration } = props;

  return (
    <div className={styles.wrapper}>
      <label className={isDecoration ? `${styles.label} ${styles.decoration}` : styles.label}>{title}</label>
      <p className={styles.desc}>{desc}</p>
    </div>
  );
};

export default CustomLabel;
