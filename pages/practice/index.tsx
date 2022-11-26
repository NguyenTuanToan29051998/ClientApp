import type { NextPageWithLayout } from '../_app';
import { ReactElement, useEffect, useState } from 'react';
import Layout from '../../layouts';
import CustomContainer from '../../components/molecules/CustomContainer';
import CustomLoading from '../../components/molecules/CustomLoading';
import PracticeBody from '../../components/templates/PracticeBody';

const Practice: NextPageWithLayout = () => {
//   const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const pageNumber = 1;
    const pageSize = 99;
  }, []);

  return (
    <CustomContainer size="large">
      {/* {loading && <CustomLoading />} */}
      {/* {!loading && <PracticeBody listNetworkOfSIB={networkOfSIBList} />} */}
      <PracticeBody />
    </CustomContainer>
  );
};

Practice.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default Practice;