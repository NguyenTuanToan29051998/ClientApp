import { ReactElement } from 'react';
import BreadCrumb from '../../../components/molecules/BreadCrumb';
import CustomContainer from '../../../components/molecules/CustomContainer';
import CollectNeedsBody from '../../../components/templates/CollectNeedsBody';
import useTrans from '../../../hooks/useTrans';
import Layout from '../../../layouts';
import { NextPageWithLayout } from '../../_app';

const CollectNeeds: NextPageWithLayout = () => {
  const trans = useTrans();

  return (
    <CustomContainer size="large">
      <BreadCrumb firstLayer={trans.collectNeeds.currentPolicy} firstPath={'/home?isScrollToPolicySection=true'} lastLayer={trans.collectNeeds.titleCollectNeeds} />
      <CollectNeedsBody />
    </CustomContainer>
  );
};

CollectNeeds.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default CollectNeeds;
