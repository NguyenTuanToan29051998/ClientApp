import type { NextPageWithLayout } from '../_app';
import { ReactElement } from 'react';
import Layout from '../../layouts';
import MemberSIB from '../../components/templates/MemberSIB';
import CustomContainer from '../../components/molecules/CustomContainer';

const Member: NextPageWithLayout = () => {
  return (
    <CustomContainer>
      <MemberSIB />
    </CustomContainer>
  );
};

Member.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default Member;
