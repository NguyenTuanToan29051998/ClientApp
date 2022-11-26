/* eslint-disable @next/next/no-img-element */
import { NetworkOfSIB } from '@/models/network';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useTrans from '../../hooks/useTrans';
import styles from '../../styles/components/templates/PracticeBody.module.scss';

type PropType = {
  listNetworkOfSIB: NetworkOfSIB[];
};

const PracticeBody: NextPage<PropType> = (props) => {
  const { listNetworkOfSIB } = props;
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
      <h1 className={styles.title}>Luyện thi TOEIC online miễn phí có đáp án</h1>
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
            <div className={styles.data}>
              <div className={`${styles.avatar} ${styles.avatarPartTwo}`} />
              <div className={styles.content}>
                <p className={styles.shortName}>Phần 2</p>
                <p className={styles.name}>Hỏi - Đáp</p>
                <p className={styles.desc}>Thí sinh sẽ nghe 1 lần duy nhất 3 câu hồi đáp cho 1 câu hỏi hoặc 1 câu nói. Sau đó chọn câu hồi đáp phù hợp nhất.</p>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-lg-4 col-sm-6 col-12">
            <div className={styles.data}>
              <div className={`${styles.avatar} ${styles.avatarPartThree}`} />
              <div className={styles.content}>
                <p className={styles.shortName}>Phần 3</p>
                <p className={styles.name}>Đoạn hội thoại</p>
                <p className={styles.desc}>Thí sinh sẽ nghe 1 lần duy nhất các đoạn hội thoại giữa 2 hoặc 3 người. Mỗi đoạn hội thoại sẽ có 3 câu hỏi, mỗi câu hỏi có 4 lựa chọn. Thí sinh đọc câu hỏi sau đó chọn câu trả lời phù hợp nhất.</p>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-lg-4 col-sm-6 col-12">
            <div className={styles.data}>
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
            <div className={styles.data}>
              <div className={`${styles.avatar} ${styles.avatarPartFive}`} />
              <div className={styles.content}>
                <p className={styles.shortName}>Phần 5</p>
                <p className={styles.name}>Hoàn thành câu</p>
                <p className={styles.desc}>Chọn đáp án đúng nhất trong 4 đáp án để hoàn thành câu.</p>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-lg-4 col-sm-6 col-12">
            <div className={styles.data}>
              <div className={`${styles.avatar} ${styles.avatarPartSix}`} />
              <div className={styles.content}>
                <p className={styles.shortName}>Phần 6</p>
                <p className={styles.name}>Hoàn thành đoạn văn</p>
                <p className={styles.desc}>Chọn đáp án đúng nhất trong 4 đáp án (từ, cụm từ hoặc câu) để hoàn thành đoạn văn. Mỗi đoạn văn sẽ có 4 câu hỏi.</p>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-lg-4 col-sm-6 col-12">
            <div className={styles.data}>
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

      <div className={styles.introduction}>
        <div className={styles.listIntro}>
          <p>Để đạt điểm cao trong kỳ thi TOEIC, không có cách nào hiệu quả hơn việc luyện thi TOEIC online hàng ngày. Việc làm các bài luyện tập theo từng phần sẽ giúp bạn biết rõ cấu trúc của từng phần cũng như trình độ hiện tại của mình. Sau đó bạn có thể xây dựng một lộ trình học tập phù hợp.&nbsp;</p>
          <h2><strong>1. Ai nên luyện thi TOEIC online?</strong></h2>
          <p>Rõ ràng những ai chuẩn bị thi TOEIC nên luyện thi TOEIC online. Như đã nói ở trên, thực hành bài kiểm tra sẽ giúp bạn làm quen với cấu trúc bài thi và do đó điểm số của bạn sẽ được nâng cao.&nbsp;</p>
          <p>Bên cạnh đó, những ai muốn nâng cao khả năng tiếng Anh của mình, đặc biệt là kỹ năng đọc và nghe thì việc ôn thi TOEIC online cũng rất cần thiết.&nbsp;</p>
          <h2><strong>2. Khi nào bạn nên bắt đầu luyện thi TOEIC?&nbsp;</strong></h2>
          <p>Ngay khi bắt đầu bắt tay vào ôn thi TOEIC, bạn nên luyện thi theo từng kỹ năng và từng phần. Bước này sẽ giúp bạn hiểu rõ hơn về các yêu cầu cụ thể cũng như các mẹo để tăng điểm trong từng phần. Quan trọng hơn, nó sẽ giúp bạn tự tin hơn trước khi bước vào kỳ thi thật.&nbsp;</p>
          <h2><strong>3. Tại sao bạn nên chọn luyện thi TOEIC của TOEIC TEST PRO?</strong></h2>
          <p>Trong thời đại công nghệ, việc&nbsp;<strong>luyện thi TOEIC online</strong>&nbsp;trên các trang web và ứng dụng đã trở nên phổ biến.&nbsp;Nếu bạn đang tìm kiếm một nơi luyện thi TOEIC online miễn phí uy tín và chất lượng thì&nbsp;<strong>TOEIC TEST PRO&nbsp;</strong>là một lựa chọn lý tưởng vì những lý do sau đây.&nbsp;</p>
          <p>Thứ nhất,&nbsp;<strong>TOEIC TEST PRO&nbsp;</strong>cung cấp các bài thi thử theo đúng cấu trúc của bài thi TOEIC thật. Các bài kiểm tra online bao gồm hơn 4000 câu hỏi kèm theo đáp án chi tiết được biên soạn một cách cẩn thận. Bên cạnh đó, các bài tập ngữ pháp và từ vựng cũng sẽ giúp bạn xây dựng một nền tảng tiếng Anh vững chắc trước khi bước vào kỳ thi thật.</p>
          <p>Thứ hai, sau khi kết thúc mỗi bài thi thử TOEIC online, bạn có thể xem điểm của mình, xem câu trả lời đúng với giải thích rõ ràng. Phần giải thích sẽ giúp bạn biết được mình sai ở đâu và tránh những lỗi đó trong bài thi thật.&nbsp;</p>
          <p>Quan trọng hơn, bạn có thể thi thử TOEIC online miễn phí bất cứ lúc nào và ở đâu. Tất cả những gì bạn cần là một chiếc điện thoại thông minh có kết nối Internet.</p>
          <div className={styles.btnShowContent}>Xem thêm</div>
        </div>
      </div>
    </>
  );
};

export default PracticeBody;
