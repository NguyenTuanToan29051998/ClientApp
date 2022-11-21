import { StoryType } from '@/models/story';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import useCustomQuill from '../../hooks/useCustomQuill';
import useFormat from '../../hooks/useFormat';
import useTrans from '../../hooks/useTrans';
import styles from '../../styles/components/templates/StoryBody.module.scss';

type PropType = {
  posts: StoryType[];
};

const StoryBody: NextPage<PropType> = (props) => {
  const { posts } = props;
  const trans = useTrans();
  const router = useRouter();
  const { formatDate } = useFormat();
  const { previewContent } = useCustomQuill();
  const handleHashtag = (event: any, hashtag: string) => {
    if (event) event.stopPropagation();
    router.push({ pathname: '/story', query: { hashtag: hashtag } });
  };

  return (
    <>
      {!posts.length ? (
        <div className="mt-3">{trans.noPost}</div>
      ) : (
        <div>
          <div className={styles.title}>Câu chuyện thành công</div>
          <div className="row">
            {(posts || []).map((item) => {
              return (
                <div className={`mt-3 col-xl-4 col-md-6 ${styles.post}`} key={Math.random()}>
                  <div
                    className={styles.wrapper}
                    onClick={() => router.push(`/story/${item.id}`)}
                    onKeyDown={() => router.push(`/story/${item.id}`)}
                    role="presentation"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.thumbnail} alt={item.altImage} className={styles.image} />
                    <div className={styles.date}>{formatDate(item.createdAt)}</div>
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
        </div>
      )}
    </>
  );
};

export default StoryBody;
