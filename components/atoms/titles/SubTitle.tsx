import { FC } from 'react';
import styles from '../../../styles/components/atoms/titles/SubTitle.module.scss';

type PropsType = {
  name: string;
  size?: string;
};

const SubTitle: FC<PropsType> = (props) => {
  const { name, size } = props;

  return (
    <h5 className={styles.subTitle}>{name}</h5>
  );
};

export default SubTitle;
