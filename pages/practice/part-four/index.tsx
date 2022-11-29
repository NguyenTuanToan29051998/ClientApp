import type { NextPageWithLayout } from '../../_app';
import { ReactElement, useEffect, useState } from 'react';
import Layout from '../../../layouts';
import CustomContainer from '../../../components/molecules/CustomContainer';
import CustomLoading from '../../../components/molecules/CustomLoading';
import PartFourBody from '../../../components/templates/PartFourBody';

const PartFour: NextPageWithLayout = () => {
//   const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const pageNumber = 1;
    const pageSize = 99;
  }, []);

  return (
    <CustomContainer size="large">
      {/* {loading && <CustomLoading />} */}
      {/* {!loading && <PracticeBody listNetworkOfSIB={networkOfSIBList} />} */}
      <PartFourBody />
    </CustomContainer>
  );
};
PartFour.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default PartFour;