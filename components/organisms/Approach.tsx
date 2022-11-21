import { FC, useEffect, useState } from 'react';
import { introduceApi } from '../../api-clients/introduce';
import useTrans from '../../hooks/useTrans';
import styles from '../../styles/components/organisms/Approach.module.scss';
import ProjectObjectivesCard from '../molecules/ProjectObjectivesCard';

const Approach: FC = () => {
  const trans = useTrans();
  const [post, setPost] = useState({
    content: '',
    altImage: '',
    thumbnail: '',
  });

  useEffect(() => {
    introduceApi.getIntroduce(1).then((res) => {
      setPost(res.data);
    }).catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.approach}>
      <ProjectObjectivesCard
        title={trans.about[1].content}
        content={post.content}
      />
    </div>
  );
};

export default Approach;
