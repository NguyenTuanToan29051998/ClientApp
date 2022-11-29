import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useTrans from '../../hooks/useTrans';
import { angleRightIcon } from '../../public/icons';
import styles from '../../styles/components/templates/PartTwoBody.module.scss';

type PropType = {

};

const PartTwoBody: NextPage<PropType> = (props) => {
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
      <h1 className={styles.titleH1}>Luyện nghe TOEIC Part 2 có đáp án miễn phí</h1>
      <div className={styles.practiceListView}>
        <div className="row">
          <div className="col-xxl-9 col-12 col-md-12">
            <div>
              <div className={styles.practiceName}>PART 2: QUESTION- RESPONSE</div>
              <div className={styles.practiceList} onClick={() => router.push('/practice/part-two/1')} role="presentation">
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
          <h2><strong>1. Làm thế nào để làm bài luyện nghe Toeic Part 2 (Question – Response) trên website Toeic Test Pro?</strong></h2>
          <ul>
            <li>Trên TOEIC TEST PRO, bạn có thể chọn bất kỳ bài kiểm tra nào để làm trước.</li>
            <li>Phần luyện nghe TOEIC Part 2 bao gồm 25 câu hỏi.&nbsp;Trong mỗi câu, bạn sẽ nghe một câu hỏi và ba câu trả lời.&nbsp;Bạn cần chọn câu trả lời đúng cho câu hỏi đó.&nbsp;</li>
            <li>Để gửi bài luyện của mình, bạn cần nhấn nút submit.</li>
            <li>Sau mỗi bài thi các em có thể so sánh với đáp án đúng cũng như lời giải chi tiết cho mỗi câu.&nbsp;</li>
          </ul>
          <p>Mặc dù Part 2 của TOEIC không phải là phần khó nhất trong bài thi TOEIC, nhưng đôi khi khiến người làm bài bối rối.&nbsp;Do đó, việc luyện thi Toeic Part 2 hàng ngày và cân nhắc kỹ lưỡng trước khi đưa ra câu trả lời là điều tối quan trọng.</p>
          <h2>2. Các câu hỏi thường gặp về bài nghe TOEIC Part 2</h2>
          <h3><strong>2.1.&nbsp;Làm thế nào để phân bổ thời gian trong bài thi nghe TOEIC Part 2?</strong></h3>
          <p>Để làm đúng chính xác từng câu hỏi trong bài thi nghe TOEIC Part 2, bạn có thể làm theo các bước sau:&nbsp;</p>
          <p><em>Bước 1:</em>&nbsp;Nghe thật kỹ câu hỏi</p>
          <p><em>Bước 2:</em>&nbsp;Nghe ba câu trả lời của câu hỏi đó với các đáp án A, B, C</p>
          <p><em>Bước 3:</em>&nbsp;Chọn câu trả lời đúng nhất</p>
          <p><em>Bước 4:</em>&nbsp;Tận dụng khoảng nghỉ năm giây giữa hai câu hỏi để xem nhanh câu hỏi tiếp theo.</p>
          <h3><strong>2.2 Tôi có thể nghe lại TOEIC Part 2 lần 2 không?</strong></h3>
          <p>Các bản nghe trong bài thi TOEIC Part 2 sẽ chỉ được phát 1 lần, vì vậy hãy lắng nghe cẩn thận nếu không bạn có thể bỏ lỡ cơ hội đưa ra câu trả lời chính xác.&nbsp;Mặc dù bạn không chắc chắn về câu trả lời của mình, hãy chọn câu trả lời mà bạn cho là phù hợp nhất.&nbsp;Điểm của bạn sẽ không bị trừ khi trả lời sai.&nbsp;</p>
          <h3><strong>2.3.&nbsp;Các dạng câu hỏi thường gặp trong bài thi TOEIC Part 2 là gì?</strong></h3>
          <ul>
            <li>Wh-question</li>
            <li>Yes/ No question</li>
            <li>Preference question&nbsp;</li>
            <li>Statement</li>
            <li>Suggestions and Requests&nbsp;</li>
          </ul>
          <h3><strong>2.4.&nbsp;Các chủ đề thường gặp trong bài thi nghe TOEIC Part 2 là gì?</strong></h3>
          <ul>
            <li>Business tasks&nbsp;</li>
            <li>Occupations&nbsp;</li>
            <li>Travel and Transportation&nbsp;</li>
            <li>Banking&nbsp;</li>
            <li>Sports and Entertainment&nbsp;</li>
            <li>Dining out&nbsp;</li>
            <li>Hotels&nbsp;</li>
          </ul>
          <div className={styles.btnShowContent}>Xem thêm</div>
        </div>
      </div>
    </>
  );
};

export default PartTwoBody;
