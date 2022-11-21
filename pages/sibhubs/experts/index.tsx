import { ReactElement, useEffect, useState } from 'react';
import { advisorApiManagement } from '../../../api-clients/advisor';
import BreadCrumb from '../../../components/molecules/BreadCrumb';
import CustomContainer from '../../../components/molecules/CustomContainer';
import CustomLoading from '../../../components/molecules/CustomLoading';
import CustomTabs from '../../../components/molecules/CustomTabs';
import AdvisorBody from '../../../components/templates/Advisors';
import useTrans from '../../../hooks/useTrans';
import Layout from '../../../layouts';
import { NextPageWithLayout } from '../../_app';

const Experts: NextPageWithLayout = () => {
  const trans = useTrans();
  const [experts, setExperts] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    advisorApiManagement.getAdvisors(true)
      .then((res) => {
        setExperts(res.data);
        setLoading(false);
      })
      .catch((_) => setLoading(false));
  }, []);

  return (
    <CustomContainer size="large">
      <BreadCrumb firstLayer={trans.homePage} firstPath={'/home'} lastLayer={trans.sibhubs.SIBsupportCenter} />
      <CustomTabs tabValues={trans.sibhubs.tabValues} selected={2} />
      {loading && <CustomLoading />}
      {!loading && experts && <AdvisorBody advisors={experts} />}
    </CustomContainer>
  );
};

Experts.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Experts;
