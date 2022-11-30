import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useTrans from '../../hooks/useTrans';
import { angleRightIcon } from '../../public/icons';
import styles from '../../styles/components/templates/MiniTestBody.module.scss';

type PropType = {

};

const MiniTestBody: NextPage<PropType> = (props) => {
  const trans = useTrans();
  const router = useRouter();
  const [isReadLess, setIsReadLess] = useState<boolean>(false);
  const [idSeeMore, setIdSeeMore] = useState<number | null>(null);

  const handleSeeMore = (isSeeMore: boolean, idPost: number) => {
    setIsReadLess(isSeeMore);
    setIdSeeMore(idPost);
  };

  return (
    <>
      <h1 className={styles.titleH1}>Kiểm tra mini test TOEIC Online miễn phí</h1>
      <div className={styles.practiceListView}>
        <div className={styles.practiceName}>MINI TEST</div>
        <div className={styles.practiceList} onClick={() => router.push('/test/mini-test/1')} role="presentation">
          <div className={styles.practiceListItem}>
            <div className={styles.practiceListItemName}>Test 1</div>
            <div className={styles.practiceListItemProgress}>
              <div className={styles.progressBox}>17%</div>
            </div>
          </div>
          <div className={styles.practiceListItem}>
            <div className={styles.practiceListItemName}>Test 2</div>
            <div className={styles.practiceListItemProgress}>
              <div className={styles.progressBox}>0%</div>
            </div>
          </div>
          <div className={styles.practiceListItem}>
            <div className={styles.practiceListItemName}>Test 3</div>
            <div className={styles.practiceListItemProgress}>
              <div className={styles.progressBox}>0%</div>
            </div>
          </div>
          <div className={styles.practiceListItem}>
            <div className={styles.practiceListItemName}>Test 4</div>
            <div className={styles.practiceListItemProgress}>
              <div className={styles.progressBox}>5%</div>
            </div>
          </div>
          <div className={styles.practiceListItem}>
            <div className={styles.practiceListItemName}>Test 5</div>
            <div className={styles.practiceListItemProgress}>
              <div className={styles.progressBox}>0%</div>
            </div>
          </div>
          <div className={styles.practiceListItem}>
            <div className={styles.practiceListItemName}>Test 6</div>
            <div className={styles.practiceListItemProgress}>
              <div className={styles.progressBox}>0%</div>
            </div>
          </div>
          <div className={styles.practiceListItem}>
            <div className={styles.practiceListItemName}>Test 7</div>
            <div className={styles.practiceListItemProgress}>
              <div className={styles.progressBox}>0%</div>
            </div>
          </div>
          <div className={styles.practiceListItem}>
            <div className={styles.practiceListItemName}>Test 8</div>
            <div className={styles.practiceListItemProgress}>
              <div className={styles.progressBox}>20%</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiniTestBody;
