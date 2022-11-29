import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useTrans from '../../hooks/useTrans';
import { angleRightIcon } from '../../public/icons';
import styles from '../../styles/components/templates/PartFiveBody.module.scss';

type PropType = {

};

const PartFiveBody: NextPage<PropType> = (props) => {
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
      <h1 className={styles.titleH1}>Luyện thi TOEIC Part 5 online miễn phí</h1>
      <div className={styles.practiceListView}>
        <div className="row">
          <div className="col-xxl-9 col-12 col-md-12">
            <div>
              <div className={styles.practiceName}>PART 5: INCOMPLETE SENTENCES</div>
              <div className={styles.practiceList} onClick={() => router.push('/practice/part-five/1')} role="presentation">
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
          <h2><strong>1. Hướng dẫn luyện thi TOEIC Part 5 Online (Incomplete Sentences) trên website Toeic Test Pro?</strong></h2>
          <p>Bài thi Toeic Reading Part 5 (Incomplete Sentences) là phần đầu tiên của bài thi TOEIC Reading.&nbsp;Mỗi bài luyện thi Part 5 Toeic của TOEIC TEST PRO bao gồm 30 câu hỏi.&nbsp;Mỗi câu hỏi có một chỗ trống.&nbsp;Bạn sẽ chọn một từ hoặc cụm từ ứng với các đáp án A, B, C, D phù hợp nhất để hoàn thành câu.&nbsp;</p>
          <p>Bộ đếm thời gian có thể giúp bạn theo dõi thời gian hoàn thành Part 5. Sau khi hoàn thành bài luyện Part 5 TOEIC, bạn có thể xem lại bài làm của mình so sánh đáp án đúng với lời giải chi tiết của hệ thống.</p>
          <h2><strong>2. Các câu hỏi thường gặp (faqs) về bài thi Toeic Reading Part 5</strong></h2>
          <h3><strong>2.1.&nbsp;Những dạng câu hỏi nào thường có trong bài thi TOEIC Reading Part 5?</strong></h3>
          <p>Part 5 của bài thi TOEIC Reading thường bao gồm các câu hỏi về&nbsp;Tense, Meaning; Preposition; Word form; Connecting word and Adverb- clause; Relative pronoun; Pronoun/&nbsp;Reflexive/&nbsp; Possessive adjectives.</p>
          <p><strong>2.2.&nbsp;Làm thế nào để phân bổ thời gian trong bài thi TOEIC Reading Part 5?</strong></p>
          <p>Part 5 Toeic được coi là phần dễ nhất trong bài thi TOEIC Reading nên bạn chỉ nên dành khoảng 10 - 12 phút để hoàn thành.&nbsp;Bạn nên dành 10 giây cho mỗi câu hỏi dễ và 30 giây cho mỗi câu hỏi khó.&nbsp;Thời gian còn lại dành cho việc kiểm tra đáp án và điền đáp án vào phiếu trả lời.&nbsp;</p>
          <h3><strong>2.3.&nbsp;Những chủ đề nào thường có trong bài thi TOEIC Reading part 5?</strong></h3>
          <p>Dưới đây là những chủ đề thường xuất hiện trong phần 5 của TOEIC:</p>
          <ul>
            <li>Office issues</li>
            <li>Financial issues</li>
            <li>Sales and Marketing</li>
            <li>Business Transactions</li>
            <li>Transportation</li>
            <li>Travel</li>
            <li>Entertainment</li>
            <li>Eating</li>
            <li>Schedule</li>
          </ul>
          <h3><strong>2.4.&nbsp;Làm thế nào để đạt điểm cao TOEIC Part 5?</strong></h3>
          <p><strong>- Nhận dạng part of speech:</strong>&nbsp;Xác định part of speech cực kỳ quan trọng trong việc đưa ra câu trả lời chính xác cho các câu hỏi trong TOEIC part 5. Bạn cần xác định hình thức của từ (danh từ, động từ, tính từ hay trạng từ).</p>
          <p><strong>- Dạng động từ:</strong>&nbsp;Để đưa ra câu trả lời chính xác cho các câu hỏi về thì động từ, bạn cần nhìn vào dấu hiệu thời gian trong câu.&nbsp;Ví dụ, nếu câu có các từ chẳng hạn như everyday, sometimes, always or often, động từ phải ở thì hiện tại đơn.&nbsp;</p>
          <p><strong>- Quản lý thời gian hiệu quả:</strong>&nbsp;Quản lý thời gian hiệu quả là chìa khóa để đạt điểm cao trong bài thi TOEIC Reading Part 5. Đừng dành quá nhiều thời gian cho một câu hỏi.&nbsp;Nếu gặp bất kỳ câu hỏi khó nào, hãy bỏ qua vì bạn có thể quay lại và điền lại đáp án theo dự đoán của bạn.</p>
          <div className={styles.btnShowContent}>Xem thêm</div>
        </div>
      </div>
    </>
  );
};

export default PartFiveBody;
