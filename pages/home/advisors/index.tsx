import { useRouter } from 'next/router';
import { ReactElement, useEffect, useState } from 'react';
import { advisorApiManagement } from '../../../api-clients/advisor';
import BreadCrumb from '../../../components/molecules/BreadCrumb';
import CustomContainer from '../../../components/molecules/CustomContainer';
import CustomLoading from '../../../components/molecules/CustomLoading';
import AdvisorBody from '../../../components/templates/Advisors';
import useTrans from '../../../hooks/useTrans';
import Layout from '../../../layouts';
import { NextPageWithLayout } from '../../_app';

const Advisor: NextPageWithLayout = () => {
  const trans = useTrans();
  const { query } = useRouter();
  const { isFromHomePage } = query;
  const [advisors, setAdvisors] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    advisorApiManagement.getAdvisors(false).then((res) => {
      setAdvisors(res.data);
      setLoading(false);
    }).catch((_) => setLoading(false));
  }, [isFromHomePage]);

  return (
    <CustomContainer size="large">
      <BreadCrumb firstLayer={trans.homePage} firstPath={'/home'} lastLayer={trans.sibhubs.advisor} />
      <div className="mt-4" />
      {loading && <CustomLoading />}
      {!loading && advisors && <AdvisorBody advisors={advisors} isAdvisor />}
    </CustomContainer>
  );
};

Advisor.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Advisor;
