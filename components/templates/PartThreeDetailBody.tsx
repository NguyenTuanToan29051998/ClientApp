import { QuestionPartOneType } from '@/models/question';
import type { NextPage } from 'next';
import { useState } from 'react';
import useTrans from '../../hooks/useTrans';
import { angleRightIcon, answerSelectIcon, correctResultIcon, incorrectResultIcon, restartIcon } from '../../public/icons';
import styles from '../../styles/components/templates/PartThreeDetailBody.module.scss';
import SubTopic from '../organisms/SubTopic';

type PropType = {
	questionList: QuestionPartOneType[];
};

const PartThreeDetailBody: NextPage<PropType> = (props) => {
	const { questionList } = props;
	const trans = useTrans();
	const [isReadLess, setIsReadLess] = useState<boolean>(false);
	const [idSeeMore, setIdSeeMore] = useState<number | null>(null);

	const handleSeeMore = (isSeeMore: boolean, idPost: number) => {
		setIsReadLess(isSeeMore);
		setIdSeeMore(idPost);
	};

	return (
		<>
			<h2 className={styles.titleH2}>PART 3: CONVERSATIONS</h2>
			<div className={styles.currentTopicLabel}>Test 1</div>
			<div className="row">
				<div className="col-xxl-4 col-12 col-md-12">
					<div className={styles.questionPalette}>
						<div className={styles.questionPaletteTitle}>Question Palette</div>
						<div className={styles.questionPaletteBody}>
							<div className={styles.questionsList}>
								<div className={styles.questionsListRow}>
									<div className={`${styles.questionItem} ${styles.correct}`}>1</div>
									<div className={`${styles.questionItem} ${styles.incorrect}`}>2</div>
									<div className={`${styles.questionItem} ${styles.itemCurrent}`}>3</div>
									<div className={styles.questionItem}>4</div>
									<div className={styles.questionItem}>5</div>
									<div className={styles.questionItem}>6</div>
									<div className={styles.questionItem}>7</div>
									<div className={styles.questionItem}>8</div>
									<div className={styles.questionItem}>9</div>
									<div className={styles.questionItem}>10</div>
									<div className={styles.questionItem}>11</div>
									<div className={styles.questionItem}>12</div>
									<div className={styles.questionItem}>13</div>
								</div>
							</div>
							<div className={styles.questionsStat}>
								<div className={styles.questionsStatItem}>
									<div className={styles.greenSquare} />
									<div className={styles.questionsStatItemText}>1/6 Correct</div>
								</div>
								<div className={styles.questionsStatItem}>
									<div className={styles.redSquare} />
									<div className={styles.questionsStatItemText}>1/6 Incorrect</div>
								</div>
							</div>
						</div>
						<div className={styles.questionPaletteFooter}>
							<div className={styles.btnRestart}>
								<div className="d-flex">{restartIcon}</div>
								<div>Restart</div>
							</div>
						</div>
					</div>
					<div className={styles.currentLevelListLabel}>Lessons</div>
					<div className={styles.currentLessonList}>
						<div className={styles.itemLesson}>
							<span>Lesson 1: Predict what you will hear</span>
						</div>
						<div className={styles.itemLesson}>
							<span>Lesson 2: Listen for correct verb</span>
						</div>
						<div className={styles.itemLesson}>
							<span>Lesson 3: Listen for details</span>
						</div>
						<div className={styles.itemLesson}>
							<span>Lesson 4: Listen for prepositions and similar sounds</span>
						</div>
					</div>
					<div className={styles.currentLevelListLabel}>Practices</div>
					<div className={styles.currentTopicList}>
						<div className="row">
							<div className={`col-4 ${styles.topicLevelItem}`}>
								<div className={`${styles.topicLevelItemName} ${styles.currentLevel}`}>Test 1</div>
							</div>
							<div className={`col-4 ${styles.topicLevelItem}`}>
								<div className={styles.topicLevelItemName}>Test 2</div>
							</div>
							<div className={`col-4 ${styles.topicLevelItem}`}>
								<div className={styles.topicLevelItemName}>Test 3</div>
							</div>
							<div className={`col-4 ${styles.topicLevelItem}`}>
								<div className={styles.topicLevelItemName}>Test 4</div>
							</div>
							<div className={`col-4 ${styles.topicLevelItem}`}>
								<div className={styles.topicLevelItemName}>Test 5</div>
							</div>
							<div className={`col-4 ${styles.topicLevelItem}`}>
								<div className={styles.topicLevelItemName}>Test 6</div>
							</div>
							<div className={`col-4 ${styles.topicLevelItem}`}>
								<div className={styles.topicLevelItemName}>Test 7</div>
							</div>
							<div className={`col-4 ${styles.topicLevelItem}`}>
								<div className={styles.topicLevelItemName}>Test 8</div>
							</div>
							<div className={`col-4 ${styles.topicLevelItem}`}>
								<div className={styles.topicLevelItemName}>Test 9</div>
							</div>
							<div className={`col-4 ${styles.topicLevelItem}`}>
								<div className={styles.topicLevelItemName}>Test 10</div>
							</div>
							<div className={`col-4 ${styles.topicLevelItem}`}>
								<div className={styles.topicLevelItemName}>Test 11</div>
							</div>
						</div>
					</div>
					<SubTopic />
				</div>
				<div className="col-xxl-8 col-12 col-md-12">
					<div className={styles.questionView}>
						<div className="d-flex justify-content-center mb-2">
							<audio src="https://www.anhngumshoa.com/uploads/sound/dificult_1/difficult_13.mp3" controls={true}>
								<track kind="captions"></track>
							</audio>
						</div>
						{/* <div className={styles.questionImage}></div> */}
						<div className={styles.questionText}>1. Where most likely does the speaker work?</div>
						<div className={styles.quizChoices}>
							<div className={styles.quizChoicesItem}>
								<div>{correctResultIcon}</div>
								<div className={styles.quizChoicesItemContent}>(A) At a theater</div>
							</div>
							<div className={styles.quizChoicesItem}>
								<div>{incorrectResultIcon}</div>
								<div className={styles.quizChoicesItemContent}>(B) At a car dealership</div>
							</div>
							<div className={styles.quizChoicesItem}>
								<div>{answerSelectIcon}</div>
								<div className={styles.quizChoicesItemContent}>(C) At a retail store</div>
							</div>
							<div className={styles.quizChoicesItem}>
								<div>{answerSelectIcon}</div>
								<div className={styles.quizChoicesItemContent}>(C) At a library</div>
							</div>
						</div>
						<div className={styles.questionText}>2. What is the listener asked to double-check?</div>
						<div className={styles.quizChoices}>
							<div className={styles.quizChoicesItem}>
								<div>{correctResultIcon}</div>
								<div className={styles.quizChoicesItemContent}>(A) Accurate prices</div>
							</div>
							<div className={styles.quizChoicesItem}>
								<div>{incorrectResultIcon}</div>
								<div className={styles.quizChoicesItemContent}>(B) Sales figures</div>
							</div>
							<div className={styles.quizChoicesItem}>
								<div>{answerSelectIcon}</div>
								<div className={styles.quizChoicesItemContent}>(C) Business hours</div>
							</div>
							<div className={styles.quizChoicesItem}>
								<div>{answerSelectIcon}</div>
								<div className={styles.quizChoicesItemContent}>(C) Name tags</div>
							</div>
						</div>
						<div className={styles.questionText}>3. What is the listener asked to double-check?</div>
						<div className={styles.quizChoices}>
							<div className={styles.quizChoicesItem}>
								<div>{correctResultIcon}</div>
								<div className={styles.quizChoicesItemContent}>(A) Accurate prices</div>
							</div>
							<div className={styles.quizChoicesItem}>
								<div>{incorrectResultIcon}</div>
								<div className={styles.quizChoicesItemContent}>(B) Sales figures</div>
							</div>
							<div className={styles.quizChoicesItem}>
								<div>{answerSelectIcon}</div>
								<div className={styles.quizChoicesItemContent}>(C) Business hours</div>
							</div>
							<div className={styles.quizChoicesItem}>
								<div>{answerSelectIcon}</div>
								<div className={styles.quizChoicesItemContent}>(C) Name tags</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PartThreeDetailBody;