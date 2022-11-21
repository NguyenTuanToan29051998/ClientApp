/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import styles from '../../styles/components/molecules/ProjectObjectivesCard.module.scss';

type PropsType = {
  title: string;
  content: string;
};

const ProjectObjectivesCard: FC<PropsType> = (props) => {
  const { title, content } = props;

  return (
    <div className={styles.projectObjectivesCard}>
      <h3 className={styles.projectObjectivesCardTitle}>{title}</h3>
      <div className="ql-container">
        <div className="ql-editor">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </div>
  );
};

export default ProjectObjectivesCard;
