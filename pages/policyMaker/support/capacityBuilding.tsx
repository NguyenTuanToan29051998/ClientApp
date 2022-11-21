import { MediaType } from '@/models/media';
import { useRouter } from 'next/router';
import { ReactElement, useEffect, useState } from 'react';
import { mediaApiManagement } from '../../../api-clients/media';
import CustomContainer from '../../../components/molecules/CustomContainer';
import CustomLoading from '../../../components/molecules/CustomLoading';
import CustomTabs from '../../../components/molecules/CustomTabs';
import InformationTemplate from '../../../components/templates/InformationTemplate';
import useTrans from '../../../hooks/useTrans';
import Layout from '../../../layouts';
import { NextPageWithLayout } from '../../_app';

const CapacityBuilding: NextPageWithLayout = () => {
  const trans = useTrans();

  const [capacityBuildingList, setCapacityBuildingList] = useState<MediaType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const typeUser = localStorage.getItem('type-user') || '';
    const newsType = 6;
    const pageNumber = 1;
    const pageSize = 99;
    mediaApiManagement.getNewsList(Number(typeUser), newsType, pageNumber, pageSize).then((res) => {
      setCapacityBuildingList(res.data);
      setLoading(false);
    }).catch((err) => console.log(err));
  }, []);

  return (
    <CustomContainer size={'large'}>
      <CustomTabs tabValues={trans.policy.supportTabs} selected={0} />
      {loading && <CustomLoading />}
      {!loading && (
        <InformationTemplate
          posts={capacityBuildingList}
          backPath={"/home?isScrollToSupportInfor=true"}
          btnName={trans.news.register}
          btnPath={"/register/getSupports?goFromSupportInfo=true"}
          tabId={0}
          hashtagPath={'/policyMaker/support/hashtag'}
        />
      )}
    </CustomContainer>
  );
};

CapacityBuilding.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default CapacityBuilding;
