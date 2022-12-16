import { QuestionPartOneType } from '@/models/question';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import useTrans from '../../hooks/useTrans';
import { angleRightIcon, answerSelectIcon, correctResultIcon, incorrectResultIcon, restartIcon, clockIcon } from '../../public/icons';
import styles from '../../styles/components/templates/FullTestDetailBody.module.scss';
import SubTopic from '../organisms/SubTopic';

type PropType = {
	questionList: QuestionPartOneType[];
};

const FullTestDetailBody: NextPage<PropType> = (props) => {
	const { questionList } = props;
	const trans = useTrans();
	const [isReadLess, setIsReadLess] = useState<boolean>(false);
	const [idSeeMore, setIdSeeMore] = useState<number | null>(null);
	const [minutes, setMinutes] = useState<number>(60);
	const [seconds, setSeconds] = useState<number>(0);
	const [isStart, setIsStart] = useState<boolean>(false);

	const handleSeeMore = (isSeeMore: boolean, idPost: number) => {
		setIsReadLess(isSeeMore);
		setIdSeeMore(idPost);
	};

	useEffect(() => {
		let myInterval = setInterval(() => {
			if (seconds > 0) {
				setSeconds(seconds - 1);
			}
			if (seconds === 0) {
				if (minutes === 0) {
					clearInterval(myInterval);
				} else {
					setMinutes(minutes - 1);
					setSeconds(59);
				}
			}
		}, 1000);
		return () => {
			clearInterval(myInterval);
		};
	});

	return (
		<>
			<h2 className={styles.titleH2}>TEST 1</h2>
			<div className={styles.currentTopicLabel}>Test 1</div>
			<div className="row">
				<div className="col-xxl-4 col-12 col-md-12">
					<div className={styles.questionPalette}>
						<div className={styles.questionPaletteTitle}>Question Palette</div>
						<div className={styles.questionPaletteBody}>
							<div className={styles.questionsList}>
								<div className={styles.questionsListRow}>
									<div className={`${styles.questionItem} ${styles.incorrect}`}>1</div>
									<div className={`${styles.questionItem}`}>2</div>
									<div className={`${styles.questionItem} ${styles.incorrect}`}>3</div>
									<div className={styles.questionItem}>4</div>
									<div className={styles.questionItem}>5</div>
									<div className={styles.questionItem}>6</div>
									<div className={`${styles.questionItem}`}>7</div>
									<div className={`${styles.questionItem}`}>8</div>
									<div className={`${styles.questionItem}`}>9</div>
									<div className={styles.questionItem}>10</div>
									<div className={styles.questionItem}>11</div>
									<div className={styles.questionItem}>12</div>
									<div className={`${styles.questionItem}`}>13</div>
									<div className={`${styles.questionItem}`}>14</div>
									<div className={`${styles.questionItem}`}>15</div>
									<div className={styles.questionItem}>16</div>
									<div className={styles.questionItem}>17</div>
									<div className={styles.questionItem}>18</div>
									<div className={`${styles.questionItem}`}>19</div>
									<div className={`${styles.questionItem}`}>20</div>
									<div className={`${styles.questionItem}`}>21</div>
									<div className={styles.questionItem}>22</div>
									<div className={styles.questionItem}>23</div>
									<div className={styles.questionItem}>24</div>
								</div>
							</div>
						</div>
						<div className={styles.questionsProgress}>
							<div className={styles.progressbar} />
							<div className={styles.progressTitle}>0/200</div>
						</div>
						<div className={styles.questionPaletteFooter}>
							<div className={styles.btnRestart}>
								Submit
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
						<div className="d-flex align-items-center justify-content-center gap-3 mb-3">
							<div>{clockIcon}</div>
							<div className="d-flex">
								{minutes === 0 && seconds === 0 && isStart
									? null
									: <div className={styles.time}>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</div>
								}
							</div>
						</div>
						<div className="d-flex justify-content-center mb-2">
							<audio src="https://www.anhngumshoa.com/uploads/sound/dificult_1/difficult_13.mp3" controls={true}>
								<track kind="captions"></track>
							</audio>
						</div>
						<div className={styles.questionImage}></div>
						<div className={styles.quizChoices}>
							<div className={styles.quizChoicesItem}>
								<div>{correctResultIcon}</div>
								<div className={styles.quizChoicesItemContent}>(A)</div>
							</div>
							<div className={styles.quizChoicesItem}>
								<div>{incorrectResultIcon}</div>
								<div className={styles.quizChoicesItemContent}>(B)</div>
							</div>
							<div className={styles.quizChoicesItem}>
								<div>{answerSelectIcon}</div>
								<div className={styles.quizChoicesItemContent}>(C)</div>
							</div>
							<div className={styles.quizChoicesItem}>
								<div>{answerSelectIcon}</div>
								<div className={styles.quizChoicesItemContent}>(D)</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FullTestDetailBody;