import type { NextPageWithLayout } from '../_app';
import { ReactElement } from 'react';
import Layout from '../../layouts';
import RegisterProgramSection from '../../components/organisms/RegisterProgramSection';

const Signups: NextPageWithLayout = () => {
  return (
    <RegisterProgramSection />
  );
};

Signups.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default Signups;
