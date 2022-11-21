import { FC } from 'react';
import BackButton from '../atoms/buttons/BackButton';
import SecondaryButton from '../atoms/buttons/SecondaryButton';
import styles from '../../styles/components/molecules/BottomButtons.module.scss';
import useTrans from '../../hooks/useTrans';

type PropsType = {
  next: string;
  handleBack: () => void;
};

const BottomButtons: FC<PropsType> = (props) => {
  const { next, handleBack } = props;
  const trans = useTrans();

  return (
    <div className="d-flex justify-content-between">
      <div className={styles.btnBack} >
        <BackButton content={trans.back} onClick={handleBack} />
      </div>
      <div className={styles.btnNext}>
        <SecondaryButton type="submit" name={next} />
      </div>
    </div>
  );
};

export default BottomButtons;
