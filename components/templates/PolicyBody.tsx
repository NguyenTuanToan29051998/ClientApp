import type { NextPage } from 'next';
import router, { useRouter } from 'next/router';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import useTrans from '../../hooks/useTrans';
import styles from '../../styles/components/templates/SupportSIBBody.module.scss';
import BackPreviousPage from '../atoms/BackPreviousPage';
import SecondaryButton from '../atoms/buttons/SecondaryButton';
import Tabs from '../molecules/Tabs';

type PropType = {
  posts: {
    id: number;
    title: string;
    content: string;
    date: string;
    srcImg: string;
    hashtag: string[];
    alt: string;
  }[];
  // isPolicyMaker: string | string[] | undefined;
  // numberSelected: number;
  // setNumberSelected: Dispatch<SetStateAction<number>>
};

const PolicyBody: NextPage<PropType> = (props) => {
  const { posts} = props;
  const trans = useTrans();
  const [postIdShowDetail, setPostIdShowDetail] = useState<number>(0);

  const handleHashtag = (hashtag: string) => {
    router.push({ pathname: '/support/hashtag', query: { hashtag: hashtag} });
  };

  useEffect(() => {
    if(posts[0]) setPostIdShowDetail(posts[0].id);
  }, [posts]);

  return (
    <div className="">
      <div>
        <div className={styles.wrapper}>
          <div className="row">
            {(posts || []).map(item => (
              <>
              {item.id === postIdShowDetail && (
                <div className="col-xxl-7 col-12">
                  <div className={styles.date}>{item.date}</div>
                  <div className={styles.title}>{item.title}</div>
                  <div className={styles.hashtagList}>
                    {item.hashtag.map(hashtag => (
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
            {(posts || []).map(item => (
              <>
                {item.id === postIdShowDetail && (
                  <div className="col-xxl-7 col-12">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.srcImg}
                      alt={item.alt}
                      width="100%"
                    />
                    <div className={styles.content}>{item.content}</div>
                    <div className={styles.btnArea}>
                      <SecondaryButton name={trans.policy.feedback} onClick={() => router.push('/policyMaker/feedback')} />
                    </div>
                  </div>
                )}
              </>
            ))}
            <div className={`col-xxl-5 col-12 ${styles.relatedPosts}`}>
              <div className={styles.textRelatedPostsMobile}>
                {trans.news.relatedPosts}
              </div>
              {(posts.slice(0, 6) || []).map((item) => {
                return (
                  <>
                    {item.id !== postIdShowDetail && (
                      <div className={`${styles.postsWrapper}`} key={Math.random()} role="presentation" onClick={() => setPostIdShowDetail(item.id)}>
                        <div className={styles.image} style={{ backgroundImage: `url("${item.srcImg}")` }}></div>
                        <div className={styles.posts}>
                          <div className={styles.otherPostTitle}>{item.title}</div>
                          <div className={styles.subDate}>{item.date}</div>
                        </div>
                      </div>
                    )}
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

export default PolicyBody;
