import type { NextPageWithLayout } from '../_app';
import { ReactElement, useEffect, useState } from 'react';
import HomePage from '../../components/templates/HomePage';
import Layout from '../../layouts';
import { eventApiManagement } from '../../api-clients/events';
import { EventTypes } from '@/models/event';
import { AdvisorType } from '@/models/advisor';
import axios from 'axios';
import { advisorApiManagement } from '../../api-clients/advisor';
import { StoryType } from '@/models/story';
import { storyApiManagement } from '../../api-clients/story';
import { MediaType } from '@/models/media';
import { mediaApiManagement } from '../../api-clients/media';
import { PolicyType } from '@/models/policy';
import { policyApiManagement } from '../../api-clients/policy';
import { slideApiManagement } from '../../api-clients/slide';
import { BannerType } from '@/models/banner';
import CustomLoading from '../../components/molecules/CustomLoading';

const Home: NextPageWithLayout = () => {
  const [events, setEvents] = useState<EventTypes[] | null>(null);
  const [advisors, setAdvisors] = useState<AdvisorType[] | null>(null);
  const [stories, setStories] = useState<StoryType[] | null>(null);
  const [newsList, setNewsList] = useState<MediaType[] | null>(null);
  const [policyList, setPolicyList] = useState<PolicyType[] | null>(null);
  const [bannerValues, setBannerValues] = useState<BannerType[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const typeUser = localStorage.getItem('type-user') || '';
    const pageNumber = 1;
    const pageSize = 99;
    axios.all([
      eventApiManagement.getEvents(pageNumber, pageSize),
      advisorApiManagement.getAdvisorsHomepage(),
      // newsType = [0,1] = news page, story page
      mediaApiManagement.getNewsList(Number(typeUser), 0, pageNumber, pageSize),
      storyApiManagement.getStoryList(Number(typeUser), 1, pageNumber, pageSize),
      policyApiManagement.getAllPolicy(pageNumber, pageSize),
      slideApiManagement.get(),
    ])
      .then(axios.spread((eventRes, advisorRes, newsRes, storyRes, policyRes, bannerImgs) => {
        setEvents(eventRes.data);
        setAdvisors(advisorRes.data);
        setNewsList(newsRes.data);
        setStories(storyRes.data);
        setPolicyList(policyRes.data);
        setBannerValues(bannerImgs.data);
        setLoading(false);
      }))
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <div className="psa-center">
          <CustomLoading />
        </div>
      ) : (
        <HomePage
          events={events}
          advisors={advisors}
          stories={stories}
          newsList={newsList}
          policyList={policyList}
          bannerValues={bannerValues}
        />
      )}
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default Home;
