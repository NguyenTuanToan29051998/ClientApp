import { SupportPost } from '@/models/support';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import useFormat from '../../hooks/useFormat';
import useTrans from '../../hooks/useTrans';
import styles from '../../styles/components/templates/SupportSIBBody.module.scss';
import BackPreviousPage from '../atoms/BackPreviousPage';
import SecondaryButton from '../atoms/buttons/SecondaryButton';
import Tabs from '../molecules/Tabs';

type PropType = {
  posts: SupportPost[];
  numberSelected: number;
  setNumberSelected: Dispatch<SetStateAction<number>>;
};

const SupportSIBBody: NextPage<PropType> = (props) => {
  const { posts, numberSelected, setNumberSelected } = props;
  const trans = useTrans();
  const router = useRouter();
  const { id } = router.query;
  const { formatDate } = useFormat();
  const [postIdShowDetail, setPostIdShowDetail] = useState<number | null>(null);
  const handleHashtag = (hashtag: string) => {
    router.push({ pathname: '/support/hashtag', query: { tabId: numberSelected, hashtag: hashtag } });
  };

  const handleShowPostDetail = (idDetail: number) => {
    setPostIdShowDetail(idDetail);
    router.push(`support?tabId=${numberSelected}&id=${idDetail}`);
  };

  useEffect(() => {
    if (id) setPostIdShowDetail(Number(id));
  }, [id]);

  return (
    <div className="">
      <div className={styles.tabs}>
        <Tabs
          tabNames={trans.sibIntermediariesList}
          numberSelected={numberSelected}
          setNumberSelected={setNumberSelected}
        />
      </div>
      <div>
        <div className={styles.wrapper}>
          <div className="row">
            {(posts || []).map((item, index) => (
              <>
                {(postIdShowDetail ? item.id === postIdShowDetail : index === 0) && (
                  <div className="col-xxl-7 col-12">
                    <div className={styles.date}>{formatDate(item.createdAt)}</div>
                    <div className={styles.title}>{item.title}</div>
                    <div className={styles.hashtagList}>
                      {JSON.parse(item.hashtag.replace(/'/g, '"')).map((hashtag: string) => (
                        <div
                          key={Math.random()}
                          className={styles.hashtag}
                          onClick={() => handleHashtag(hashtag)}
                          role="presentation"
                        >
                          #{hashtag}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ))}
            <div className={`col-xxl-5 col-12 ${styles.textRelatedPosts}`}>
              {trans.news.relatedPosts}
            </div>
          </div>
          <div className="row">
            {(posts || []).map((item, index) => (
              <>
                {(postIdShowDetail ? item.id === postIdShowDetail : index === 0) && (
                  <div className="col-xxl-7 col-12">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.thumbnail}
                      alt={item.altImage}
                      width="100%"
                    />
                    <div className={styles.content}>{item.content}</div>
                    <div className={styles.btnArea}>
                      <SecondaryButton name={trans.news.register} onClick={() => router.push({ pathname: '/register/getSupports', query: { goFromSupportInfo: true, isSIB: true } })} />
                    </div>
                  </div>
                )}
              </>
            ))}
            <div className={`col-xxl-5 col-12 ${styles.relatedPosts}`}>
              <div className={styles.textRelatedPostsMobile}>
                {trans.news.relatedPosts}
              </div>
              {posts.length < 2 && (
                <div>{trans.noRelatedPost}</div>
              )}
              {((postIdShowDetail ? posts.filter(val => val.id !== postIdShowDetail).slice(0, 5) : posts.slice(1, 6)) || []).map((item, index) => {
                return (
                  <>
                    <div className={`${styles.postsWrapper}`} key={Math.random()} role="presentation" onClick={() => handleShowPostDetail(item.id)}>
                      <div className={styles.image} style={{ backgroundImage: `url("${item.thumbnail}")` }}></div>
                      <div className={styles.posts}>
                        <div className={styles.otherPostTitle}>{item.title}</div>
                        <div className={styles.subDate}>{formatDate(item.createdAt)}</div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-7 col-12 col-md-12">
            <BackPreviousPage
              title={trans.back}
              onClick={() => router.push('/home?isScrollToSupportInfor=true')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportSIBBody;
