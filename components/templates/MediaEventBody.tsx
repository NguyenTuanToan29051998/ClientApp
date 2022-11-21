import { MediaType } from '@/models/media';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useCustomQuill from '../../hooks/useCustomQuill';
import useFormat from '../../hooks/useFormat';
import useTrans from '../../hooks/useTrans';
import styles from '../../styles/components/templates/MediaEventBody.module.scss';

type PropType = {
  posts: MediaType[];
  page?: string;
};

const MediaEventBody: NextPage<PropType> = (props) => {
  const { posts, page } = props;
  const trans = useTrans();
  const router = useRouter();
  const { formatDate } = useFormat();
  const { previewContent } = useCustomQuill();
  const { isPolicy } = router.query;
  const handleHashtag = (event: any, hashtag: string) => {
    if (event) event.stopPropagation();
    if (!isPolicy) {
      router.push({ pathname: '/media/events', query: {hashtag: hashtag} });
    }
    else {
      router.push({ pathname: "/policyMaker/policy", query: { hashtag: hashtag, isPolicy: isPolicy, page: page } });
    }
  };

  return (
    <div>
      {!isPolicy ? (
        <>
          <div className={styles.mediaCategory}>
            <div
              className={`${styles.news} ${styles.isSelected} `}
              role="button"
              onClick={() => router.push('/media/events')}
              onKeyDown={() => router.push('/media/events')}
              tabIndex={0}
            >
              {trans.media.event}
            </div>
            <div
              className={styles.news}
              role="button"
              onClick={() => router.push('/media/news')}
              onKeyDown={() => router.push('/media/news')}
              tabIndex={0}
            >
              {trans.media.news}
            </div>
          </div>
          <div className={styles.title}>{trans.media.event}</div>
        </>
      ) : (
        <h1 className={styles.title}>{trans.policy.title}</h1>
      )}
      {!posts.length ? (
        <div>{trans.noPost}</div>
      ) : (
        <div className="row">
          {(posts || []).map((item) => {
            return (
              <div
                className={`mt-3 col-xl-4 col-md-6 ${styles.post}`}
                key={Math.random()}
              >
                <div
                  className={item.isHotEvent ? styles.flag : styles.displayNone}
                >
                  <p className={styles.textFlag}>{trans.media.outstanding}</p>
                  <span className={styles.addFlag}></span>
                </div>
                <div
                  className={styles.wrapper}
                  onClick={() =>
                    router.push(
                      !isPolicy
                        ? `/media/events/${item.id}`
                        : `/policyMaker/policy/${item.id}`
                    )
                  }
                  onKeyDown={() =>
                    router.push(
                      !isPolicy
                        ? `/media/events/${item.id}`
                        : `/policyMaker/policy/${item.id}`
                    )
                  }
                  role="presentation"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.thumbnail} alt={item.altImage} className={styles.image} />
                  <div className={styles.date}>{formatDate(item.startDate ? item.startDate : item.createdAt)}</div>
                  <div className={styles.title}>{item.title}</div>
                  <div className="d-flex gap-3">
                    {JSON.parse(item.hashtag.replace(/'/g, '"')).map((hashtag: string) => {
                      return (
                        <div className={styles.hashtag} key={Math.random()} onClick={(event) => handleHashtag(event, hashtag)} role="presentation">
                          #{hashtag}
                        </div>
                      );
                    })}
                  </div>
                  <div className={styles.content} dangerouslySetInnerHTML={{ __html: previewContent(item.content) }} />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MediaEventBody;
