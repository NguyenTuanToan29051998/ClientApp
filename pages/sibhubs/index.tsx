import { AboutType } from '@/models/about';
import { ReactElement, useEffect, useState } from 'react';
import { introduceApi } from '../../api-clients/introduce';
import BreadCrumb from '../../components/molecules/BreadCrumb';
import CustomContainer from '../../components/molecules/CustomContainer';
import CustomLoading from '../../components/molecules/CustomLoading';
import SIBHubsBody from '../../components/templates/SIBHubBody';
import useTrans from '../../hooks/useTrans';
import Layout from '../../layouts';
import { NextPageWithLayout } from '../_app';

const SIBHubs: NextPageWithLayout = () => {
  const trans = useTrans();
  const [aboutValues, setAboutValues] = useState<AboutType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    introduceApi.getIntroduce(2)
      .then((res) => {
        setAboutValues(res.data);
        setLoading(false);
      })
      .catch((_) => setLoading(false));
  }, []);

  return (
    <CustomContainer size="large">
      <BreadCrumb firstLayer={trans.sibhubs.SIBsupportCenter} firstPath={'/home?isScrollToSupportCenterSection=true'} lastLayer={trans.sibhubs.title} />
      {loading && <CustomLoading />}
      {!loading && aboutValues && <SIBHubsBody aboutValues={aboutValues} />}
    </CustomContainer>
  );
};

SIBHubs.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default SIBHubs;
