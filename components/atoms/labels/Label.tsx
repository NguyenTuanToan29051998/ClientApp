import { FC } from 'react';
import styles from '../../../styles/components/atoms/labels/Label.module.scss';
import TransparentButton from '../buttons/TransparentButton';

type PropsType = {
  title: string;
  btnName?: string;
};

const Label: FC<PropsType> = (props) => {
  const { title, btnName } = props;

  return (
    <div className={styles.label}>
      <h1>{title}</h1>
      {btnName && (
        <div className={styles.buttonArea}>
          <TransparentButton name={btnName} />
        </div>
      )}
    </div>
  );
};

export default Label;
