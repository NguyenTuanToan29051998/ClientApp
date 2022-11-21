import { FC } from 'react';
import styles from '../../styles/components/molecules/CustomWizard.module.scss';

type PropsType = {
  stepWizard: number;
  disableStep: boolean[];
  setStepWizard: (stepWizard: number) => void;
};

const CustomWizard: FC<PropsType> = (props) => {
  const { stepWizard, disableStep, setStepWizard } = props;

  const handleNextThirdStep = () => {
    if (stepWizard < 2) return;
    if (stepWizard < 3 && disableStep[1]) return;
    setStepWizard(3);
  };

  const handleNextSecondStep = () => {
    if (stepWizard < 2 && disableStep[0]) return;
    setStepWizard(2);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.head}>
        <div
          className={`${styles.point} ${styles.selected}`}
          onClick={() => setStepWizard(1)}
          onKeyDown={() => setStepWizard(1)}
          role="button"
          tabIndex={0}
        >
          1
        </div>
        <div className={stepWizard > 1 ? `${styles.line} ${styles.selected}` : styles.line} />

        <div
          className={stepWizard > 1 ? `${styles.point} ${styles.selected}` : styles.point}
          onClick={handleNextSecondStep}
          onKeyDown={handleNextSecondStep}
          role="button"
          tabIndex={0}
        >
          2
        </div>
        <div className={stepWizard > 2 ? `${styles.line} ${styles.selected}` : styles.line} />

        <div
          className={stepWizard > 2 ? `${styles.point} ${styles.selected}` : styles.point}
          onClick={handleNextThirdStep}
          onKeyDown={handleNextThirdStep}
          role="button"
          tabIndex={0}
        >
          3
        </div>
      </div>
    </div>
  );
};

export default  CustomWizard;
