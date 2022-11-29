import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useTrans from '../../hooks/useTrans';
import { angleRightIcon } from '../../public/icons';
import styles from '../../styles/components/templates/PartThreeBody.module.scss';

type PropType = {

};

const PartThreeBody: NextPage<PropType> = (props) => {
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
      <h1 className={styles.titleH1}>Luyện nghe TOEIC Part 3 online miễn phí</h1>
      <div className={styles.practiceListView}>
        <div className="row">
          <div className="col-xxl-9 col-12 col-md-12">
            <div>
              <div className={styles.practiceName}>PART 3: CONVERSATIONS</div>
              <div className={styles.practiceList} onClick={() => router.push('/practice/part-three/1')} role="presentation">
                <div className={styles.practiceListItem}>
                  <div className={styles.practiceListItemName}>Lesson 1: Answering direct questions</div>
                </div>
                <div className={styles.practiceListItem}>
                  <div className={styles.practiceListItemName}>Lesson 2: Time and location structures </div>
                </div>
                <div className={styles.practiceListItem}>
                  <div className={styles.practiceListItemName}>Lesson 3: Languages used in requests, offers and opinions </div>
                </div>
                <div className={styles.practiceListItem}>
                  <div className={styles.practiceListItemName}>Lesson 4: Dealing with factual questions </div>
                </div>
                <div className={styles.practiceListItem}>
                  <div className={styles.practiceListItemName}>Test 1</div>
                  <div className={styles.practiceListItemProgress}>
                    <div className={styles.progressBox}>17%</div>
                  </div>
                </div>
                <div className={styles.practiceListItem}>
                  <div className={styles.practiceListItemName}>Test 2</div>
                  <div className={styles.practiceListItemProgress}>
                    <div className={styles.progressBox}>0%</div>
                  </div>
                </div>
                <div className={styles.practiceListItem}>
                  <div className={styles.practiceListItemName}>Test 2</div>
                  <div className={styles.practiceListItemProgress}>
                    <div className={styles.progressBox}>0%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-12 col-md-12">
            <div className={styles.otherPractices}>Other Practices</div>
            <div className={styles.otherPracticesList}>
              <div className={styles.otherPracticesListItem}>
                <div className={styles.otherPracticesListItemName}>Phần 1: Mô tả tranh</div>
                <div className={styles.rightIcon}>{angleRightIcon}</div>
              </div>
              <div className={styles.otherPracticesListItem}>
                <div className={styles.otherPracticesListItemName}>Phần 2: Hỏi - Đáp</div>
                <div className={styles.rightIcon}>{angleRightIcon}</div>
              </div>
              <div className={styles.otherPracticesListItem}>
                <div className={styles.otherPracticesListItemName}>Phần 3: Đoạn hội thoại</div>
                <div className={styles.rightIcon}>{angleRightIcon}</div>
              </div>
              <div className={styles.otherPracticesListItem}>
                <div className={styles.otherPracticesListItemName}>Phần 4: Bài nói ngắn</div>
                <div className={styles.rightIcon}>{angleRightIcon}</div>
              </div>
              <div className={styles.otherPracticesListItem}>
                <div className={styles.otherPracticesListItemName}>Phần 5: Hoàn thành câu</div>
                <div className={styles.rightIcon}>{angleRightIcon}</div>
              </div>
              <div className={styles.otherPracticesListItem}>
                <div className={styles.otherPracticesListItemName}>Phần 6: Hoàn thành đoạn văn</div>
                <div className={styles.rightIcon}>{angleRightIcon}</div>
              </div>
              <div className={styles.otherPracticesListItem}>
                <div className={styles.otherPracticesListItemName}>Phần 7: Đoạn đơn</div>
                <div className={styles.rightIcon}>{angleRightIcon}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.introduction}>
        <div className={styles.listIntro}>
          <h2><strong>1. Hướng dẫn luyện nghe TOEIC Part 3 có đáp án (conversations) trên website TOEIC TEST PRO</strong></h2>
          <ul>
            <li>Chọn một bài test từ danh sách bài thi của Part 3 trên trang web TOEIC TEST PRO.&nbsp;Mỗi bài luyện nghe Toeic Part 3 gồm 13 đoạn hội thoại.&nbsp;Mỗi đoạn hội thoại có 3 câu hỏi.&nbsp;Bạn phải chọn câu trả lời phù hợp nhất theo những gì bạn nghe được.&nbsp;</li>
            <li>Bạn có thể xem lại những đáp án mình đã làm với lời giải chi tiết, rõ ràng.&nbsp;Làm bài luyện thi TOEIC Part 3 trên website TOEIC TEST PRO sẽ giúp bạn xác định được điểm yếu của mình, từ đó đưa ra chiến lược làm bài để đạt điểm tối đa.&nbsp;</li>
          </ul>
          <h2>2. Các câu hỏi thường gặp về bài thi nghe TOEIC Part 3</h2>
          <h3>2.1 Tôi có thể nghe TOEIC Part 3 hai lần không?</h3>
          <p>Không, bạn không thể.&nbsp;Tất cả các bài nghe trong TOEIC Part 3 sẽ chỉ được phát một lần duy nhất.&nbsp;Do đó, bạn cần tập trung nghe nếu không bạn có thể bỏ lỡ cơ hội đưa ra câu trả lời chính xác cho các câu hỏi.&nbsp;</p>
          <h3>2.2.&nbsp;Các bước để làm bài thi nghe TOEIC Part 3 là gì?</h3>
          <p>+&nbsp;Đọc kỹ câu hỏi trước khi nghe.</p>
          <p>+ Gạch chân từ khóa trong câu trả lời.</p>
          <p>+ Tưởng tượng ngữ cảnh và từ vựng có thể xuất hiện trong bài nghe.</p>
          <p>+ Nghe kỹ bài nghe và chọn câu trả lời đúng nhất.</p>
          <h3>2.3.&nbsp;Các dạng câu hỏi thường gặp trong bài thi TOEIC Part 3 là gì?</h3>
          <ul>
            <li>Question asking for main idea</li>
            <li>Question asking for details</li>
            <li>Inference question<strong>&nbsp;</strong></li>
          </ul>
          <h3>2.4. Các chủ đề thường gặp trong bài thi nghe TOEIC Part 3 là gì?</h3>
          <ul>
            <li>Travel (business trip, price, time)</li>
            <li>Restaurant, real estate and retail</li>
            <li>Information about one employee (salary increase, promotion, working position)</li>
            <li>Information in the office (time, meeting, material, equipment and appointment)</li>
            <li>Free-time activities</li>
          </ul>
          <div className={styles.btnShowContent}>Xem thêm</div>
        </div>
      </div>
    </>
  );
};

export default PartThreeBody;
