import type { NextPage } from "next";
import { useRouter } from "next/router";
import useTrans from "../../hooks/useTrans";
import BackButton from "../atoms/buttons/BackButton";
import SecondaryButton from "../atoms/buttons/SecondaryButton";
import styles from "../../styles/components/templates/SIBHubsBody.module.scss";
import { AboutType } from "@/models/about";

type PropsType = {
  aboutValues: AboutType,
};

const SIBHubsBody: NextPage<PropsType> = (props) => {
  const { aboutValues } = props;
  const trans = useTrans();
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{trans.sibhubs.introduce}</h2>
      <div className={styles.contentArea}>
        <div className="ql-editor" dangerouslySetInnerHTML={{ __html: aboutValues.content }} />
      </div>
      <div className={styles.btnArea}>
        <BackButton content={trans.back} onClick={() => router.push({ pathname: '/home', query: { isScrollToSupportCenterSection: 'true' } }, undefined, { scroll: false })} />
        <div className={styles.btnNext}>
          <SecondaryButton
            size="medium"
            type="submit"
            aria-label={trans.sibModal.register}
            name={trans.sibModal.register}
            onClick={() => router.push({ pathname: '/sibhubs/register', query: { goFromSibHub: true } })}
          />
        </div>
      </div>
    </div>
  );
};

export default SIBHubsBody;
