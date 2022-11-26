import { FC, useEffect, useRef, useState } from 'react';
import Banner from '../organisms/Banner';
import QuoteBox from '../molecules/QuoteBox';
import useTrans from '../../hooks/useTrans';
import { useRouter } from 'next/router';
import BackToTop from '../atoms/buttons/BackToTop';
import styles from '../../styles/components/templates/HomePage.module.scss';


type PropTypes = {

};

const HomePage: FC<PropTypes> = () => {
  const [userType, setUserType] = useState('');
  const trans = useTrans();
  const supportCenterRef = useRef<HTMLDivElement>(null);
  const policyRef = useRef<HTMLDivElement>(null);
  const supportInforRef = useRef<HTMLDivElement>(null);
  const newsRef = useRef<HTMLDivElement>(null);
  const eventsRef = useRef<HTMLDivElement>(null);
  const advisorInforRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const { query } = useRouter();
  const {
    isScrollToSupportCenterSection,
    isScrollToPolicySection,
    isScrollToSupportInfor,
    isScrollToNews,
    isScrollToEvents,
    isScrollAdvisorSection,
    isScrollToStory
  } = query;

  const scrollTo = () => {
    if (isScrollToSupportCenterSection && supportCenterRef && supportCenterRef?.current) {
      (supportCenterRef?.current as any)?.scrollIntoView({ behavior: 'smooth' });
    }
    if (isScrollToPolicySection && policyRef && policyRef?.current) {
      setTimeout(() => (policyRef?.current as any)?.scrollIntoView({ behavior: 'smooth' }));
    }
    if (isScrollToSupportInfor && supportInforRef && supportInforRef?.current) {
      (supportInforRef?.current as any)?.scrollIntoView({ behavior: 'smooth' });
    }
    if (isScrollToNews && newsRef && newsRef?.current) {
      (newsRef?.current as any)?.scrollIntoView({ behavior: 'smooth' });
    }
    if (isScrollToEvents && eventsRef && eventsRef?.current) {
      (eventsRef?.current as any)?.scrollIntoView({ behavior: 'smooth' });
    }
    if (isScrollAdvisorSection && advisorInforRef && advisorInforRef?.current) {
      (advisorInforRef?.current as any)?.scrollIntoView({ behavior: 'smooth' });
    }
    if (isScrollToStory && storyRef && storyRef?.current) {
      (storyRef?.current as any)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollTo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [supportCenterRef?.current, policyRef?.current, supportInforRef?.current, newsRef?.current, eventsRef?.current, advisorInforRef?.current, storyRef?.current]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    setUserType(localStorage.getItem('type-user') || '');
  }, []);

  return (
    <>
      <Banner />
      <>
        <div ref={supportInforRef} />
      </>

      <div className={styles.textures}>
        <div ref={eventsRef} />
        <div className={styles.btnArea}>
          <BackToTop />
        </div>
      </div>
    </>
  );
};

export default HomePage;
