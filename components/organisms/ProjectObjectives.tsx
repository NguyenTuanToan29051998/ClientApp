import { FC, useEffect, useState } from "react";
import { introduceApi } from "../../api-clients/introduce";
import useTrans from "../../hooks/useTrans";
import styles from "../../styles/components/organisms/ProjectObjectives.module.scss";
import ProjectObjectivesCard from "../molecules/ProjectObjectivesCard";

const ProjectObjectives: FC = () => {
  const [post, setPost] = useState({
    content: '',
    altImage: '',
    thumbnail: '',
  });
  useEffect(() => {
    introduceApi.getIntroduce(0).then((res) => {
      setPost(res.data);
    }).catch((err) => console.log(err));
  }, []);

  const trans = useTrans();
  return (
    <div className={styles.project}>
      <ProjectObjectivesCard
        title={trans.about[0].content}
        content={post.content}
      />
    </div>
  );
};

export default ProjectObjectives;
