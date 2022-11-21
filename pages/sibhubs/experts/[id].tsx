import { AdvisorType } from '@/models/advisor';
import { useRouter } from 'next/router';
import { ReactElement, useEffect, useState } from 'react';
import { advisorApiManagement } from '../../../api-clients/advisor';
import BreadCrumb from '../../../components/molecules/BreadCrumb';
import CustomContainer from '../../../components/molecules/CustomContainer';
import CustomLoading from '../../../components/molecules/CustomLoading';
import InformationAdvisorBody from '../../../components/templates/InformationAdvisorBody';
import useTrans from '../../../hooks/useTrans';
import Layout from '../../../layouts';
import { NextPageWithLayout } from '../../_app';

const ExpertsDetail: NextPageWithLayout = () => {
  const trans = useTrans();
  const { query } = useRouter();
  const { id } = query;
  const [advisor, setAdvisor] = useState<AdvisorType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!id) return;
    advisorApiManagement.getAdvisorDetail(id as string)
      .then((res) => {
        setAdvisor(res.data);
        setLoading(false);
      })
      .catch((_) => setLoading(false));
  }, [id]);

  return (
    <CustomContainer size="large">
      {loading && <CustomLoading />}
      {!loading && advisor && (
        <>
          <BreadCrumb
            firstLayer={trans.connectionService}
            firstPath={'/home?isScrollAdvisorSection=true'}
            secondLayer={trans.connectExperts}
            secondPath={'/sibhubs/experts'}
            lastLayer={advisor.name}
          />
          <InformationAdvisorBody advisor={advisor} />
        </>
      )}
    </CustomContainer>
  );
};

ExpertsDetail.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default ExpertsDetail;
