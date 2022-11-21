import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import EventBodyDetail from '../../components/templates/EventBodyDetail';
import Layout from '../../layouts';
import { NextPageWithLayout } from '../_app';

const Detail: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query;

  const postData = {
    id: 1,
    srcImg: '/assets/review.svg',
    title: 'Creating quality urban lifestyles, building stronger communities and creating a safe haven for the',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar convallis in odio augue ornare faucibus in. Morbi scelerisque et fermentum diam blandit vulputate pretium in. Volutpat, sit odio vel sit enim facilisis ut. Erat in lectus est et faucibus aliquet. Nulla viverra auctor sit condimentum. Nunc, aliquam potenti elit cum',
    date: '20 Tháng 4, 2022',
  };

  return (
    <EventBodyDetail postData={postData} />
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
