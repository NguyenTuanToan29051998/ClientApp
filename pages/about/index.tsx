import { AdvisorType } from "@/models/advisor";
import { ReactElement, useEffect, useState } from "react";
import { advisorApiManagement } from "../../api-clients/advisor";
import BreadCrumb from "../../components/molecules/BreadCrumb";
import CustomContainer from "../../components/molecules/CustomContainer";
import CustomLoading from "../../components/molecules/CustomLoading";
import About from "../../components/templates/About";
import useTrans from "../../hooks/useTrans";
import Layout from "../../layouts";
import type { NextPageWithLayout } from '../_app';

const Home: NextPageWithLayout = () => {
  const trans = useTrans();
  const [advisors, setAdvisors] = useState<AdvisorType[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const isProfessor = false;
    advisorApiManagement.getAdvisors(isProfessor).then((res) => {
      setAdvisors(res.data);
      setLoading(false);
    }).catch((error) => setLoading(false));
  }, []);

  return (
    <CustomContainer size={'large'}>
      <BreadCrumb firstLayer={trans.homePage} firstPath={"/home"} lastLayer={trans.projectISEECOVID} />
      {loading && <CustomLoading />}
      {!loading && advisors && <About advisors={advisors} />}
    </CustomContainer>
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
