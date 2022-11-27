import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import type { NextPage } from 'next';
import styles from '../../styles/components/organisms/PaginationSection.module.scss';
import useTrans from '../../hooks/useTrans';

type PropType = {
  pageCount: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
};

const COUNT_ITEM = 9;

const PaginationSection: NextPage<PropType> = (props) => {
  const { pageCount, currentPage, setCurrentPage } = props;
  const trans = useTrans();

  const [pageItems, setPageitems] = useState<number[]>([0]);

  const handleNext = () => {
    if (pageItems[0] === currentPage) {
      changePage(currentPage + 1);
    }
    changePage(currentPage + 1);
    setPageitems(pageItems.map((page) => page + 1));
  };

  const handleBack = () => {
    if (pageItems[pageItems.length - 1] === currentPage) {
      changePage(currentPage - 1);
    }
    changePage(currentPage - 1);
    setPageitems(pageItems.map((page) => page - 1));
  };

  const changePage = (i: number) => {
    setCurrentPage(i);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    setPageitems(Array.from(Array(pageCount > COUNT_ITEM ? Math.floor(COUNT_ITEM / 2) + 1 : pageCount).keys()));
  }, [pageCount]);

  useEffect(() => {
    const pageStart = currentPage - Math.floor(COUNT_ITEM / 2);
    const pageEnd = currentPage + Math.floor(COUNT_ITEM / 2);
    const pages: Array<number> = [];
    for (let index = (pageStart > 0 ? pageStart : 0); index < (pageEnd + 1 < pageCount ? pageEnd + 1 : pageCount); index += 1) {
      pages.push(index);
    }
    setPageitems(pages);
  }, [currentPage, pageCount]);

  return (
    <>
      {pageCount > 0 && (
        <div className={styles.pagearea}>
          {pageItems[0] !== 0 && currentPage !== 0 && (
            <>
              <div className={styles.backToTop} onClick={() => changePage(0)} role="presentation">&laquo;</div>
              <div className={`mr-2 ${styles.paginationprevarrow}`} onClick={handleBack} role="presentation" />
            </>
          )}
          {currentPage - Math.floor(COUNT_ITEM / 2) > 0 && (
            <div className={styles.dotsWrap}>
              <div className={styles.dots} />
              <div className={styles.dots} />
              <div className={styles.dots} />
            </div>
          )}
          <div className={styles.pageitems}>
            {pageItems.map((value) => (
              <div
                className={currentPage === value ? styles.activepaginationitem : styles.paginationitem}
                key={Math.random()}
                onClick={() => changePage(value)}
                onKeyDown={() => changePage(value)}
                role="presentation"
              >
                {value + 1}
              </div>
            ))}
          </div>
          {currentPage + Math.floor(COUNT_ITEM / 2) + 1 < pageCount && (
            <div className={styles.dotsWrap}>
              <div className={styles.dots} />
              <div className={styles.dots} />
              <div className={styles.dots} />
            </div>
          )}
          {pageCount - 1 !== pageItems[pageItems.length - 1] && (
            <>
              <div className={`ms-2 ${styles.paginationnextarrow}`} onClick={handleNext} role="presentation" />
              <div className={styles.backToTop} onClick={() => changePage(pageCount - 1)} role="presentation">&raquo;</div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default PaginationSection;
