import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useTrans from '../../hooks/useTrans';
import styles from '../../styles/components/templates/MediaNewsBodyDetail.module.scss';
import BackPreviousPage from '../atoms/BackPreviousPage';
import SecondaryButton from '../atoms/buttons/SecondaryButton';

const MediaNewsBodyDetail: NextPage = () => {
  const router = useRouter();
  const trans = useTrans();
  const [clickedHashtag, setClickedHashtag] = useState<boolean>(false);
  const { page } = router.query;

  const posts = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit abcxyz',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar convallis in odio augue ornare faucibus in. Morbi scelerisque et fermentum diam blandit vulputate pretium in. Volutpat, sit odio vel sit enim facilisis ut. Erat in lectus est et faucibus aliquet. Nulla viverra auctor sit condimentum. Nunc, aliquam potenti elit cum',
      date: '20 Tháng 4, 2022',
      srcImg: '/assets/imgVideo1.png',
      hashtag: ['goihotro', 'doanhnghiepSIB', 'goivon'],
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit abcxyz',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar convallis in odio augue ornare faucibus in. Morbi scelerisque et fermentum diam blandit vulputate pretium in. Volutpat, sit odio vel sit enim facilisis ut. Erat in lectus est et faucibus aliquet. Nulla viverra auctor sit condimentum. Nunc, aliquam potenti elit cum',
      date: '20 Tháng 4, 2022',
      srcImg: '/assets/imgVideo1.png',
      hashtag: ['goihotro', 'doanhnghiepSIB', 'goivon'],
    },
    {
      id: 3,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit abcxyz',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar convallis in odio augue ornare faucibus in. Morbi scelerisque et fermentum diam blandit vulputate pretium in. Volutpat, sit odio vel sit enim facilisis ut. Erat in lectus est et faucibus aliquet. Nulla viverra auctor sit condimentum. Nunc, aliquam potenti elit cum',
      date: '20 Tháng 4, 2022',
      srcImg: '/assets/imgVideo1.png',
      hashtag: ['goihotro', 'doanhnghiepSIB', 'goivon'],
    },
    {
      id: 4,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit abcxyz',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar convallis in odio augue ornare faucibus in. Morbi scelerisque et fermentum diam blandit vulputate pretium in. Volutpat, sit odio vel sit enim facilisis ut. Erat in lectus est et faucibus aliquet. Nulla viverra auctor sit condimentum. Nunc, aliquam potenti elit cum',
      date: '20 Tháng 4, 2022',
      srcImg: '/assets/imgVideo1.png',
      hashtag: ['goihotro', 'doanhnghiepSIB', 'goivon'],
    },
    {
      id: 5,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit abcxyz',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar convallis in odio augue ornare faucibus in. Morbi scelerisque et fermentum diam blandit vulputate pretium in. Volutpat, sit odio vel sit enim facilisis ut. Erat in lectus est et faucibus aliquet. Nulla viverra auctor sit condimentum. Nunc, aliquam potenti elit cum',
      date: '20 Tháng 4, 2022',
      srcImg: '/assets/imgVideo1.png',
      hashtag: ['goihotro', 'doanhnghiepSIB', 'goivon'],
    },
  ];

  const handleHashtag = () => {
    setClickedHashtag(true);
    router.push({ pathname: '/media/news' });
  };

  return (
    <div className="container mt-4">
      {!clickedHashtag && (
        <div>
          <div className={styles.wrapper}>
            <div className="row ">
              <div className="col-xxl-7 col-12 mt-1 gap-5 p-0">
                <div className={styles.date}>20 Tháng 4, 2022</div>
                <div className={styles.title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan porttitor diam convallis semper penatibus faucibus.</div>
                <div className="d-flex gap-4 mt-3">
                  <div className={styles.hashtag} onClick={handleHashtag} role="presentation">#goihotro</div>
                  <div className={styles.hashtag} onClick={handleHashtag} role="presentation">#doanhnghiepSIB</div>
                  <div className={styles.hashtag} onClick={handleHashtag} role="presentation">#goivon</div>
                </div>
              </div>
            </div>
            <div className="row mt-2 ">
              <div className="col-xxl-7 col-12 mt-4 p-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/register-project-1.jpg" alt="img" width="100%" />
                <div className={styles.content}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar convallis in odio augue ornare faucibus in. Morbi scelerisque et fermentum diam blandit vulputate pretium in. Volutpat, sit odio vel sit enim facilisis ut. Erat in lectus est et faucibus aliquet. Nulla viverra auctor sit condimentum. Nunc, aliquam potenti elit cum. Vitae nunc euismod risus consectetur justo vitae tempus. Id at vel, sagittis donec condimentum. Laoreet tincidunt sapien consequat, sagittis tincidunt sapien bibendum. Morbi pellentesque pulvinar adipiscing vivamus risus id magna habitant. At vel mauris ipsum pretium fermentum gravida leo mattis. Ultrices aenean diam faucibus aliquam sit pellentesque. Porttitor in tincidunt risus, commodo dapibus urna. Ultricies vel morbi dictum turpis.
                  Magna ac sollicitudin porta a sed vulputate pharetra. Aenean nisl, porttitor nec urna magna sollicitudin vitae. Venenatis malesuada arcu sed convallis lacus. Ornare suspendisse pretium, consequat quam a. Non morbi pulvinar porttitor eget vel malesuada. Arcu tortor curabitur non aenean eget orci, semper. Sit consequat volutpat, rhoncus facilisis habitasse proin feugiat. Nunc, viverra arcu, quam auctor tincidunt nulla in sed. Turpis justo neque velit molestie maecenas elementum diam
                </div>
                <div className={styles.btnArea}>
                  <SecondaryButton name={trans.news.register} onClick={() => router.push({ pathname: '/register' })} ariaLabel={'Đăng ký'} />
                </div>
                <div className={styles.wrapper}>
                  <div className="row mt-2 px-2">
                    <div className=" mt-4 p-0">
                      <BackPreviousPage title={trans.back} onClick={() => router.push(`${page === 'Trang chủ' ? '/home' : '/media/news'}`)} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={`col-xxl-5 col-12 mt-4 ${styles.relatedPosts}`}>
                <div className={`mt-3 mb-4 ${styles.textRelatedPosts}`}>
                  {trans.news.relatedPosts}
                </div>
                {(posts || []).map(item => {
                  return (
                    <div className={`d-flex gap-3 mb-4 ${styles.relatedPost}`} key={Math.random()} role="presentation" onClick={() => router.push(`/media/news/${item.id}`)}>
                      <div className={styles.image} style={{ backgroundImage: `url(${item.srcImg})` }}></div>
                      <div className={styles.posts}>
                        <div className={styles.otherPostTitle}>{item.title}</div>
                        <div className={styles.date}>{item.date}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
      {clickedHashtag && (
        <div>
          {(posts || []).map(item => {
            return (
              <div className={styles.postsByHashtag} key={Math.random()} role="presentation" onClick={() => setClickedHashtag(false)}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.srcImg} className={styles.image} alt="main-logo" />
                <div>
                  <div className={styles.date}>{item.date}</div>
                  <div className={styles.title}>{item.title}</div>
                  <div>{item.content}</div>
                  <div className="d-flex gap-3">
                    {item.hashtag.map(hashtag => {
                      return (
                        <div className={styles.hashtag} key={Math.random()}>#{hashtag}</div>
                      );
                    })}
                  </div>
                </div>
              </div >
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MediaNewsBodyDetail;
