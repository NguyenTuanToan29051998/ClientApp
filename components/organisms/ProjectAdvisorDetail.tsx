import { AdvisorType } from "@/models/advisor";
import { FC } from "react";
import useTrans from "../../hooks/useTrans";
import ProjectAdvisorCard from "../molecules/ProjectAdvisorCard";
import styles from "../../styles/components/organisms/ProjectAdvisorDetail.module.scss";
import { useRouter } from "next/router";

type PropTypes = {
  advisors: AdvisorType[],
};

const ProjectAdvisorDetail: FC<PropTypes> = (props) => {
  const { advisors } = props;
  const router = useRouter();
  const trans = useTrans();

  return (
    <div className={styles.projectAdvisorDetail}>
      <h1 className={styles.projectAdvisorDetailTitle}>{trans.about[2].content}</h1>
      <div className="row">
        {(advisors || []).map((advisor: AdvisorType) => (
          <div
            key={advisor.id}
            className="gap-4 col-xl-4 col-md-6 mt-4 mb-4"
            onClick={() => router.push(`/home/advisors/${advisor.id}?isAbout=true`)}
            onKeyDown={() => router.push(`/home/advisors/${advisor.id}?isAbout=true`)}
            role="presentation"
          >
            <ProjectAdvisorCard
              image={advisor.avatar}
              title={advisor.name}
              subTitle={advisor.profession}
              textAlign={''}
              border
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectAdvisorDetail;
