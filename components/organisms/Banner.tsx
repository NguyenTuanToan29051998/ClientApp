import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import SecondaryButton from '../atoms/buttons/SecondaryButton';
import useTrans from '../../hooks/useTrans';
import styles from '../../styles/components/organisms/Banner.module.scss';
import { useRouter } from 'next/router';
import { backIcon, nextIcon } from '../../public/icons';

const MOCK_DATAS = [
  {
    id: 1,
    img: '/assets/banner-1.png',
  },
  {
    id: 2,
    img: '/assets/banner-2.png',
  },
  {
    id: 3,
    img: '/assets/banner-3.jpg',
  },
];

const DELAY = 5000;

const Banner: FC = () => {
  const trans = useTrans();
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, DELAY);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setIndex(index === MOCK_DATAS.length - 1 ? 0 : index + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <div className={styles.wrapper}>
      {MOCK_DATAS.length > 1 && (
        <button
          className={`${styles.iconLeft} ${styles.icon}`}
          onClick={() => setIndex(!index ? MOCK_DATAS.length - 1 : index - 1)}
          aria-label="Quay lại"
        >
          {backIcon}
        </button>
      )}

      <div className={styles.slideShow}>
        {MOCK_DATAS.map((data, idx) => (
          <div key={data.id} className={`${styles.banner} ${idx === index ? styles.show : styles.hide}`} style={{ backgroundImage: `url(${data.img})` }}>
            <div className={styles.bannerMark}>
              <h2 className={styles.bannerTitle}>{trans.home.banner.title}</h2>
              <p>{trans.home.banner.desc}&nbsp;
                <Link href="/about" passHref>
                  <a href="replace">{trans.home.banner.moreInformation}</a>
                </Link>
              </p>
              <div className={styles.bntArea}>
                <SecondaryButton name={trans.home.banner.register} onClick={() => router.push('/register')} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {MOCK_DATAS.length > 1 && (
        <button
          className={`${styles.iconRight} ${styles.icon}`}
          onClick={() => setIndex(index === MOCK_DATAS.length - 1 ? 0 : index + 1)}
          aria-label="Tiếp theo"
        >
          {nextIcon}
        </button>
      )}

      <ul className={styles.dotArea}>
        {[...Array(MOCK_DATAS.length)].map((_, idx) => (
          <li
            key={Math.random()}
            className={`${styles.dot} ${index === idx && styles.selected}`}
            onClick={() => setIndex(idx)}
            onKeyDown={() => setIndex(idx)}
            role="presentation"
          />
        ))}
      </ul>
    </div>
  );
};

export default Banner;
