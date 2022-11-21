import { NextPageWithLayout } from '../../_app';
import { ReactElement, useEffect, useState } from 'react';
import Layout from '../../../layouts';
import GetSupportSIBDetail from '../../../components/templates/GetSupportSIBDetail';
import { SupportPackageType } from '@/models/support-package';
import { supportProgramManagementAPI } from '../../../api-clients/support-program';
import { useRouter } from 'next/router';
import CustomLoading from '../../../components/molecules/CustomLoading';

const GetSupportDetail: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query;
  const [supportPackage, setSupportPackage] = useState<SupportPackageType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!id) return;
    supportProgramManagementAPI.getDetail(+id).then((res) => {
      setSupportPackage(res.data);
      setLoading(false);
    }).catch((_) => setLoading(false));
  }, [id]);

  return (
    <>
      {loading && <CustomLoading />}
      {!loading && supportPackage && <GetSupportSIBDetail supportPackage={supportPackage} />}
    </>
  );
};

GetSupportDetail.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default GetSupportDetail;
