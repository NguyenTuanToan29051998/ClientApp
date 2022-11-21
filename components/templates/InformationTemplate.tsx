import { MediaType } from '@/models/media';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import useFormat from '../../hooks/useFormat';
import useTrans from '../../hooks/useTrans';
import styles from '../../styles/components/templates/SupportSIBBody.module.scss';
import BackPreviousPage from '../atoms/BackPreviousPage';
import SecondaryButton from '../atoms/buttons/SecondaryButton';

type PropType = {
  posts: MediaType[];
  backPath: string;
  btnName: string;
  btnPath: string;
  hashtagPath: string;
  tabId?: number;
  isPolicy?: boolean;
  page?: string;
};

const InformationTemplate: NextPage<PropType> = (props) => {
  const { posts, backPath, btnName, btnPath, hashtagPath, tabId, isPolicy, page } = props;
  const trans = useTrans();
  const router = useRouter();
  const { id } = router.query;
  const { formatDate } = useFormat();

  const handleHashtag = (hashtag: string) => {
    router.push({ pathname: hashtagPath, query: { hashtag: hashtag, tabId: tabId, isPolicy: isPolicy, page: page } });
  };

  const handleShowPostDetail = (idDetail: number) => {
    if (router.pathname.includes('id')) {
      router.push(`${hashtagPath}/${idDetail}`);
    } else {
      router.push({ pathname: router.pathname, query: { id: idDetail } });
    }
  };

  return (
    <>
      {!posts.length ? (
        <div className="mt-3">{trans.noPost}</div>
      ) : (
        <div>
          <div className={styles.wrapper}>
            <div className="row">
              {(posts || []).map((item, index) => (
                <>
                  {(id ? item.id === Number(id) : index === 0) && (
                    <div className="col-xxl-7 col-12">
                      <div className={styles.date}>{formatDate(item.createdAt)}</div>
                      <div className={styles.title}>{item.title}</div>
                      <div className={styles.hashtagList}>
                        {JSON.parse(item.hashtag.replace(/'/g, '"')).map((hashtag: string) => (
                          <div
                            key={Math.random()}
                            className={styles.hashtag}
                            onClick={() => handleHashtag(hashtag)}
                            onKeyDown={() =>{}}
                            tabIndex={0}
                            role="link"
                            aria-label={hashtag}
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
                  {(id ? item.id === Number(id) : index === 0) && (
                    <div className={`col-xxl-7 col-12 ${styles.boxContent}`}>
                      <div className={`ql-editor ${styles.content}`} dangerouslySetInnerHTML={{ __html: item.content }} />
                      {!router.pathname.includes('news') && (
                        <div className={styles.btnArea}>
                          <SecondaryButton name={btnName} onClick={() => router.push(btnPath)} />
                        </div>
                      )}
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
                {((id ? posts.filter(val => val.id !== Number(id)).slice(0, 5) : posts.slice(1, 6)) || []).map(item => {
                  return (
                    <>
                      <div className={`${styles.postsWrapper}`} key={Math.random()} role="link" onClick={() => handleShowPostDetail(item.id)} onKeyDown={() =>{}} tabIndex={0}>
                        <div className={styles.image} style={{ backgroundImage: `url("${item.thumbnail}")` }} role="img" aria-label={item.altImage}></div>
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
                onClick={() => router.push(backPath)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InformationTemplate;
