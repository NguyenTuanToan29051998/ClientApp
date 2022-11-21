/* eslint-disable @next/next/no-img-element */
import { FC, useEffect, useRef, useState } from "react";
import SupportButton from "../atoms/buttons/SupportButton";
import ProjectObjectives from "../organisms/ProjectObjectives";
import ProjectAdvisorDetail from "../organisms/ProjectAdvisorDetail";
import Approach from "../organisms/Approach";
import BackPreviousPage from "../atoms/BackPreviousPage";
import router from "next/router";
import useTrans from "../../hooks/useTrans";
import SecondaryButton from "../atoms/buttons/SecondaryButton";
import { AdvisorType } from "@/models/advisor";
import styles from "../../styles/components/templates/About.module.scss";

type PropTypes = {
  advisors: AdvisorType[],
};

const About: FC<PropTypes> = (props) => {
  const { advisors } = props;
  const trans = useTrans();
  const projectObjectives = useRef<HTMLDivElement>(null);
  const approach = useRef<HTMLDivElement>(null);
  const projectAdvisorDetail = useRef<HTMLDivElement>(null);
  const [stateCloseIcon, setStateCloseIcon] = useState<boolean>(false);
  const scrollToProjectObjectiveSection = () => projectObjectives.current?.scrollIntoView();
  const scrollToApproachSection = () => approach.current?.scrollIntoView();
  const scrollToProjectAdvisorSection = () => projectAdvisorDetail.current?.scrollIntoView();
  const [selected, setSelected] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<string | null>(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection, { passive: true });
  }, [scrollDirection]);

  const handleOnClick = () => {
    setStateCloseIcon(!stateCloseIcon);
    return;
  };

  const changeSectionView = (id: number) => {
    setSelected(id);
    switch (id) {
      case 0:
        scrollToProjectObjectiveSection();
        break;
      case 1:
        scrollToApproachSection();
        break;
      case 2:
        scrollToProjectAdvisorSection();
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.about}>
      <div className={styles.boxButtons} style={{ top: scrollDirection === 'up' ? '137px' : '54px' }}>
        <div className={styles.buttons}>
          {(trans.about || []).map((val) => (
            <div key={val.id} className={styles.bntArea} >
              <SupportButton
                content={val.content}
                isDisabled={false}
                onClick={() => changeSectionView(val.id)}
                ariaLabel={val.ariaLabel}
                selected={selected === val.id}
              />
            </div>
          ))}
        </div>
      </div>
      <div ref={projectObjectives}>
        <ProjectObjectives />
      </div>
      <div ref={approach}>
        <Approach />
      </div>
      <div ref={projectAdvisorDetail}>
        <ProjectAdvisorDetail advisors={advisors} />
      </div>
      <div className={styles.distanceFooter} />
      <div className={styles.labelFooter}>
        <BackPreviousPage title={trans.back} onClick={() => router.push('/home')} />
      </div>
      <div className={`${styles.boxButton} ${!stateCloseIcon ? styles.boxScrollDown : styles.boxScrollUp}`}>
        <div className={styles.Button}>
          <div className={styles.imageButton}>
            <img src="/assets/Group.svg" alt="img" width="80%" />
          </div>
          <img src="/assets/GroupAvt.svg" alt="img" width="100%" className="mt-3 mb-3" />
          <SecondaryButton
            size="small"
            name={trans.signupSupport}
            ariaLabel="Gửi"
            type={'submit'}
            onClick={() => router.push('/register')}
          />
        </div>
        <button className={styles.iconClose} onClick={handleOnClick}>{stateCloseIcon ? '+' : '-'}</button>
      </div>
    </div>
  );
};
export default About;
