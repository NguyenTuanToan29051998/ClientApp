import type { NextPageWithLayout } from '../../_app';
import { ReactElement, useEffect, useState } from 'react';
import Layout from '../../../layouts';
import MediaNewsBody from '../../../components/templates/MediaNewsBody';
import CustomContainer from '../../../components/molecules/CustomContainer';
import { MediaType } from '@/models/media';
import { mediaApiManagement } from '../../../api-clients/media';
import { useRouter } from 'next/router';
import CustomLoading from '../../../components/molecules/CustomLoading';

const MediaNews: NextPageWithLayout = () => {
  const router = useRouter();
  const { hashtag } = router.query;

  const [newsList, setNewsList] = useState<MediaType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const typeUser = localStorage.getItem('type-user') || '';
    const newsType = 0;
    const pageNumber = 1;
    const pageSize = 99;
    if (!hashtag) {
      mediaApiManagement.getNewsList(Number(typeUser), newsType, pageNumber, pageSize).then((res) => {
        setNewsList(res.data);
        setLoading(false);
      }).catch((err) => console.log(err));
    } else {
      mediaApiManagement.getNewsByHashtag(Number(typeUser), newsType, hashtag.toString(), pageNumber, pageSize).then((res) => {
        setNewsList(res.data);
        setLoading(false);
      }).catch((err) => console.log(err));
    }
  }, [hashtag]);

  return (
    <CustomContainer size="large">
      {loading && <CustomLoading />}
      {!loading && <MediaNewsBody posts={newsList} />}
    </CustomContainer>
  );
};

MediaNews.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default MediaNews;
