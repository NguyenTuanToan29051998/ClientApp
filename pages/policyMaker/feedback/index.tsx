import { ReactElement } from 'react';
import BreadCrumb from '../../../components/molecules/BreadCrumb';
import CustomContainer from '../../../components/molecules/CustomContainer';
import FeedbackBody from '../../../components/templates/FeedbackBody';
import useTrans from '../../../hooks/useTrans';
import Layout from '../../../layouts';
import { NextPageWithLayout } from '../../_app';

const Feedback: NextPageWithLayout = () => {
  const trans = useTrans();

  return (
    <CustomContainer size={'large'}>
      <BreadCrumb firstLayer={trans.homePage} secondLayer={trans.collectNeeds.currentPolicy} lastLayer={trans.feedback.feedback} firstPath={'/home'} secondPath={'/policyMaker/policy?page=Trang+chủ&isPolicy=true'} />
      <FeedbackBody />
    </CustomContainer>
  );
};

Feedback.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default Feedback;
