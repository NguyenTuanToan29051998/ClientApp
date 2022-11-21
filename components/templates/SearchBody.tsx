import { SearchType } from '@/models/search';
import type { NextPage } from 'next';
import Router from 'next/router';
import { Dispatch, SetStateAction } from 'react';
import useTrans from '../../hooks/useTrans';
import styles from '../../styles/components/templates/SearchBody.module.scss';
import PaginationSection from '../organisms/PaginationSection';

type PropType = {
  searchResults: SearchType[];
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  pageCount: number;
};

const SearchBody: NextPage<PropType> = (props) => {
  const { searchResults, currentPage, setCurrentPage, pageCount } = props;
  const trans = useTrans();

  return (
    <div className={styles.wrapper}>
      <div className={styles.searchResults}>{trans.searchResults}</div>
      {searchResults.length ? (
        <>
          {searchResults.map(item => {
            return (
              <div className={styles.postsWrap} key={item.id} onClick={() => Router.push(item.url)} role="presentation">
                <div className="row">
                  <div className="col-xl-9 col-12">
                    <div className={styles.posts}>
                      <div className={styles.title}>{item.title}</div>
                      <div className={styles.content}>{item.content}</div>
                      {/* <div className={styles.subDate}>{formatDate(item.createdAt)}</div> */}
                    </div>
                  </div>
                  <div className="col-xl-3 col-12">
                    <div className={styles.image} style={{ backgroundImage: `url(${item.image})` }}></div>
                  </div>
                </div>
              </div>
            );
          })}
          {pageCount && (
            <div className="d-flex justify-content-center mt-5 me-5">
              <PaginationSection pageCount={pageCount} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </div>
          )}
        </>
      ) : (
        <div>{trans.noSearchResults}</div>
      )}
    </div>
  );
};

export default SearchBody;
