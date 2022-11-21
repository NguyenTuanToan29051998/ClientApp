import { NetworkOfSIB } from '@/models/network';
import type { NextPage } from 'next';
import { useState } from 'react';
import useTrans from '../../hooks/useTrans';
import styles from '../../styles/components/templates/NetworkOfSIBBody.module.scss';

type PropType = {
  listNetworkOfSIB: NetworkOfSIB[];
};

const NetworkOfSIBBody: NextPage<PropType> = (props) => {
  const { listNetworkOfSIB } = props;
  const trans = useTrans();
  const [isReadLess, setIsReadLess] = useState<boolean>(false);
  const [idSeeMore, setIdSeeMore] = useState<number | null>(null);

  const handleSeeMore = (isSeeMore: boolean, idPost: number) => {
    setIsReadLess(isSeeMore);
    setIdSeeMore(idPost);
  };

  return (
    <>
      <div className="row">
        {(listNetworkOfSIB || []).map(item => (
          <div className={`col-xxl-3 col-lg-4 col-sm-6 col-12 ${styles.wrapper}`} key={Math.random()}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <div className={styles.image} style={{ backgroundImage: `url(${item.image})` }} role="img" aria-label={item.alt} />
              <p className={styles.title}>{item.name}</p>
            </a>
            <div className={`ql-editor ${styles.content} ${isReadLess && idSeeMore === item.id ? styles.seeMoreContent : styles.shortContent}`} dangerouslySetInnerHTML={{ __html: item.description }} />
            {(item.description.length > 96 && (idSeeMore !== item.id || !isReadLess)) && (
              <div className={styles.btnSeeMore} onClick={() => handleSeeMore(true, item.id)} onKeyDown={() => handleSeeMore(true, item.id)} role="button" tabIndex={0}>{trans.seeMore}</div>
            )}
            {item.description.length <= 96 || (isReadLess && idSeeMore === item.id) && (
              <div className={styles.btnSeeMore} onClick={() => handleSeeMore(false, item.id)} onKeyDown={() => handleSeeMore(false, item.id)} role="button" tabIndex={0}>{trans.showLess}</div>
            )}
          </div>
        ))}
        <div className={styles.distanceFooter} />
      </div>
    </>
  );
};

export default NetworkOfSIBBody;
