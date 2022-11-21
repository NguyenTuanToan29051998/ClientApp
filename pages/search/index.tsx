
import { SearchType } from '@/models/search';
import { useRouter } from 'next/router';
import { ReactElement, useEffect, useState } from 'react';
import { searchManagementAPI } from '../../api-clients/search';
import CustomContainer from '../../components/molecules/CustomContainer';
import CustomLoading from '../../components/molecules/CustomLoading';
import SearchBody from '../../components/templates/SearchBody';
import Layout from '../../layouts';
import { NextPageWithLayout } from '../_app';

const DEFAULT_PAGE_SIZE = 10;

const Search: NextPageWithLayout = () => {
  const router = useRouter();
  const { searchInput } = router.query;

  const [searchResults, setSearchResults] = useState<SearchType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [pageCount, setPageCount] = useState<number>(0);

  useEffect(() => {
    if (!searchInput) return;
    if (typeof window === 'undefined') return;
    const typeUser = localStorage.getItem('type-user') || '';
    searchManagementAPI.getAll(searchInput as string, Number(typeUser), currentPage + 1, DEFAULT_PAGE_SIZE).then((res) => {
      setSearchResults(res.data.result);
      setPageCount(Math.ceil(res.data.totalCount / DEFAULT_PAGE_SIZE));
      setLoading(false);
    }).catch(() => setLoading(false));
  }, [currentPage, searchInput]);

  return (
    <CustomContainer size="large">
      {loading && <CustomLoading />}
      {!loading && searchResults && (
        <SearchBody
          searchResults={searchResults}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pageCount={pageCount}
        />
      )}
    </CustomContainer>
  );
};

Search.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default Search;
