import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useTrans from '../../hooks/useTrans';
import { angleRightIcon } from '../../public/icons';
import styles from '../../styles/components/templates/PartSevenTripleBody.module.scss';
import OtherPractices from '../organisms/OtherPractices';

type PropType = {

};

const PartSevenTripleBody: NextPage<PropType> = (props) => {
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
      <h1 className={styles.titleH1}>Luyện thi TOEIC Part 7 Triple Passage Online miễn phí</h1>
      <div className={styles.practiceListView}>
        <div className="row">
          <div className="col-xxl-9 col-12 col-md-12">
            <div>
              <div className={styles.practiceName}>PART 7: TRIPLE PASSAGES</div>
              <div className={styles.practiceList} onClick={() => router.push('/practice/part-seven-triple/1')} role="presentation">
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
          <h2>1. How to take TOEIC Reading Practice Test Part 7 Triple Passage on TOEIC TEST PRO website?</h2>
          <p>– When doing tests on TOEIC TEST PRO website, you can choose any Reading practice test part 7 triple passage to take first.</p>
          <p>– There are three set-based triple passages in the TOEIC Reading exam. Each set-based triple passage comprises 5 questions. Therefore, the total number of questions in this section is 15.</p>
          <p>– You have to select the best answer among options A, B, C or D.&nbsp;</p>
          <p>– Once completing each test, you can review your work, see your answers along with our correct answers with clear and detailed explanations.</p>
          <h2>2. Frequently asked questions (FAQs) about TOEIC Reading Test Part 7 Triple passage</h2>
          <h3>2.1.&nbsp;Which types of passages are often included in the TOEIC Test Part 7 Triple Passage?</h3>
          <p>There are different kinds of passages in the TOEIC Reading part 7. But here are the common ones: Articles, Announcements, Advertisements, Notices, Letters, Emails, Memos, Faxes</p>
          <h3>2.2. Which types of questions are often included in the TOEIC Reading Test Part 7 Triple Passage?</h3>
          <p>Knowing which types of questions are often included in the TOEIC Reading Test Part 7 Triple Passage is really important as you can have a thorough preparation for it. Below are four sorts of questions that often appear in the TOEIC Reading part 7 Triple Passage.</p>
          <ul>
            <li>Main idea questions</li>
            <li>Vocabulary questions</li>
            <li>Specific questions</li>
            <li>Inference questions</li>
          </ul>
          <h3>2.3. How to maximise the score of TOEIC Reading Test Part 7 Triple Passage?</h3>
          <p>There are a lot of tips to augment the mark of the TOEIC Reading Test part 7 Triple Passage. However, you should pay attention to the following tips:</p>
          <p>- Identify kinds of passages such as articles, notices, memos, faxes and so on.&nbsp;</p>
          <p>- Determine the purpose of each passage, who writes the passage, the passage is written for whom as well as correlation between three passages.&nbsp;</p>
          <p>- Read the questions and sort them out. It is recommended to answer questions in the order:&nbsp;specific questions - main idea questions - inference questions - vocabulary questions.</p>
          <p>- Seeking keywords in the passages (make notice of paraphrasing)&nbsp;</p>
          <p>- Read carefully lines that contain keywords.&nbsp;</p>
          <h3>2.4. How to allocate time in TOEIC Reading Test Part 7 Triple Passage?</h3>
          <p>Because the TOEIC Reading Test Part 7 Triple Passage is not as simple as the TOEIC Reading Test Part 7 Single Passage. Hence, you need to spend around 5 minutes to complete each.</p>
        </div>
      </div>
    </>
  );
};

export default PartSevenTripleBody;
