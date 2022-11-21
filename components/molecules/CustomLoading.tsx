import { FC } from 'react';
import styles from '../../styles/components/molecules/CustomLoading.module.scss';

const CustomContainer: FC = () => {
  return (
    <div className="my-5">
      <div className={styles.wrapper} />
    </div>
  );
};

export default CustomContainer;
