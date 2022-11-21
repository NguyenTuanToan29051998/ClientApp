import type { NextPage } from 'next';
import CustomHead from '../components/atoms/headers/CustomHead';
import MasterPage from '../components/templates/MasterPage';

const Home: NextPage = () => {
  return (
    <>
      <CustomHead />
      <MasterPage />
    </>
  );
};

export default Home;
