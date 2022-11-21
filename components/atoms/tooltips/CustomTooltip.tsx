import { FC, ReactNode } from 'react';
import styles from '../../../styles/components/atoms/tooltips/CustomTooltip.module.scss';

type PropsType = {
  tooltipValue?: string;
  children: ReactNode,
};

const CustomTooltip: FC<PropsType> = (props) => {
  const { children, tooltipValue } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.tooltipArea}>{tooltipValue}</div>
      {children}
    </div>
  );
};

export default CustomTooltip;
