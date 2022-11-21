import { BookType, DocumentType, VideoType } from '@/models/library';
import axios from 'axios';
import { useRouter } from 'next/router';
import { ReactElement, useEffect, useState } from 'react';
import { libraryApiManagement } from '../../api-clients/library';
import CustomContainer from '../../components/molecules/CustomContainer';
import CustomLoading from '../../components/molecules/CustomLoading';
import LibraryBody from '../../components/templates/LibraryBody';
import Layout from '../../layouts';
import { NextPageWithLayout } from '../_app';

const Library: NextPageWithLayout = () => {
  const router = useRouter();
  const { tabId } = router.query;

  const [bookList, setBookList] = useState<BookType[]>([]);
  const [videoList, setVideoList] = useState<VideoType[]>([]);
  const [documentList, setDocumentList] = useState<DocumentType[]>([]);
  const [numberSelected, setNumberSelected] = useState<number>(Number(tabId) || 0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const pageNumber = 1;
    const pageSize = 99;
    axios.all([
      libraryApiManagement.getBookList(numberSelected, pageNumber, pageSize),
      libraryApiManagement.getVideoList(numberSelected, pageNumber, pageSize),
      libraryApiManagement.getDocumentList(numberSelected, pageNumber, pageSize),
    ])
      .then(axios.spread((booktRes, videoRes, docsRes) => {
        setBookList(booktRes.data);
        setVideoList(videoRes.data);
        setDocumentList(docsRes.data);
        setLoading(false);
      }))
      .catch(() => setLoading(false));
  }, [numberSelected]);

  useEffect(() => {
    if (tabId) setNumberSelected(Number(tabId));
  }, [tabId]);

  return (
    <CustomContainer size="large">
      {loading && <CustomLoading />}
      {!loading && (
        <LibraryBody
          bookList={bookList}
          videoList={videoList}
          documentList={documentList}
          numberSelected={numberSelected}
          setNumberSelected={setNumberSelected}
        />
      )}
    </CustomContainer>
  );
};

Library.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default Library;
