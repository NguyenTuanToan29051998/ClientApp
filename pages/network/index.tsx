import type { NextPageWithLayout } from '../_app';
import { ReactElement, useEffect, useState } from 'react';
import Layout from '../../layouts';
import NetworkOfSIBBody from '../../components/templates/NetworkOfSIBBody';
import CustomContainer from '../../components/molecules/CustomContainer';
import { netWorkApiManagement } from '../../api-clients/network';
import { NetworkOfSIB } from '@/models/network';
import CustomLoading from '../../components/molecules/CustomLoading';

const NetworkOfSIB: NextPageWithLayout = () => {
  const [networkOfSIBList, setNetworkOfSIBList] = useState<NetworkOfSIB[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const pageNumber = 1;
    const pageSize = 99;
    netWorkApiManagement.getNetworkOfSIBList(pageNumber, pageSize).then((res) => {
      setNetworkOfSIBList(res.data);
      setLoading(false);
    }).catch((err) => console.log(err));
  }, []);

  return (
    <CustomContainer size="large">
      {loading && <CustomLoading />}
      {!loading && <NetworkOfSIBBody listNetworkOfSIB={networkOfSIBList} />}
    </CustomContainer>
  );
};

NetworkOfSIB.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default NetworkOfSIB;
