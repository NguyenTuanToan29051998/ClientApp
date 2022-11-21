import { useRouter } from 'next/router';
import { FC } from 'react';
import useTrans from '../../hooks/useTrans';
import { arrowRightIcon, scheduleIcon } from '../../public/icons';
import styles from '../../styles/components/molecules/Card.module.scss';

type PropsType = {
  image?: string;
  title?: string;
  subTitle?: string;
  time?: string;
  titleSize?: 'large' | 'medium' | 'small';
  isTruncase?: boolean;
  boxTime?: boolean;
  isReadMoreButton?: boolean;
  path?: string;
};

const Card: FC<PropsType> = (props) => {
  const { image, title, subTitle, time, titleSize, isTruncase, boxTime, isReadMoreButton, path } = props;
  const router = useRouter();
  const trans = useTrans();

  const classMap = {
    large: styles.large,
    medium: styles.medium,
    small: styles.small,
  };

  return (
    <div className={styles.wrapper}>
      {image && (
        <div className={styles.image} style={{ backgroundImage: `url(${image})` }} role="img" aria-label={title} />
      )}
      {title && (
        <h4 className={!isTruncase ? `${classMap[titleSize!]} ${styles.title}` : `${classMap[titleSize!]} ${styles.title} ${styles.truncate}`}>{title}</h4>
      )}
      {subTitle && (
        <p className={!isTruncase ? styles.subTitle : `${styles.subTitle} ${styles.truncate}`} dangerouslySetInnerHTML={{ __html: subTitle }} />
      )}
      {time && (
        <div className={styles.description}>
          <p className={styles.time}><span className={boxTime ? styles.boxTime : styles.displayNone}>{scheduleIcon}</span>{time}</p>
        </div>
      )}
      {isReadMoreButton && path && (
        <button
          className={styles.readMoreBtn}
          onClick={() => router.push(path)}
          role="link"
        >
          {trans.readMore}
          <span>{arrowRightIcon}</span>
        </button>
      )}
    </div>
  );
};

export default Card;
