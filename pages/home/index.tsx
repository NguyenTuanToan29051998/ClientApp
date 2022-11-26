import type { NextPageWithLayout } from '../_app';
import { ReactElement, useEffect, useState } from 'react';
import HomePage from '../../components/templates/HomePage';
import Layout from '../../layouts';
import axios from 'axios';
import { slideApiManagement } from '../../api-clients/slide';
import { BannerType } from '@/models/banner';
import CustomLoading from '../../components/molecules/CustomLoading';

const Home: NextPageWithLayout = () => {
  const [bannerValues, setBannerValues] = useState<BannerType[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const typeUser = localStorage.getItem('type-user') || '';
    const pageNumber = 1;
    const pageSize = 99;
    axios.all([
      slideApiManagement.get(),
    ])
      .then(axios.spread((eventRes, advisorRes, newsRes, storyRes, policyRes, bannerImgs) => {
        setBannerValues(bannerImgs.data);
        setLoading(false);
      }))
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <div className="psa-center">
          <CustomLoading />
        </div>
      ) : (
        <HomePage />
      )}
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default Home;
