import type { NextPage } from 'next';
import { useState } from 'react';
import useTrans from '../../hooks/useTrans';
import { angleRightIcon } from '../../public/icons';
import styles from '../../styles/components/templates/PartOneBody.module.scss';

type PropType = {

};

const PartOneBody: NextPage<PropType> = (props) => {
  const trans = useTrans();
  const [isReadLess, setIsReadLess] = useState<boolean>(false);
  const [idSeeMore, setIdSeeMore] = useState<number | null>(null);

  const handleSeeMore = (isSeeMore: boolean, idPost: number) => {
    setIsReadLess(isSeeMore);
    setIdSeeMore(idPost);
  };

  return (
    <>
      <h1 className={styles.titleH1}>Luyện nghe TOEIC Part 1 online miễn phí</h1>
      <div className={styles.practiceListView}>
        <div className="row">
          <div className="col-xxl-9 col-12 col-md-12">
            <div>
              <div className={styles.practiceName}>PART 1: PHOTOS</div>
              <div className={styles.practiceList}>
                <div className={styles.practiceListItem}>
                  <div className={styles.practiceListItemName}>Lesson 1: Predict what you will hear </div>
                </div>
                <div className={styles.practiceListItem}>
                  <div className={styles.practiceListItemName}>Lesson 2: Listen for correct verb</div>
                </div>
                <div className={styles.practiceListItem}>
                  <div className={styles.practiceListItemName}>Lesson 3: Listen for details</div>
                </div>
                <div className={styles.practiceListItem}>
                  <div className={styles.practiceListItemName}>Lesson 4: Listen for prepositions and similar sounds</div>
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
          <h2><strong>1. Cách luyện thi TOEIC part 1 online trên website TOEIC TEST PRO</strong></h2>
          <p>– Khi làm bài luyện nghe TOEIC part 1 trên TOEIC TEST PRO, bạn có thể chọn những bài test trên danh sách của chúng tôi.</p>
          <p>– Mỗi bài luyện thi Listening part 1 gồm 6 câu hỏi. Mỗi câu hỏi có một bức ảnh. Bạn sẽ nghe bốn đáp án (được đánh dấu A, B, C, D) và sau đó chọn một câu mô tả tốt nhất bức ảnh.</p>
          <p>– Sau khi hoàn thành tất cả sáu câu hỏi, bạn cần nhấn nút gửi để nộp các câu trả lời của bạn.</p>
          <p>– Có thể xem lại bài thi đã làm, xem đáp án đúng và lời giải chi tiết. Đây là một trong những điểm cộng của TOEIC TEST PRO, giúp bạn có thể xác định được điểm mạnh và yếu của mình.&nbsp;</p>
          <p>Bài thi Toeic Listening part 1 được coi là phần dễ nhất trong đề thi TOEIC vì nó có số lượng câu hỏi ít nhất. Tuy nhiên, part 1 ở format mới khó hơn ở format cũ vì nó có nhiều bẫy hơn. Vì vậy, không có cách nào khác ngoài việc luyện thi TOEIC part 1 càng nhiều càng tốt.</p>
          <h2><strong>2. Những câu hỏi thường gặp về bài thi Toeic Listening part 1</strong></h2>
          <h3><strong>2.1. Có bao nhiêu câu hỏi trong part 1 TOEIC</strong></h3>
          <p>So với các phần khác trong đề thi TOEIC, part 1 có số lượng câu hỏi ít nhất với 6 câu.&nbsp;</p>
          <h3><strong>2.2. Cách phân bổ thời gian trong bài thi nghe TOEIC part 1?</strong></h3>
          <p>Trong part 1 của TOEIC, bạn sẽ có 1 phút 25 giây để nghe hướng dẫn. Do đó, hãy tận dụng thời gian này để xem nhanh các bức tranh để nghĩ ra các mô tả có thể.</p>
          <p>Đối với mỗi câu hỏi, bạn có thể thực hiện theo các bước sau:</p>
          <p>- Bước 1: Nghe bốn lựa chọn A, B, C và D (Sẽ có 5 giây nghỉ giữa hai câu trả lời)</p>
          <p>- Bước 2: Sử dụng ba giây đầu tiên để điền câu trả lời vào phiếu trả lời&nbsp;</p>
          <p>- Bước 3: Sử dụng thời gian còn lại (hai giây) để nhìn vào bức tranh tiếp theo.&nbsp;</p>
          <h3><strong>2.3. Những chủ đề nào thường có trong TOEIC part 1?</strong></h3>
          <p>Mặc dù là phần thi không khó trong kỳ thi TOEIC, nhưng part 1 TOEIC có các chủ đề đa dạng từ office, airports and airplanes, train station, room, street, storeroom, store and ship. Ngoài ra, free time and shopping cũng thường có trong TOEIC part 1.&nbsp;</p>
          <h3><strong>2.4. Làm thế nào để đạt điểm cao trong bài thi TOEIC part 1?</strong></h3>
          <p>Có nhiều cách khác nhau để đạt được điểm tối đa trong part 1. Tuy nhiên, bạn có thể làm theo các mẹo được đề xuất dưới đây:</p>
          <p>- Phân tích ảnh trước khi nghe: Bước này có tầm quan trọng lớn trong cả việc luyện đề ở nhà và làm bài thi thực tế. Điều cần thiết là phải xem kỹ bức ảnh và chú ý đến:</p>
          <ul>
            <li>Ngoại hình của nhân vật: Phỏng đoán giới tính, quần áo và nghề nghiệp của nhân vật.</li>
            <li>Hành động của các bộ phận trên cơ thể: Mắt: Nhân vật đang nhìn / đang nhìn cái gì ?, Tay: (Các) nhân vật đang cầm cái gì? Ngoài ra, hãy nghĩ đến các động từ khác thường xuất hiện trong đoạn ghi âm như chạy, đứng, nhìn chằm chằm, leo lên, v.v.&nbsp;</li>
            <li>Cài đặt và các hạng mục: Đoán bối cảnh của bức tranh, chẳng hạn như phòng họp, nhà bếp hoặc công viên.&nbsp;</li>
            <li>Tên của (các) đối tượng</li>
            <li>Đối tượng ở đâu: trên bàn, trên đường phố, bên trái, bên phải, ở giữa, gần, đối diện, bên cạnh, v.v.&nbsp;</li>
            <li>Trạng thái của đối tượng: đóng, mở, đầy, trống, v.v.&nbsp;</li>
          </ul>
          <p><em>-&nbsp;</em>Nghĩ về điễn đạt khác nhau cho một bức ảnh:</p>
          <p>Nghĩ ra nhiều cách diễn đạt cho một bức tranh là một bước quan trọng để đạt điểm cao trong bài thi TOEIC Listening part 1. Ví dụ: thay vì nói “They are making a call”, chúng ta cũng có thể nói “They are hanging up the phone” hoặc “They are talking on the phone”.</p>
          <div className={styles.btnShowContent}>Xem thêm</div>
        </div>
      </div>
    </>
  );
};

export default PartOneBody;
