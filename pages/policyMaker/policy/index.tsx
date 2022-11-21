import type { NextPageWithLayout } from '../../_app';
import { ReactElement, useEffect, useState } from 'react';
import Layout from '../../../layouts';
import CustomContainer from '../../../components/molecules/CustomContainer';
import { useRouter } from 'next/router';
import { PolicyType } from '@/models/policy';
import { policyApiManagement } from '../../../api-clients/policy';
import MediaEventBody from '../../../components/templates/MediaEventBody';
import BreadCrumb from '../../../components/molecules/BreadCrumb';
import useTrans from '../../../hooks/useTrans';
import CustomLoading from '../../../components/molecules/CustomLoading';

const PolicyList: NextPageWithLayout = () => {
  const router = useRouter();
  const { hashtag, isPolicy, page } = router.query;
  const trans = useTrans();

  const [newsList, setNewsList] = useState<PolicyType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const pageNumber = 1;
    const pageSize = 99;
    if (!hashtag) {
      policyApiManagement.getAllPolicy( pageNumber, pageSize).then((res) => {
        setNewsList(res.data);
        setLoading(false);
      }).catch((_) => setLoading(false));
    } else {
      policyApiManagement.getPolicyByHashtag( hashtag.toString(), pageSize).then((res) => {
        setNewsList(res.data);
        setLoading(false);
      }).catch((_) => setLoading(false));
    }
  }, [hashtag]);

  return (
    <CustomContainer size="large">
      <BreadCrumb
        firstLayer={trans.homePage}
        lastLayer={trans.policy.title}
        firstPath={'/home'}
      />
      {loading && <CustomLoading />}
      {!loading && <MediaEventBody posts={newsList} page={trans.homePage} />}
    </CustomContainer>
  );
};

PolicyList.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default PolicyList;
