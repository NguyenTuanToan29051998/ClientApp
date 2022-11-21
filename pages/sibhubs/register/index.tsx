import { ReactElement } from 'react';
import BreadCrumb from '../../../components/molecules/BreadCrumb';
import CustomContainer from '../../../components/molecules/CustomContainer';
import RegisterSIBHubBody from '../../../components/templates/RegisterSIBHubBody';
import Layout from '../../../layouts';
import { NextPageWithLayout } from '../../_app';
import useTrans from '../../../hooks/useTrans';
import { useRouter } from 'next/router';

const RegisterSIBHub: NextPageWithLayout = () => {
  const trans = useTrans();
  const router = useRouter();
  const { goFromSibHub } = router.query;

  return (
    <CustomContainer size="large">
      {goFromSibHub ? (
        <BreadCrumb
          firstLayer={trans.sibhubs.SIBsupportCenter}
          firstPath={'/home?isScrollToSupportCenterSection=true'}
          secondLayer={trans.sibhubs.title}
          secondPath={'/sibhubs'}
          lastLayer={trans.registerSIBHub.completeTitle}
        />
      ) : (
        <BreadCrumb
          firstLayer={trans.homePage}
          firstPath={'/home'}
          // secondLayer={trans.signupSupport}
          // secondPath={'/register'}
          lastLayer={trans.registerSIBHub.completeTitle}
        />
      )}
      <RegisterSIBHubBody />
    </CustomContainer>
  );
};

RegisterSIBHub.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default RegisterSIBHub;
