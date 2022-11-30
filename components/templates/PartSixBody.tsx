import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useTrans from '../../hooks/useTrans';
import { angleRightIcon } from '../../public/icons';
import styles from '../../styles/components/templates/PartSixBody.module.scss';

type PropType = {

};

const PartSixBody: NextPage<PropType> = (props) => {
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
      <h1 className={styles.titleH1}>Luyện thi TOEIC Part 6 online miễn phí</h1>
      <div className={styles.practiceListView}>
        <div className="row">
          <div className="col-xxl-9 col-12 col-md-12">
            <div>
              <div className={styles.practiceName}>PART 6: TEXT COMPLETION</div>
              <div className={styles.practiceList} onClick={() => router.push('/practice/part-six/1')} role="presentation">
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
          <h2><strong>1. Hướng dẫn luyện đề thi TOEIC Part 6&nbsp;</strong><strong>(text completion)</strong>&nbsp;<strong>trên website Toeic Test Pro?</strong></h2>
          <p>Có 4 đoạn văn trong bài luyện thi TOEIC Part 6. Mỗi đoạn văn bao gồm 4 câu hỏi.&nbsp;Mỗi câu hỏi có một chỗ trống.&nbsp;Nhiệm vụ của bạn là chọn một từ, cụm từ hoặc câu (đánh dấu A – D) phù hợp nhất với chỗ trống.&nbsp;Các bài thi thực hành của TOEIC TEST PRO theo định dạng mới;&nbsp;do đó, làm các bài kiểm tra thực hành trên trang web này sẽ giúp bạn làm quen với hình thức kiểm tra như bài thi TOEIC Part 6 thật.</p>
          <p>Sau khi kết thúc mỗi bài thi trên TOEIC TEST PRO, các bạn có thể xem lại bài làm của mình, so sánh với đáp án đúng với lời giải chi tiết.</p>
          <h2><strong>2. Các câu hỏi thường gặp (FAQs) về bài thi Toeic Reading Part 6</strong></h2>
          <h3><strong>2.1.&nbsp;Những chủ đề thường có trong bài thi TOEIC Part 6?</strong></h3>
          <p>Dưới đây là những dạng thường xuất hiện trong bài thi TOEIC Reading Part 6:</p>
          <ul>
            <li>Letter</li>
            <li>Email</li>
            <li>Memo</li>
            <li>Advertisement</li>
            <li>Instruction</li>
            <li>Article</li>
            <li>Notice&nbsp;</li>
            <li>Memorandum</li>
          </ul>
          <h3><strong>2.2.&nbsp;Những chủ điểm ngữ pháp nào thường có trong bài thi TOEIC Reading part 6?</strong></h3>
          <p><strong>- Part of speech:</strong>&nbsp;</p>
          <p>Đây là dạng câu hỏi yêu cầu người dự thi xác định dạng của từ (danh từ, động từ, tính từ hay trạng từ).</p>
          <p><strong>- Verb tense:</strong></p>
          <p>Đây là dạng câu hỏi yêu cầu thí sinh phải chọn đúng thì động từ.&nbsp;Để hoàn thành thành công dạng câu hỏi này, bạn cần nắm chắc thì động từ cũng như các cấu trúc câu.&nbsp;</p>
          <p><strong>- Prepositions &amp; Conjunctions:&nbsp;</strong></p>
          <p>Thí sinh cần tìm hiểu kỹ cách sử dụng và vị trí của các giới từ và liên từ.&nbsp;</p>
          <h3><strong>2.3.&nbsp;Cách phân bổ thời gian trong bài thi TOEIC Part 6?</strong></h3>
          <p>Giống như Part 5, bạn nên dành khoảng 10 phút cho Part 6 bao gồm 10 giây cho mỗi câu hỏi dễ và 30 giây cho mỗi câu hỏi khó.&nbsp;Thời gian còn lại nên dùng để kiểm tra câu trả lời và điền câu trả lời vào phiếu trả lời.&nbsp;</p>
          <h3><strong>2.4.&nbsp;Làm thế nào để cải thiện điểm phần thi TOEIC Reading Part 6?</strong></h3>
          <p><strong><em>- Từ Vựng</em></strong>&nbsp;<strong><em>:</em></strong>&nbsp;Khi&nbsp;học từ vựng, thay vì học từng từ đơn lẻ, bạn nên học các cụm từ.&nbsp;Làm như vậy, bạn có thể ôn luyện Part 6 TOEIC một cách hiệu quả.&nbsp;</p>
          <p><strong><em>- Nắm chắc ngữ pháp cơ bản:</em></strong>&nbsp;Các câu hỏi về ngữ pháp ở định dạng mới không khó.&nbsp;Do đó, hiểu đầy đủ các ngữ pháp cơ bản là một trong những chìa khóa để đạt điểm tối đa trong phần 6 TOEIC.&nbsp;</p>
          <p><strong><em>- Tăng cường vốn từ vựng thường xuyên:</em></strong>&nbsp;Với bất kỳ kỳ thi tiếng Anh nào, có vốn từ vựng phong phú đồng nghĩa với việc bạn có khả năng đạt điểm cao.&nbsp;Trong bài thi TOEIC Part 6, số lượng câu hỏi từ vựng chiếm 70 - 80%.&nbsp;Vì vậy, việc tăng cường vốn từ vựng là thực sự cần thiết.</p>
          <div className={styles.btnShowContent}>Xem thêm</div>
        </div>
      </div>
    </>
  );
};

export default PartSixBody;
