import { FC } from 'react';
import useTrans from '../../../hooks/useTrans';
import { arrowUpIcon } from '../../../public/icons';
import styles from '../../../styles/components/atoms/buttons/BackToTop.module.scss';

const BackToTop: FC = () => {
  const trans = useTrans();

  const handleBackToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <button onClick={handleBackToTop} className={styles.wrapper}>{trans.backToTop}{arrowUpIcon}</button>
  );
};

export default BackToTop;
