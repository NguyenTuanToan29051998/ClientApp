import { FC, useEffect, useState } from 'react';
import Card from '../molecules/Card';
import TransparentButton from '../atoms/buttons/TransparentButton';
import { useRouter } from 'next/router';
import styles from '../../styles/components/organisms/NewsSection.module.scss';
import useTrans from '../../hooks/useTrans';
import SectionContainer from '../molecules/SectionContainer';
import { MediaType } from '@/models/media';
import useFormat from '../../hooks/useFormat';

const COUNT_MINI_CARD = 4;

type PropTypes = {
  newsList: MediaType[],
}

const NewsSection: FC<PropTypes> = (props) => {
  const { newsList } = props;
  const router = useRouter();
  const trans = useTrans();
  const { formatDate } = useFormat();
  const [newsValues, setNewsValues] = useState<MediaType[] | null>(null);

  useEffect(() => {
    const values = [...newsList];
    values.length = newsList.length > COUNT_MINI_CARD ? COUNT_MINI_CARD : newsList.length;
    setNewsValues(values);
  }, [newsList]);

  return (
    <SectionContainer label={trans.home.news}>
      <div className={styles.wrapper}>
        <div className={styles.cards}>
          {(newsValues || []).map((val) => (
            <div key={val.id} className={styles.card} onClick={() => router.push({ pathname: `/media/news/${val.id}`, query: { page: trans.homePage } })} role="presentation">
              <Card
                titleSize="medium"
                image={val.thumbnail}
                title={val.title}
                subTitle={''}
                time={formatDate(val.createdAt)}
                isTruncase
                boxTime={false}
              />
            </div>
          ))}
        </div>
        <div className={styles.buttonArea}>
          <TransparentButton name={trans.home.seeMoreNews} onClick={() => router.push({ pathname: '/media/news', query: { page: 'home' } })} isRouter />
        </div>
      </div>
    </SectionContainer>
  );
};

export default NewsSection;
