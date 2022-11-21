import { PolicyType } from "@/models/policy";
import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";
import { policyApiManagement } from "../../../api-clients/policy";
import BreadCrumb from "../../../components/molecules/BreadCrumb";
import CustomContainer from "../../../components/molecules/CustomContainer";
import CustomLoading from "../../../components/molecules/CustomLoading";
import InformationTemplate from "../../../components/templates/InformationTemplate";
import useTrans from "../../../hooks/useTrans";
import Layout from "../../../layouts";
import { NextPageWithLayout } from "../../_app";

const PolicyDetail: NextPageWithLayout = () => {
  const router = useRouter();
  const { page, id } = router.query;
  const trans = useTrans();
  const [policy, setPolicyList] = useState<PolicyType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const pageNumber = 1;
    const pageSize = 6;
    policyApiManagement.getAllPolicy(pageNumber, pageSize).then((res) => {
      setPolicyList(res.data);
      setLoading(false);
    }).catch((_) => setLoading(false));
  }, []);

  return (
    <CustomContainer size="large">
      {page ? (
        <BreadCrumb
          firstLayer={trans.homePage}
          lastLayer={policy.find((event: PolicyType) => event.id === +(id as string))?.title || ''}
          firstPath={"/home?isScrollToPolicySection=true"}
        />
      ) : (
        <BreadCrumb
          firstLayer={trans.policy.title}
          lastLayer={policy.find((event: PolicyType) => event.id === +(id as string))?.title || ''}
          firstPath={"/policyMaker/policy?page=Trang+chủ&isPolicy=true"}
        />
      )}
      <div className="mt-3 pt-3" />
      {loading && <CustomLoading />}
      <InformationTemplate
        posts={policy}
        backPath={`${page === 'Trang chủ' ? '/home?isScrollToPolicySection=true' : '/policyMaker/policy?page=home&isPolicy=true'}`}
        btnName={trans.policy.feedback}
        btnPath={'/policyMaker/feedback'}
        hashtagPath={'/policyMaker/policy'}
        isPolicy={true}
        page={trans.homePage}
      />
    </CustomContainer>
  );
};

PolicyDetail.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default PolicyDetail;
