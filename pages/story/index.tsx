import type { NextPageWithLayout } from '../_app';
import { ReactElement, useEffect, useState } from 'react';
import Layout from '../../layouts';
import StoryBody from '../../components/templates/StoryBody';
import CustomContainer from '../../components/molecules/CustomContainer';
import BreadCrumb from '../../components/molecules/BreadCrumb';
import useTrans from '../../hooks/useTrans';
import { storyApiManagement } from '../../api-clients/story';
import { StoryType } from '@/models/story';
import { useRouter } from 'next/router';
import CustomLoading from '../../components/molecules/CustomLoading';

const Story: NextPageWithLayout = () => {
  const trans = useTrans();
  const router = useRouter();
  const { hashtag } = router.query;
  const [stories, setStories] = useState<StoryType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const typeUser = localStorage.getItem('type-user') || '';
    const newsType = 1;
    const pageNumber = 1;
    const pageSize = 99;
    if (!hashtag) {
      storyApiManagement.getStoryList(Number(typeUser), newsType, pageNumber, pageSize).then((res) => {
        setStories(res.data);
        setLoading(false);
      }).catch(() => setLoading(false));
    } else {
      storyApiManagement.getStoryByHashtag(Number(typeUser), newsType, hashtag.toString(), pageNumber, pageSize).then((res) => {
        setStories(res.data);
        setLoading(false);
      }).catch(() => setLoading(false));
    }
  }, [hashtag]);

  return (
    <CustomContainer size="large">
      <BreadCrumb
        firstLayer={trans.homePage}
        lastLayer={"Câu chuyện thành công"}
        firstPath={'/home?isScrollToStory=true'}
      />
      {loading && <CustomLoading />}
      {!loading && <StoryBody posts={stories} />}
    </CustomContainer>
  );
};

Story.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default Story;
