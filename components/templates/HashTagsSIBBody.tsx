import type { NextPage } from 'next';
import styles from '../../styles/components/templates/HashTagsSIBBody.module.scss';
import { useRouter } from 'next/router';
import { MediaType } from '@/models/media';
import useFormat from '../../hooks/useFormat';
import { MouseEvent } from 'react';

type PropType = {
  posts: MediaType[];
};

const HashTagsSIBBody: NextPage<PropType> = (props) => {
  const { posts } = props;
  const router = useRouter();
  const { tabId } = router.query;
  const { formatDate } = useFormat();
  const handleHashtag = (events: MouseEvent<HTMLDivElement>, hashtag: string) => {
    events.stopPropagation();
    router.push({ pathname: router.pathname, query: { hashtag: hashtag, tabId: tabId } });
  };

  const handlePostDetail = (idPost: number) => {
    switch (Number(tabId)) {
      case 0:
        router.push({ pathname: '/support/sibSupportPackage/', query: { id: idPost } });
        break;
      case 1:
        router.push({ pathname: '/support/generalTraining&Coaching/', query: { id: idPost } });
        break;
      case 2:
        router.push({ pathname: '/support/enterpriseConnection/', query: { id: idPost } });
        break;
      case 3:
        router.push({ pathname: '/support/marketExpansion/', query: { id: idPost } });
        break;
      default:
        router.push({ pathname: '/support/marketExpansion/', query: { id: idPost } });
        break;
    }
  };

  return (
    <div>
      <div className="row">
        {(posts || []).map((item) => {
          return (
            <div
              className={`col-xl-4 col-md-6 ${styles.hashtags}`}
              onClick={() => handlePostDetail(item.id)}
              role="presentation"
              key={Math.random()}
            >
              <div className={styles.wrapper}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.thumbnail} alt={item.altImage} className={styles.image} />
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

export default HashTagsSIBBody;
