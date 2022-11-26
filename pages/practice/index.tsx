import type { NextPageWithLayout } from '../_app';
import { ReactElement, useEffect, useState } from 'react';
import Layout from '../../layouts';
import CustomContainer from '../../components/molecules/CustomContainer';
import { netWorkApiManagement } from '../../api-clients/network';
import { NetworkOfSIB } from '@/models/network';
import CustomLoading from '../../components/molecules/CustomLoading';
import PracticeBody from '../../components/templates/PracticeBody';

const Practice: NextPageWithLayout = () => {
  const [networkOfSIBList, setNetworkOfSIBList] = useState<NetworkOfSIB[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const pageNumber = 1;
    const pageSize = 99;
    netWorkApiManagement.getNetworkOfSIBList(pageNumber, pageSize).then((res) => {
      setNetworkOfSIBList(res.data);
    //   setLoading(false);
    }).catch((err) => console.log(err));
  }, []);

  return (
    <CustomContainer size="large">
      {/* {loading && <CustomLoading />} */}
      {/* {!loading && <PracticeBody listNetworkOfSIB={networkOfSIBList} />} */}
      <PracticeBody listNetworkOfSIB={networkOfSIBList} />
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