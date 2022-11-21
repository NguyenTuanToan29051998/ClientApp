import { NextPageWithLayout } from '../../_app';
import { ReactElement, useEffect, useState } from 'react';
import CustomContainer from '../../../components/molecules/CustomContainer';
import Layout from '../../../layouts';
import GetSupportSIB from '../../../components/templates/GetSupportSIB';
import BreadCrumb from '../../../components/molecules/BreadCrumb';
import useTrans from '../../../hooks/useTrans';
import { supportProgramManagementAPI } from '../../../api-clients/support-program';
import { SupportPackageType } from '@/models/support-package';
import { useRouter } from 'next/router';
import CustomLoading from '../../../components/molecules/CustomLoading';

const GetSupport: NextPageWithLayout = () => {
  const trans = useTrans();
  const router = useRouter();
  const { goFromSupportInfo, isSIB } = router.query;
  const [supportPackages, setSupportPackages] = useState<SupportPackageType[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    supportProgramManagementAPI.getAll().then((res) => {
      setSupportPackages(res.data);
      setLoading(false);
    }).catch((_) => setLoading(false));
  }, []);

  return (
    <CustomContainer size="large">
      {goFromSupportInfo ? (
        <BreadCrumb
          firstLayer={trans.homePage}
          firstPath={'/home'}
          secondLayer={trans.supportInformation}
          secondPath={isSIB ? '/support/sibSupportPackage' : '/policyMaker/support/capacityBuilding'}
          lastLayer={trans.signupSupportISEECOVID}
        />
      ) : (
        <BreadCrumb
          firstLayer={trans.homePage}
          firstPath={'/home'}
          secondLayer={trans.signupSupport}
          secondPath={'/register'}
          lastLayer={trans.signupSupportISEECOVID}
        />
      )}
      {loading && <CustomLoading />}
      {!loading && supportPackages && <GetSupportSIB supportPackages={supportPackages} />}
    </CustomContainer>
  );
};

GetSupport.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default GetSupport;
