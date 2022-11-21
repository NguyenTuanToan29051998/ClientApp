import { MediaType } from '@/models/media';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { CustomContext } from '../../AppContext';
import useCustomQuill from '../../hooks/useCustomQuill';
import useFormat from '../../hooks/useFormat';
import useTrans from '../../hooks/useTrans';
import styles from '../../styles/components/templates/MediaNewsBody.module.scss';

type PropType = {
  posts: MediaType[];
};

const MediaNewsBody: NextPage<PropType> = (props) => {
  const { posts } = props;
  const trans = useTrans();
  const router = useRouter();
  const { currentSite } = useContext(CustomContext);
  const { formatDate } = useFormat();
  const { previewContent } = useCustomQuill();

  const handleHashtag = (event: any, hashtag: string) => {
    if (event) event.stopPropagation();
    router.push({ pathname: '/media/news', query: { hashtag: hashtag } });
  };

  return (
    <div>
      <div className={styles.mediaCategory}>
        <div
          className={styles.news}
          role="button"
          onClick={() => router.push('/media/events')}
          onKeyDown={() => router.push('/media/events')}
          tabIndex={0}
        >
          {trans.media.event}
        </div>
        <div
          className={`${styles.news} ${styles.isSelected} `}
          role="button"
          onClick={() => router.push('/media/news')}
          onKeyDown={() => router.push('/media/news')}
          tabIndex={0}
        >
          {trans.media.news}
        </div>
      </div>
      <div className={styles.title}>{trans.media.news}</div>
      {!posts.length ? (
        <div>{trans.noPost}</div>
      ) : (
        <div className="row">
          {
            (posts || []).map((item) => {
              return (
                <div
                  className={`mt-3 col-xl-4 col-md-6 ${styles.post}`}
                  key={Math.random()}
                >
                  <div
                    className={item.isHotNews && currentSite && item[currentSite] ? styles.flag : styles.displayNone}
                  >
                    <p className={styles.textFlag}>{trans.media.outstanding}</p>{" "}
                    <span className={styles.addFlag}></span>
                  </div>
                  <div
                    className={styles.wrapper}
                    onClick={() => router.push(`/media/news/${item.id}`)}
                    onKeyDown={() => {}}
                    role="link"
                    tabIndex={0}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.thumbnail}
                      alt={item.altImage}
                      className={styles.image}
                      onClick={() => router.push(`/media/news/${item.id}`)}
                      onKeyDown={() => router.push(`/media/news/${item.id}`)}
                      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
                      role="link"
                      tabIndex={0}
                    />
                    <div className={styles.date}>
                      {formatDate(item.createdAt)}
                    </div>
                    <div
                      className={styles.title}
                      onClick={() => router.push(`/media/news/${item.id}`)}
                      role="presentation"
                    >
                      {item.title}
                    </div>
                    <div className="d-flex gap-3">
                      {JSON.parse(item.hashtag.replace(/'/g, '"')).map(
                        (hashtag: string) => {
                          return (
                            <div
                              className={styles.hashtag}
                              key={Math.random()}
                              onClick={(event) => handleHashtag(event, hashtag)}
                              role="presentation"
                            >
                              #{hashtag}
                            </div>
                          );
                        }
                      )}
                    </div>
                    <div className={styles.content} dangerouslySetInnerHTML={{ __html: previewContent(item.content) }} />
                  </div>
                </div>
              );
            })
          }
          {!posts.length && <h3>{trans.noPost}</h3>}
        </div>
      )}
    </div>
  );
};

export default MediaNewsBody;
