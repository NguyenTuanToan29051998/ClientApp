import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useTrans from '../../hooks/useTrans';
import { angleRightIcon } from '../../public/icons';
import styles from '../../styles/components/templates/PartSevenDoubleBody.module.scss';
import OtherPractices from '../organisms/OtherPractices';

type PropType = {

};

const PartSevenDoubleBody: NextPage<PropType> = (props) => {
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
      <h1 className={styles.titleH1}>Luyện thi TOEIC Part 7 Double Passage Online miễn phí</h1>
      <div className={styles.practiceListView}>
        <div className="row">
          <div className="col-xxl-9 col-12 col-md-12">
            <div>
              <div className={styles.practiceName}>PART 7: DOUBLE PASSAGES</div>
              <div className={styles.practiceList} onClick={() => router.push('/practice/part-seven-double/1')} role="presentation">
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
            <OtherPractices />
          </div>
        </div>
      </div>
      <div className={styles.introduction}>
        <div className={styles.listIntro}>
          <h2>1. How to take TOEIC Reading Practice Test Part 7 Double Passage on TOEIC TEST PROwebsite?</h2>
          <p>– On the TOEIC TEST PRO website, you are allowed to choose any tests to take first.&nbsp;</p>
          <p>– In the TOEIC Reading Practice Test Part 7 Double Passage, there are two set-based double passages. Each set-based double passage consists of 5 questions. The total number of questions in this part is 10.&nbsp;</p>
          <p>– Your duty is choosing the best answer among answers A, B, C, D.</p>
          <p>– After finishing each test, you can review what you have done including your answers, correct answers with specific explanations.</p>
          <h2>2. Frequently asked questions (FAQs) about TOEIC Reading Test Part 7 Double Passage</h2>
          <h3>2.1.&nbsp;Which types of passages are often included in the TOEIC Reading Test Part 7 Double Passage?</h3>
          <ul>
            <li>Announcements</li>
            <li>Advertisements&nbsp;</li>
            <li>Emails</li>
            <li>Memos&nbsp;</li>
            <li>Letters</li>
            <li>Notices</li>
            <li>Articles</li>
            <li>Faxes&nbsp;</li>
          </ul>
          <h3>2.2. Which types of questions are often included in the TOEIC Reading Test Part 7 Double Passage?</h3>
          <ul>
            <li>Vocabulary questions</li>
            <li>Inference questions</li>
            <li>Main idea questions</li>
            <li>Specific questions</li>
          </ul>
          <h3>2.3. How to maximise the score of TOEIC Reading Test Part 7 Double Passage?</h3>
          <p>- Determine types of passages (articles, memos, emails, letters and so on)</p>
          <p>- Identify the purpose of the passage, the person who writes the passage, the passage is written for whom as well as the connections between passages.&nbsp;</p>
          <p>-&nbsp;Read the questions and sort them out.&nbsp;It’s advisable for you to deal with questions in the order: specific questions - main idea questions - inference questions - vocabulary questions.</p>
          <p>- Searching keywords (pay attention to&nbsp;paraphrasing)&nbsp;</p>
          <p>- Read carefully lines that contain keywords.&nbsp;</p>
          <h3>2.4. How to allocate time in TOEIC Reading Test Part 7 Double Passage?</h3>
          <p>Allotting time reasonably is extremely important in the TOEIC exam, especially the reading comprehension part. Since double passages are relatively difficult and tricky, you should spend around 5 minutes to complete each.</p>
        </div>
      </div>
    </>
  );
};

export default PartSevenDoubleBody;
