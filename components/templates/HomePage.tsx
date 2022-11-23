import { FC, useEffect, useRef, useState } from 'react';
import Banner from '../organisms/Banner';
import EventSection from '../organisms/EventSection';
import NewsSection from '../organisms/NewsSection';
import StorySection from '../organisms/StorySection';
import SupportCenterSection from '../organisms/SupportCenterSection';
import AdvisorSection from '../organisms/AdvisorSection';
import PolicySection from '../organisms/PolicySection';
import RegisterMemberSection from '../organisms/RegisterMemberSection';
import SupportCenterSIBIntermediaries from '../organisms/SupportCenter';
import QuoteBox from '../molecules/QuoteBox';
import useTrans from '../../hooks/useTrans';
import { useRouter } from 'next/router';
import BackToTop from '../atoms/buttons/BackToTop';
import styles from '../../styles/components/templates/HomePage.module.scss';
import { EventTypes } from '@/models/event';
import { AdvisorType } from '@/models/advisor';
import { StoryType } from '@/models/story';
import { MediaType } from '@/models/media';
import { PolicyType } from '@/models/policy';
import { BannerType } from '@/models/banner';
import SupportInformationSection from '../organisms/SupportInformationSection';

type PropTypes = {
  events: EventTypes[] | null,
  advisors: AdvisorType[] | null,
  stories: StoryType[] | null,
  newsList: MediaType[] | null,
  policyList: PolicyType[] | null,
  bannerValues: BannerType[] | null,
};

const HomePage: FC<PropTypes> = (props) => {
  const { events, advisors, stories, newsList, policyList, bannerValues } = props;
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
        <SupportInformationSection informations={trans.home.infomationSection.SIBValues} />
        <div ref={storyRef} />
        {stories && !!stories.length && <StorySection stories={stories} />}
        <div ref={advisorInforRef} />
        {advisors && !!advisors.length && <AdvisorSection advisors={advisors} />}
        <div className="mt-5" ref={supportCenterRef} />
        <SupportCenterSection datas={trans.home.SIB.SIBsupportCenterValues} title={trans.home.SIBsupportCenter} />
        <RegisterMemberSection />
      </>
      {userType.includes('1') && (
        <>
          <SupportCenterSection datas={trans.home.SIBIntermediaries.supportPrograms} title={trans.home.supportProgram} />
          {advisors && !!advisors.length && <AdvisorSection advisors={advisors} />}
          <SupportCenterSIBIntermediaries />
          <QuoteBox />
          <RegisterMemberSection />
        </>
      )}
      {userType.includes('2') && (
        <>
          <div className="mt-5" ref={supportInforRef} />
          <div ref={policyRef} />
          {policyList && !!policyList.length && <PolicySection policyList={policyList} />}
        </>
      )}
      <div className={styles.textures}>
        <div ref={eventsRef} />
        {events && !!events.length && <EventSection events={events} />}
        <div ref={newsRef} />
        {newsList && !!newsList.length && <NewsSection newsList={newsList} />}
        <div className={styles.btnArea}>
          <BackToTop />
        </div>
      </div>
    </>
  );
};

export default HomePage;
