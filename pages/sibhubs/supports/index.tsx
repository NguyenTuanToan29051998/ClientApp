import { SupportPackageType } from '@/models/support-package';
import { ReactElement, useEffect, useState } from 'react';
import { supportProgramManagementAPI } from '../../../api-clients/support-program';
import BreadCrumb from '../../../components/molecules/BreadCrumb';
import CustomContainer from '../../../components/molecules/CustomContainer';
import CustomLoading from '../../../components/molecules/CustomLoading';
import CustomTabs from '../../../components/molecules/CustomTabs';
import GetSupportSIB from '../../../components/templates/GetSupportSIB';
import useTrans from '../../../hooks/useTrans';
import Layout from '../../../layouts';
import { NextPageWithLayout } from '../../_app';

const Support: NextPageWithLayout = () => {
  const trans = useTrans();
  const [supportPackages, setSupportPackages] = useState<SupportPackageType[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    supportProgramManagementAPI.getAll()
      .then((res) => {
        setSupportPackages(res.data);
        setLoading(false);
      })
      .catch((_) => setLoading(false));
  }, []);

  return (
    <CustomContainer size="large">
      <BreadCrumb firstLayer={trans.homePage} firstPath={'/home'} lastLayer={trans.sibhubs.SIBsupportCenter} />
      <CustomTabs tabValues={trans.sibhubs.tabValues} selected={1} />
      {loading && <CustomLoading />}
      {!loading && supportPackages && <GetSupportSIB supportPackages={supportPackages} isFromSIBHubs />}
    </CustomContainer>
  );
};

Support.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Support;
