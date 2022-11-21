import { MediaType } from "@/models/media";
import { SupportPost } from "@/models/support";
import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";
import { mediaApiManagement } from "../../../api-clients/media";
import BreadCrumb from "../../../components/molecules/BreadCrumb";
import CustomContainer from "../../../components/molecules/CustomContainer";
import CustomLoading from "../../../components/molecules/CustomLoading";
import InformationTemplate from "../../../components/templates/InformationTemplate";
import useTrans from "../../../hooks/useTrans";
import Layout from "../../../layouts";
import { NextPageWithLayout } from "../../_app";

const News: NextPageWithLayout = () => {
  const router = useRouter();
  const { page, id } = router.query;
  const trans = useTrans();
  const [newsList, setNewsList] = useState<MediaType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const typeUser = localStorage.getItem('type-user') || '';
    const newsType = 0;
    const pageNumber = 1;
    const pageSize = 6;
    mediaApiManagement.getNewsList(Number(typeUser), newsType, pageNumber, pageSize).then((res) => {
      setNewsList(res.data);
      setLoading(false);
    }).catch((err) => console.log(err));;
  }, []);

  return (
    <CustomContainer size="large">
      {page ? (
        <BreadCrumb
          firstLayer={`${page}`}
          lastLayer={newsList.find((event: MediaType) => event.id === +(id as string))?.title || ''}
          firstPath={"/home"}
        />
      ) : (
        <BreadCrumb
          firstLayer={trans.media.news}
          lastLayer={newsList.find((event: MediaType) => event.id === +(id as string))?.title || ''}
          firstPath={"/media/news"}
        />
      )}
      <div className="mt-3 pt-3" />
      {loading && <CustomLoading />}
      {!loading && (
        <InformationTemplate
          posts={newsList}
          backPath={`${page === 'Trang chủ' ? '/home?isScrollToNews=true' : '/media/news'}`}
          btnName={trans.news.register}
          btnPath={'/register'}
          hashtagPath={'/media/news'}
        />
      )}
    </CustomContainer>
  );
};

News.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default News;
