import { FC } from 'react';
import styles from '../../styles/components/molecules/FlexCard.module.scss';
import { scheduleIcon } from '../../public/icons';

type PropsType = {
  image: string;
  title: string;
  subTitle: string;
  time: string;
  titleSize: 'large' | 'medium' | 'small';
};

const FlexCard: FC<PropsType> = (props) => {
  const { image, title, subTitle, time, titleSize } = props;

  const classMap = {
    large: styles.large,
    medium: styles.medium,
    small: styles.small,
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.image} style={{ backgroundImage: `url(${image})` }} role="img" aria-label={title} />
      <div className={styles.contentArea}>
        <h4 className={`${classMap[titleSize]} ${styles.title}`}>{title}</h4>
        <div className={styles.description}>
          <p className={styles.subTitle}>{subTitle}</p>
          <p className={styles.boxTime}>{scheduleIcon}<span className={styles.time}>{time}</span></p>
        </div>
      </div>
    </div>
  );
};

export default FlexCard;
