import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useTrans from '../../hooks/useTrans';
import { angleRightIcon } from '../../public/icons';
import styles from '../../styles/components/templates/PartFourBody.module.scss';

type PropType = {

};

const PartFourBody: NextPage<PropType> = (props) => {
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
      <h1 className={styles.titleH1}>Luyện nghe TOEIC Part 4 online miễn phí</h1>
      <div className={styles.practiceListView}>
        <div className="row">
          <div className="col-xxl-9 col-12 col-md-12">
            <div>
              <div className={styles.practiceName}>PART 4: SHORT TALKS</div>
              <div className={styles.practiceList} onClick={() => router.push('/practice/part-four/1')} role="presentation">
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
          <h2><strong>1. Hướng dẫn làm bài luyện nghe TOEIC Part 4&nbsp;</strong><strong>(short talks) trên website Toeic Test Pro?</strong></h2>
          <ul>
            <li>Chọn một bài từ danh sách bài kiểm tra của Part 4 trên trang web TOEIC TEST PRO.&nbsp;Mỗi bài luyện thi TOEIC Part 4 bao gồm 10 bài nói ngắn.&nbsp;Mỗi bài nói ngắn gồm 3 câu hỏi.&nbsp;Nhiệm vụ của bạn là chọn câu trả lời mà bạn cho là phù hợp nhất theo những gì bạn nghe được.</li>
            <li>Sau khi kết thúc mỗi bài luyện nghe TOEIC Part 4, bạn có thể xem đáp án của mình với đáp án đúng có lời giải chi tiết của hệ thống.</li>
            <li>Một bài nói trong Part 4 của TOEIC chỉ có một người nói, tuy nhiên, mức độ từ vựng và ngữ pháp khá khó.&nbsp;Do đó, bạn cần tăng cường vốn từ vựng cũng như luyện nghe thường xuyên.</li>
          </ul>
          <p>Đề thi TOEIC Part 4 theo format mới đã được cập nhật trên website TOEIC TEST PRO.&nbsp;Do đó, luyện thi trên TOEIC TEST PRO chắc chắn sẽ giúp bạn làm quen với dạng bài thi cũng như nâng cao kỹ năng làm bài thi TOEIC của mình.</p>
          <h2><strong>2. Các câu hỏi thường gặp về bài thi Toeic Listening Part 4 (FAQ)</strong></h2>
          <h3><strong>2.1.&nbsp;Tôi có thể nghe lại TOEIC Part 4 lần 2 không?</strong></h3>
          <p>Không, bạn không thể.&nbsp;Tất cả các bài nghe trong TOEIC Part 4 sẽ chỉ được phát một lần duy nhất.&nbsp;Do đó, hãy nghe các đoạn ghi âm một cách cẩn thận.&nbsp;Nếu bạn bỏ lỡ bất kỳ phần nào của bài nghe, đừng suy nghĩ nhiều về nó vì bạn có thể sử dụng dự đoán của mình để đưa ra câu trả lời.&nbsp;</p>
          <h3><strong>2.2.&nbsp;Các dạng câu hỏi thường gặp trong bài thi TOEIC Part 4 là gì?</strong></h3>
          <ul>
            <li>Question asking for main idea</li>
            <li>Question asking for details&nbsp;</li>
            <li>Inference question</li>
          </ul>
          <h3><strong>2.3. Các chủ đề thường gặp trong bài thi nghe Part 4 TOEIC là gì?</strong></h3>
          <ul>
            <li>News/ Broadcast</li>
            <li>Advertisement/ Announcement</li>
            <li>Report</li>
            <li>Telephone messages</li>
          </ul>
          <h3><strong>2.4. Làm thế nào để đạt điểm cao trong bài thi TOEIC Listening Part 4?</strong></h3>
          <p>+ Phân bổ thời gian hợp lý:&nbsp;Phân bổ thời gian hợp lý thực sự quan trọng trong bất kỳ bài thi nào kể cả bài thi TOEIC.&nbsp;Trong khi nghe, nếu bạn bỏ lỡ bất kỳ thông tin nào trong bản ghi âm, hãy sử dụng dự đoán của bạn để chọn câu trả lời mà bạn cho là phù hợp nhất.</p>
          <p>+ Gạch chân từ khóa trong cả câu hỏi và câu trả lời trước khi nghe:&nbsp;Bạn nên xem câu hỏi và lựa chọn câu trả lời và gạch chân từ khóa trong đó.&nbsp;</p>
          <p>+ Ghi nhanh các từ mới khi luyện tập:&nbsp;Ngoài việc làm bài kiểm tra, bạn nên học từ vựng trong mỗi bài kiểm tra vì bạn có thể gặp chúng trong bài thi.</p>

          <div className={styles.btnShowContent}>Xem thêm</div>
        </div>
      </div>
    </>
  );
};

export default PartFourBody;
