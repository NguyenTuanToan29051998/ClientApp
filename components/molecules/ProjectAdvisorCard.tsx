import { FC } from 'react';
import styles from '../../styles/components/molecules/ProjectAdvisorCard.module.scss';

type PropsType = {
  title: string;
  subTitle: string;
  image: string;
  border?: boolean;
  textAlign: string;
};

const ProjectAdvisorCard: FC<PropsType> = (props) => {
  const { title, subTitle, image, border, textAlign } = props;

  return (
    <div className={`${styles.projectAdvisorcard} ${styles.paddingCard ? styles.paddingCard : ''}`} >
      <div className={border ? `${styles.imageBorder} ${styles.imageArea}` : styles.imageArea} style={{ backgroundImage: `url(${image})` }} role="img" aria-label={title} />
      <h5 className={`${styles.projectAdvisorcardTitle} ${textAlign ? styles.textLeft : ''}`}>{title}</h5>
      <p className={`${styles.projectAdvisorcardSubtitle} ${textAlign ? styles.textLeft : ''}`}>{subTitle}</p>
    </div>
  );
};

export default ProjectAdvisorCard;
