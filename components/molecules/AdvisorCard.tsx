import { AdvisorType } from '@/models/advisor';
import { useRouter } from 'next/router';
import { FC } from 'react';
import useTrans from '../../hooks/useTrans';
import styles from '../../styles/components/molecules/AdvisorCard.module.scss';

type PropsType = {
  index: number;
  advisorValue: AdvisorType,
  onClick: () => void;
};

const BACKGROUND_COLORS = ['#036aaf', '#e88e48', '#a4c752'];

const AdvisorCard: FC<PropsType> = (props) => {
  const { advisorValue, index, onClick } = props;
  const { id, name, profession, description, avatar } = advisorValue;
  const trans = useTrans();
  const router = useRouter();

  const test = (event: any) => {
    if (event) event.stopPropagation();
    onClick();
  };

  return (
    <div
      className={index % 2 ? styles.wrapper : `${styles.wrapper} ${styles.swap}`}
      onClick={() => router.push({ pathname: `/home/advisors/${id}`, query: { page: trans.homePage } })}
      onKeyDown={() => router.push({ pathname: `/home/advisors/${id}`, query: { page: trans.homePage } })}
      role="link"
      tabIndex={0}
    >
      <div className={styles.imageArea} style={{ backgroundImage: `url(${avatar})` }} role="img" aria-label={name} />
      <div className={styles.contentArea} style={{ backgroundColor: BACKGROUND_COLORS[index] }}>
        <h5 className={styles.title}>{name}</h5>
        <p className={styles.subTitle}>{profession}</p>
        <p className={styles.description}>{description}</p>
        <div className={styles.buttonArea}>
          <button onClick={test}>{trans.home.scheduleAdvisor}</button>
        </div>
      </div>
    </div>
  );
};

export default AdvisorCard;
