import type { NextPage } from 'next';
import PostCart from '../molecules/PostCart';
import styles from '../../styles/components/templates/EventBody.module.scss';

const EventBody: NextPage = () => {

  const posts = [
    {
      id: 1,
      srcImg: '/assets/review.svg',
      title: 'Creating quality urban lifestyles, building stronger communities and creating a safe haven for the',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar convallis in odio augue ornare faucibus in. Morbi scelerisque et fermentum diam blandit vulputate pretium in. Volutpat, sit odio vel sit enim facilisis ut. Erat in lectus est et faucibus aliquet. Nulla viverra auctor sit condimentum. Nunc, aliquam potenti elit cum',
      date: '20 Tháng 4, 2022',
    }
    , {
      id: 2,
      srcImg: '/assets/review.svg',
      title: 'Creating quality urban lifestyles, building stronger communities and creating a safe haven for the',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar convallis in odio augue ornare faucibus in. Morbi scelerisque et fermentum diam blandit vulputate pretium in. Volutpat, sit odio vel sit enim facilisis ut. Erat in lectus est et faucibus aliquet. Nulla viverra auctor sit condimentum. Nunc, aliquam potenti elit cum',
      date: '20 Tháng 4, 2022',
    },
    {
      id: 3,
      srcImg: '/assets/review.svg',
      title: 'Creating quality urban lifestyles, building stronger communities and creating a safe haven for the',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar convallis in odio augue ornare faucibus in. Morbi scelerisque et fermentum diam blandit vulputate pretium in. Volutpat, sit odio vel sit enim facilisis ut. Erat in lectus est et faucibus aliquet. Nulla viverra auctor sit condimentum. Nunc, aliquam potenti elit cum',
      date: '20 Tháng 4, 2022',
    },
  ];

  return (
    <div className="container">
      <div className={styles.title}>Sự kiện</div>
      <PostCart posts={posts} />
      <div className={styles.distanceFooter} />
    </div>
  );
};

export default EventBody;
