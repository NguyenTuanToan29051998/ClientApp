import { SIBConnectType } from '@/models/SIB-connect';
import axios from 'axios';
import { ReactElement, useEffect, useState } from 'react';
import { SIBConnectManagementAPI } from '../../../api-clients/SIB-connect';
import BreadCrumb from '../../../components/molecules/BreadCrumb';
import CustomContainer from '../../../components/molecules/CustomContainer';
import CustomLoading from '../../../components/molecules/CustomLoading';
import CustomTabs from '../../../components/molecules/CustomTabs';
import SIBAndSIBConnectionBody from '../../../components/templates/SIBAndSIBConnectionBody';
import useTrans from '../../../hooks/useTrans';
import Layout from '../../../layouts';
import { NextPageWithLayout } from '../../_app';

const PAGE_NUMBER = 1;
const PAGE_SIZE = 99;

const Connect: NextPageWithLayout = () => {
  const trans = useTrans();
  const [SIBConnectSupports, setSIBConnectSupports] = useState<SIBConnectType[] | null>(null);
  const [SIBConnectNeedSupports, setSIBConnectNeedSupports] = useState<SIBConnectType[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.all([
      SIBConnectManagementAPI.getSIBNeedSupport(PAGE_NUMBER, PAGE_SIZE),
      SIBConnectManagementAPI.getSIBSupport(PAGE_NUMBER, PAGE_SIZE),
    ])
      .then(axios.spread((NeedSupportRes, SIBSupportRes) => {
        setSIBConnectNeedSupports(NeedSupportRes.data);
        setSIBConnectSupports(SIBSupportRes.data);
        setLoading(false);
      }))
      .catch((_) => setLoading(false));
  }, []);

  return (
    <CustomContainer size="large">
      <BreadCrumb firstLayer={trans.homePage} firstPath={'/home'} lastLayer={trans.sibhubs.SIBsupportCenter} />
      <CustomTabs tabValues={trans.sibhubs.tabValues} selected={0} />
      {loading && <CustomLoading />}
      {!loading && SIBConnectSupports && SIBConnectNeedSupports && (
        <SIBAndSIBConnectionBody
          SIBConnectSupports={SIBConnectSupports}
          SIBConnectNeedSupports={SIBConnectNeedSupports}
        />
      )}
    </CustomContainer>
  );
};

Connect.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default Connect;
