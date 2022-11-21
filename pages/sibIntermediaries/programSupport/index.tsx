import { SupportPackageType } from '@/models/support-package';
import { useRouter } from 'next/router';
import { ReactElement, useEffect, useState } from 'react';
import { supportProgramManagementAPI } from '../../../api-clients/support-program';
import BreadCrumb from '../../../components/molecules/BreadCrumb';
import CustomContainer from '../../../components/molecules/CustomContainer';
import CustomLoading from '../../../components/molecules/CustomLoading';
import GetSupportSIB from '../../../components/templates/GetSupportSIB';
import useTrans from '../../../hooks/useTrans';
import Layout from '../../../layouts';
import { NextPageWithLayout } from '../../_app';

const Detail: NextPageWithLayout = () => {
  const router = useRouter();
  const { breadCrumb, typeAccess } = router.query;
  const trans = useTrans();
  const [supportPackages, setSupportPackages] = useState<SupportPackageType[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    supportProgramManagementAPI.getProgramList(Number(typeAccess))
      .then((res) => {
        setSupportPackages(res.data);
        setLoading(false);
      })
      .catch((_) => setLoading(false));
  }, [typeAccess]);

  return (
    <CustomContainer size="large">
      <BreadCrumb firstLayer={trans.homePage} firstPath={'/home'} lastLayer={`${breadCrumb}`} />
      {loading && <CustomLoading />}
      {!loading && supportPackages && <GetSupportSIB supportPackages={supportPackages} isFromSIBHubs />}
    </CustomContainer>
  );
};

Detail.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default Detail;
