import type { NextPage } from 'next';
import styles from '../../styles/components/templates/HashTagsBody.module.scss';
import { useRouter } from 'next/router';
import Tabs from '../molecules/Tabs';
import { Dispatch, MouseEvent, SetStateAction, useEffect, useState } from 'react';
import useTrans from '../../hooks/useTrans';
import { SupportPost } from '@/models/support';
import useFormat from '../../hooks/useFormat';

type PropType = {
  posts: SupportPost[];
  numberSelected: number;
  setNumberSelected: Dispatch<SetStateAction<number>>;
};

const HashTagsBody: NextPage<PropType> = (props) => {
  const router = useRouter();
  const { posts, numberSelected, setNumberSelected } = props;
  const trans = useTrans();
  const { formatDate } = useFormat();

  useEffect(() => {
    window.onpopstate = () => {
      router.push({ pathname: '/support', query: { tabId: numberSelected } });
    };
  });

  const handleHashtag = (events: MouseEvent<HTMLDivElement>, hashtag: string) => {
    events.stopPropagation();
    router.push({ pathname: router.pathname, query: { hashtag: hashtag, tabId: numberSelected } });
  };

  return (
    <div>
      <div className={styles.tabs}>
        <Tabs
          tabNames={trans.sibIntermediariesList}
          numberSelected={numberSelected}
          setNumberSelected={setNumberSelected}
        />
      </div>
      <div className="row">
        {(posts || []).map((item) => {
          return (
            <div
              className={`col-xl-4 col-md-6 ${styles.hashtags}`}
              onClick={() => router.push({ pathname: '/support/', query: {tabId: numberSelected, id: item.id } })}
              role="presentation"
              key={Math.random()}
            >
              <div className={styles.wrapper}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.thumbnail} alt="img" className={styles.image} />
                <div className={styles.date}>{formatDate(item.createdAt)}</div>
                <div className={styles.title}>{item.title}</div>
                <div className="d-flex gap-3">
                  {JSON.parse(item.hashtag.replace(/'/g, '"')).map((hashtag: string) => {
                    return (
                      <div className={styles.hashtag} key={Math.random()} onClick={(events) => handleHashtag(events, hashtag)} role="presentation">
                        #{hashtag}
                      </div>
                    );
                  })}
                </div>
                <div className={styles.content}>{item.content}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.distanceFooter} />
    </div>
  );
};

export default HashTagsBody;
