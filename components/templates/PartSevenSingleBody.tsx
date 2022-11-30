import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useTrans from '../../hooks/useTrans';
import { angleRightIcon } from '../../public/icons';
import styles from '../../styles/components/templates/PartSevenSingleBody.module.scss';

type PropType = {

};

const PartSevenSingleBody: NextPage<PropType> = (props) => {
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
      <h1 className={styles.titleH1}>Luyện thi TOEIC Part 7 Single Passage Online miễn phí</h1>
      <div className={styles.practiceListView}>
        <div className="row">
          <div className="col-xxl-9 col-12 col-md-12">
            <div>
              <div className={styles.practiceName}>PART 7: SINGLE PASSAGES</div>
              <div className={styles.practiceList} onClick={() => router.push('/practice/part-seven-single/1')} role="presentation">
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
          <h2><strong>1. Hướng dẫn luyện thi Toeic Part 7 single passage ( đoạn đơn ) trên website Toeic Test Pro?</strong></h2>
          <p>– Với mỗi bài luyện thi TOEIC Part 7 Single Passage, bạn sẽ có 10 đoạn đơn với 2-4 câu hỏi mỗi đoạn.&nbsp;Tổng số câu hỏi trong phần này là 29.&nbsp;</p>
          <p>– Bạn sẽ phải chọn câu trả lời đúng nhất trong số các đáp án A, B, C, D.</p>
          <p>– Sau khi kết thúc mỗi bài thi trên TOEIC TEST PRO, bạn có thể xem lại bài làm của mình, xem đáp án đúng với lời giải chi tiết.&nbsp;Phần giải thích ở cuối mỗi bài kiểm tra sẽ giúp bạn nhận ra điểm yếu của mình, từ đó tránh mắc sai lầm trong lần sau.</p>
          <h2><strong>2. Các câu hỏi thường gặp (FAQs) về bài thi Toeic Reading Part 7 single passage</strong></h2>
          <h3><strong>2.1.&nbsp;Những chủ đề thường có trong bài thi TOEIC Part 7 Single Passage?</strong></h3>
          <ul>
            <li>Notices</li>
            <li>Articles</li>
            <li>Announcements</li>
            <li>Emails</li>
            <li>Advertisements&nbsp;</li>
            <li>Faxes&nbsp;</li>
            <li>Letters</li>
            <li>Memos&nbsp;</li>
          </ul>
          <h3><strong>2.2.&nbsp;Những dạng câu hỏi nào thường có trong bài thi TOEIC Part 7 Single Passage?</strong></h3>
          <ul>
            <li>Specific questions</li>
            <li>Main idea questions</li>
            <li>Inference questions</li>
            <li>Vocabulary questions</li>
          </ul>
          <h3><strong>2.3.&nbsp;Cách đạt điểm cao trong phần thi TOEIC Part 7 Single Passage?</strong></h3>
          <p>- Xác định các loại đoạn văn (bài báo, email, thư từ, v.v.)</p>
          <p>- Xác định được mục đích của đoạn văn, người viết đoạn văn, đoạn văn được viết cho ai cũng như ý chính của từng đoạn trong đoạn văn.&nbsp;</p>
          <p>- Đọc các câu hỏi và phân loại chúng.&nbsp;Bạn nên trả lời các câu hỏi theo thứ tự: câu hỏi cụ thể - câu hỏi chính - câu hỏi suy luận - câu hỏi từ vựng.</p>
          <p>- Tìm kiếm các từ khóa (chú ý đến&nbsp;cách diễn giải)&nbsp;</p>
          <p>- Đọc kỹ các dòng có chứa từ khóa.&nbsp;</p>
          <h3><strong>2.4.&nbsp;Làm thế nào để phân bổ thời gian trong bài thi TOEIC Part 7 Single Passage?</strong></h3>
          <p>Vì đoạn văn đơn thường không khó như đoạn văn đôi hoặc đoạn văn ba, bạn nên dành khoảng 3 phút để hoàn thành mỗi đoạn văn bản đơn để có đủ thời gian làm bài văn đôi và ba.&nbsp;</p>
          <div className={styles.btnShowContent}>Xem thêm</div>
        </div>
      </div>
    </>
  );
};

export default PartSevenSingleBody;
