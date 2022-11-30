/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useTrans from '../../hooks/useTrans';
import styles from '../../styles/components/organisms/HomeBody.module.scss';

type PropType = {

};

const HomeBody: NextPage<PropType> = (props) => {
  const trans = useTrans();
  const router = useRouter();
  const [isReadLess, setIsReadLess] = useState<boolean>(false);
  const [idSeeMore, setIdSeeMore] = useState<number | null>(null);

  const handleSeeMore = (isSeeMore: boolean, idPost: number) => {
    setIsReadLess(isSeeMore);
    setIdSeeMore(idPost);
  };

  return (
    <>
      <div className={styles.textSeo}>
        <h2 className={styles.titleH2}>Luyện tập TOEIC miễn phí 2022</h2>
        <p className={styles.desc}>Bạn muốn đạt số điểm TOEIC mơ ước? Hãy làm các bài luyện tập trên website của chúng tôi để chuẩn bị 100% cho kỳ thi TOEIC sắp tới!</p>
      </div>
      <div className={styles.partItem}>
        <div className={styles.listen}>Nghe</div>
        <div className={`row mt-4 ${styles.row}`}>
          <div className="col-xxl-3 col-lg-4 col-sm-6 col-12">
            <div className={styles.data} onClick={() => router.push('/practice/part-one')} role="presentation">
              <div className={`${styles.avatar} ${styles.avatarPartOne}`} />
              <div className={styles.content}>
                <p className={styles.shortName}>Phần 1</p>
                <p className={styles.name}>Mô tả tranh</p>
                <p className={styles.desc}>Thí sinh sẽ nghe 1 lần duy nhất 4 câu mô tả về một bức tranh. Sau đó chọn 1 đáp án mô tả đúng nhất bức tranh đó.</p>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-lg-4 col-sm-6 col-12">
            <div className={styles.data} onClick={() => router.push('/practice/part-two')} role="presentation">
              <div className={`${styles.avatar} ${styles.avatarPartTwo}`} />
              <div className={styles.content}>
                <p className={styles.shortName}>Phần 2</p>
                <p className={styles.name}>Hỏi - Đáp</p>
                <p className={styles.desc}>Thí sinh sẽ nghe 1 lần duy nhất 3 câu hồi đáp cho 1 câu hỏi hoặc 1 câu nói. Sau đó chọn câu hồi đáp phù hợp nhất.</p>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-lg-4 col-sm-6 col-12">
            <div className={styles.data} onClick={() => router.push('/practice/part-three')} role="presentation">
              <div className={`${styles.avatar} ${styles.avatarPartThree}`} />
              <div className={styles.content}>
                <p className={styles.shortName}>Phần 3</p>
                <p className={styles.name}>Đoạn hội thoại</p>
                <p className={styles.desc}>Thí sinh sẽ nghe 1 lần duy nhất các đoạn hội thoại giữa 2 hoặc 3 người. Mỗi đoạn hội thoại sẽ có 3 câu hỏi, mỗi câu hỏi có 4 lựa chọn. Thí sinh đọc câu hỏi sau đó chọn câu trả lời phù hợp nhất.</p>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-lg-4 col-sm-6 col-12">
            <div className={styles.data} onClick={() => router.push('/practice/part-four')} role="presentation">
              <div className={`${styles.avatar} ${styles.avatarPartFour}`} />
              <div className={styles.content}>
                <p className={styles.shortName}>Phần 4</p>
                <p className={styles.name}>Bài nói ngắn</p>
                <p className={styles.desc}>Thí sinh sẽ nghe 1 lần duy nhất các bài nói ngắn. Mỗi bài sẽ có 3 câu hỏi, mỗi câu hỏi có 4 lựa chọn. Thí sinh đọc câu hỏi sau đó chọn câu trả lời phù hợp nhất.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.partItem}>
        <div className={styles.listen}>Đọc</div>
        <div className={`row mt-4 ${styles.row}`}>
          <div className="col-xxl-3 col-lg-4 col-sm-6 col-12">
            <div className={styles.data} onClick={() => router.push('/practice/part-five')} role="presentation">
              <div className={`${styles.avatar} ${styles.avatarPartFive}`} />
              <div className={styles.content}>
                <p className={styles.shortName}>Phần 5</p>
                <p className={styles.name}>Hoàn thành câu</p>
                <p className={styles.desc}>Chọn đáp án đúng nhất trong 4 đáp án để hoàn thành câu.</p>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-lg-4 col-sm-6 col-12">
            <div className={styles.data} onClick={() => router.push('/practice/part-six')} role="presentation">
              <div className={`${styles.avatar} ${styles.avatarPartSix}`} />
              <div className={styles.content}>
                <p className={styles.shortName}>Phần 6</p>
                <p className={styles.name}>Hoàn thành đoạn văn</p>
                <p className={styles.desc}>Chọn đáp án đúng nhất trong 4 đáp án (từ, cụm từ hoặc câu) để hoàn thành đoạn văn. Mỗi đoạn văn sẽ có 4 câu hỏi.</p>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-lg-4 col-sm-6 col-12">
            <div className={styles.data} onClick={() => router.push('/practice/part-seven-single')} role="presentation">
              <div className={`${styles.avatar} ${styles.avatarPartSeven}`} />
              <div className={styles.content}>
                <p className={styles.shortName}>Phần 7</p>
                <p className={styles.name}>Đọc hiểu</p>
                <p className={styles.desc}>Thí sinh sẽ đọc các bài đọc hiểu sau đó chọn đáp án đúng nhất cho các câu hỏi. Mỗi bài đọc sẽ bao gồm 2 - 5 câu hỏi.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`row mt-5 pt-3 ${styles.row}`}>
        <div className={`col-xxl-6 col-12 col-md-12 ${styles.testItemPanel}`}>
          <div className={`${styles.card} ${styles.vocabularyImg}`}>
            <div className={styles.cardTitle}>VOCABULARY</div>
            <div className={styles.cardDesc}>Our vocabulary practice divided into various topics and parts will assist you in boosting your vocabulary range</div>
            <div className={styles.testItemFunJoin}>
              <div className={styles.testItemFunJoinBtn}>Luyện tập</div>
            </div>
          </div>
        </div>
        <div className={`col-xxl-6 col-12 col-md-12 ${styles.testItemPanel}`}>
          <div className={`${styles.card} ${styles.grammarImg}`}>
            <div className={styles.cardTitle}>GRAMMAR</div>
            <div className={styles.cardDesc}>Our grammar exercises covering 30+ grammar topics will definitely help you enhance your English foundation</div>
            <div className={styles.testItemFunJoin}>
              <div className={styles.testItemFunJoinBtn}>Luyện tập</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBody;
