import { FC, useEffect, useState } from 'react';
import Card from '../molecules/Card';
import TransparentButton from '../atoms/buttons/TransparentButton';
import SectionContainer from '../molecules/SectionContainer';
import useTrans from '../../hooks/useTrans';
import { useRouter } from 'next/router';
import { StoryType } from '@/models/story';
import styles from '../../styles/components/organisms/StorySection.module.scss';
import useCustomQuill from '../../hooks/useCustomQuill';

type PropTypes = {
  stories: StoryType[],
}

const StorySection: FC<PropTypes> = (props) => {
  const { stories } = props;
  const trans = useTrans();
  const router = useRouter();
  const { previewContent } = useCustomQuill();
  const [storyValues, setStoryValues] = useState<StoryType[] | null>(null);

  useEffect(() => {
    const values = [...stories];
    values.length = 2;
    setStoryValues(values);
  }, [stories]);

  return (
    <SectionContainer label={trans.home.story}>
      <div className={styles.wrapper}>
        <div className={styles.cards}>
          {(storyValues || []).map((story, _, arrays) => (
            <div
              key={story.id}
              className={arrays?.length < 2 ? `${styles.card} w-100` : styles.card}
              onClick={() => router.push({ pathname: `/story/${story.id}`, query: { page: trans.homePage } })}
              role="presentation"
            >
              <Card
                titleSize="large"
                image={story.thumbnail}
                title={story.title}
                subTitle={previewContent(story.content)}
                isReadMoreButton
                path={'/home'}
                isTruncase
              />
            </div>
          ))}
        </div>
        <div className={styles.buttonArea}>
          <TransparentButton name={trans.seeMoreStories} onClick={() => router.push({ pathname: '/story', query: { page: 'home' } })} isRouter />
        </div>
      </div>
    </SectionContainer>
  );
};

export default StorySection;
