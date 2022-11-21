import { MediaType } from '@/models/media';
import { useRouter } from 'next/router';
import { ReactElement, useEffect, useState } from 'react';
import { mediaApiManagement } from '../../../api-clients/media';
import CustomContainer from '../../../components/molecules/CustomContainer';
import CustomLoading from '../../../components/molecules/CustomLoading';
import CustomTabs from '../../../components/molecules/CustomTabs';
import HashTagsPolicyMakerBody from '../../../components/templates/HashTagsPolicyMakerBody';
import useTrans from '../../../hooks/useTrans';
import Layout from '../../../layouts';
import { NextPageWithLayout } from '../../_app';

const HashTagPolicyMaker: NextPageWithLayout = () => {
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
    // 6 - Capacity building page
    // 7 - Policy development page
    // 8 - Policy pilots page
    let newsType: number;
    switch (Number(tabId)) {
      case 0:
        newsType = 6;
        break;
      case 1:
        newsType = 7;
        break;
      case 2:
        newsType = 8;
        break;
      default:
        newsType = 6;
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
      <CustomTabs tabValues={trans.policy.supportTabs} selected={Number(tabId)} />
      {loading && <CustomLoading />}
      {!loading && <HashTagsPolicyMakerBody posts={postsByHashtag} />}
    </CustomContainer>
  );
};

HashTagPolicyMaker.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default HashTagPolicyMaker;
