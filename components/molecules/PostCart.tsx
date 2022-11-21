import { useRouter } from 'next/router';
import { FC } from 'react';
import styles from '../../styles/components/molecules/PostCart.module.scss';

type PropsType = {
  posts: { id: number, srcImg: string, title: string, content: string, date: string }[];
};

const PostCart: FC<PropsType> = (props) => {
  const { posts } = props;
  const router = useRouter();

  return (
    <>
      {(posts || []).map(item => {
        return (
          <div className={`d-flex flex-row mt-5 gap-4 ${styles.post}`} key={Math.random()} role="presentation" onClick={() => router.push('/events/1')}>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.srcImg} width={290} height={220} alt="main-logo" />
            </div>
            <div>
              <div className={styles.title}>{item.title}</div>
              <div>{item.content}</div>
              <div className={styles.date}>{item.date}</div>
            </div>
          </div >
        );
      })}
    </>
  );
};

export default PostCart;
