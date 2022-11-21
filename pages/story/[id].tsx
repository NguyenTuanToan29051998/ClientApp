import { StoryType } from '@/models/story';
import { useRouter } from 'next/router';
import { ReactElement, useEffect, useState } from 'react';
import { storyApiManagement } from '../../api-clients/story';
import BreadCrumb from '../../components/molecules/BreadCrumb';
import CustomContainer from '../../components/molecules/CustomContainer';
import CustomLoading from '../../components/molecules/CustomLoading';
import InformationTemplate from '../../components/templates/InformationTemplate';
import useTrans from '../../hooks/useTrans';
import Layout from '../../layouts';
import { NextPageWithLayout } from '../_app';

const Detail: NextPageWithLayout = () => {
  const router = useRouter();
  const { page, id } = router.query;
  const trans = useTrans();

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
    storyApiManagement.getStoryList(Number(typeUser), newsType, pageNumber, pageSize).then((res) => {
      setStories(res.data);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);


  return (
    <CustomContainer size="large" >
      {page ? (
        <BreadCrumb
          firstLayer={`${page}`}
          lastLayer={stories.find((event: StoryType) => event.id === +(id as string))?.title || ''}
          firstPath={"/home?isScrollToStory=true"}
        />
      ) : (
        <BreadCrumb
          firstLayer={trans.homePage}
          firstPath={"/home?isScrollToStory=true"}
          secondLayer={"Câu chuyện thành công"}
          secondPath={"/story"}
          lastLayer={stories.find((event: StoryType) => event.id === +(id as string))?.title || ''}
        />
      )}
      <div className="mt-3 pt-3" />
      {loading && <CustomLoading />}
      {!loading && (
        <InformationTemplate
          posts={stories}
          backPath={`${page === 'Trang chủ' ? '/home?isScrollToStory=true' : '/story'}`}
          btnName={trans.news.register}
          btnPath={'/register'}
          hashtagPath={'/story'}
        />
      )}
    </CustomContainer>
  );
};

Detail.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default Detail;
