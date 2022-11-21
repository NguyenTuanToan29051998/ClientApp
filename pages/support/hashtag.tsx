import { MediaType } from '@/models/media';
import { useRouter } from 'next/router';
import { ReactElement, useEffect, useState } from 'react';
import { mediaApiManagement } from '../../api-clients/media';
import CustomContainer from '../../components/molecules/CustomContainer';
import CustomLoading from '../../components/molecules/CustomLoading';
import CustomTabs from '../../components/molecules/CustomTabs';
import HashTagsSIBBody from '../../components/templates/HashTagsSIBBody';
import useTrans from '../../hooks/useTrans';
import Layout from '../../layouts';
import { NextPageWithLayout } from '../_app';

const HashTagSIB: NextPageWithLayout = () => {
  const trans = useTrans();
  const router = useRouter();
  const { tabId, hashtag } = router.query;

  const [postsByHashtag, setPostsByHashtag] = useState<MediaType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const typeUser = localStorage.getItem('type-user') || '';
    // newType:
    // 2 - SIB Support Package
    // 3 - General Training & Coaching
    // 4 - Enterprise connection
    // 5 - Market expansion
    let newsType: number;
    switch (Number(tabId)) {
      case 0:
        newsType = 2;
        break;
      case 1:
        newsType = 3;
        break;
      case 2:
        newsType = 4;
        break;
      case 3:
        newsType = 5;
        break;
      default:
        newsType = 2;
        break;
    }
    const pageNumber = 1;
    const pageSize = 99;
    if (!hashtag) {
      mediaApiManagement.getNewsList(Number(typeUser), newsType, pageNumber, pageSize).then((res) => {
        setPostsByHashtag(res.data);
        setLoading(false);
      }).catch((err) => console.log(err));
    } else {
      mediaApiManagement.getNewsByHashtag(Number(typeUser), newsType, hashtag.toString(), pageNumber, pageSize).then((res) => {
        setPostsByHashtag(res.data);
        setLoading(false);
      }).catch((err) => console.log(err));
    }
  }, [hashtag, tabId]);

  return (
    <CustomContainer size="large">
      <CustomTabs tabValues={trans.sib.supportTabs} selected={Number(tabId)} />
      {loading && <CustomLoading />}
      {!loading && <HashTagsSIBBody posts={postsByHashtag} />}
    </CustomContainer>
  );
};

HashTagSIB.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default HashTagSIB;
