import { QuestionPartOneType } from '@/models/question';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useTrans from '../../hooks/useTrans';
import { angleRightIcon, answerSelectIcon, correctResultIcon, incorrectResultIcon, restartIcon } from '../../public/icons';
import styles from '../../styles/components/templates/PartOneDetailBody.module.scss';
import SubTopic from '../organisms/SubTopic';

type PropType = {
	questionList: QuestionPartOneType[];
};

const PartOneDetailBody: NextPage<PropType> = (props) => {
	const { questionList } = props;
	const trans = useTrans();
	const router = useRouter();
	const { id } = router.query;
	const [currentQuestion, setCurrentQuestion] = useState(questionList.find((question: QuestionPartOneType) => question.id === +(id as string)));
	const [isShowExplanation, setIsShowExplanation] = useState<boolean>(true);
	const [numberSelectedAnswer, setNumberSelectedAnswer] = useState<number | null>(null);
	const [isReadLess, setIsReadLess] = useState<boolean>(false);
	const [idSeeMore, setIdSeeMore] = useState<number | null>(null);

	const handleSeeMore = (isSeeMore: boolean, idPost: number) => {
		setIsReadLess(isSeeMore);
		setIdSeeMore(idPost);
	};

	const handleShowExplanationElement = () => {
		const handleAnswerElement = (answer: string, index: number) => {
			switch (index) {
				case 0:
					return <div className={currentQuestion?.rightAnswer === index ? styles.boldText : ''}>(A) {answer}</div>;
				case 1:
					return <div className={currentQuestion?.rightAnswer === index ? styles.boldText : ''}>(B) {answer}</div>;
				case 2:
					return <div className={currentQuestion?.rightAnswer === index ? styles.boldText : ''}>(C) {answer}</div>;
				default:
					return <div className={currentQuestion?.rightAnswer === index ? styles.boldText : ''}>(D) {answer}</div>;
			}
		};
		return (
			<div className={styles.quizExplanation}>
				<div className={styles.explanationBtn} onClick={() => setIsShowExplanation(!isShowExplanation)} role="presentation">
					{isShowExplanation ? "Hide Explanation" : "Show Explanation"}
				</div>
				{isShowExplanation && (
					<div className={styles.explanationContent}>
						<div className={styles.boldText}>Transcript: </div>
						{currentQuestion?.answer.map((answer, index) => (
							handleAnswerElement(answer, index)
						))}
					</div>
				)}
			</div>
		);
	};

	const handleResultIcon = (index: number) => {
		if (!numberSelectedAnswer) return <div>{answerSelectIcon}</div>;
		console.log(numberSelectedAnswer, index, 'number');
		// if (currentQuestion?.rightAnswer === numberSelectedAnswer && index === currentQuestion?.rightAnswer) {
		// 	return <div>{correctResultIcon}</div>;
		// } else if (index === currentQuestion?.rightAnswer ) {
		// 	return <div>{incorrectResultIcon}</div>;
		// } else return <div>{answerSelectIcon}</div>;
		if (numberSelectedAnswer === index) {
			if (index === currentQuestion?.rightAnswer) {
				return <div>{correctResultIcon}</div>;
			} else {
				return <div>{incorrectResultIcon}</div>;
			}
		} else {
			return <div>{answerSelectIcon}</div>;
		}
	};

	return (
		<>
			<h2 className={styles.titleH2}>PART 1: PHOTOS</h2>
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
						<div className={styles.questionImage}></div>
						<div className={styles.quizChoices}>
							<div className={styles.quizChoicesItem} onClick={() => setNumberSelectedAnswer(0)} role="presentation">
								{handleResultIcon(0)}
								<div className={styles.quizChoicesItemContent}>(A)</div>
							</div>
							{currentQuestion?.rightAnswer === 0 && numberSelectedAnswer && (
								handleShowExplanationElement()
							)}
							<div className={styles.quizChoicesItem} onClick={() => setNumberSelectedAnswer(1)} role="presentation">
								{handleResultIcon(1)}
								<div className={styles.quizChoicesItemContent}>(B)</div>
							</div>
							{currentQuestion?.rightAnswer === 1 && numberSelectedAnswer && (
								handleShowExplanationElement()
							)}
							<div className={styles.quizChoicesItem} onClick={() => setNumberSelectedAnswer(2)} role="presentation">
								{handleResultIcon(2)}
								<div className={styles.quizChoicesItemContent}>(C)</div>
							</div>
							{currentQuestion?.rightAnswer === 2 && numberSelectedAnswer && (
								handleShowExplanationElement()
							)}
							<div className={styles.quizChoicesItem} onClick={() => setNumberSelectedAnswer(3)} role="presentation">
								{handleResultIcon(3)}
								<div className={styles.quizChoicesItemContent}>(D)</div>
							</div>
							{currentQuestion?.rightAnswer === 3 && numberSelectedAnswer && (
								handleShowExplanationElement()
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PartOneDetailBody;