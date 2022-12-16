import { QuestionPartOneType } from '@/models/question';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import useTrans from '../../hooks/useTrans';
import { angleRightIcon, angleRightWhiteIcon, answerSelectIcon, correctResultIcon, incorrectResultIcon, restartIcon } from '../../public/icons';
import styles from '../../styles/components/templates/PartOneDetailBody.module.scss';
import CustomModal from '../organisms/CustomModal';
import SubTopic from '../organisms/SubTopic';

type PropType = {
	questionList: QuestionPartOneType[];
	setQuestionList: Dispatch<SetStateAction<QuestionPartOneType[]>>
};

const PartOneDetailBody: NextPage<PropType> = (props) => {
	const { questionList, setQuestionList } = props;
	const trans = useTrans();
	const router = useRouter();
	const { id } = router.query;
	const [currentQuestion, setCurrentQuestion] = useState<QuestionPartOneType | undefined>(questionList[0]);
	const [isShowExplanation, setIsShowExplanation] = useState<boolean>(true);
	const [numberSelectedAnswer, setNumberSelectedAnswer] = useState<number | undefined>(-1);
	const [totalCorrectAnswers, setTotalCorrectAnswers] = useState<number>(0);
	const [totalIncorrectAnswers, setTotalIncorrectAnswers] = useState<number>(0);
	const [showModal, setShowModal] = useState<boolean>(false);

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
		if (numberSelectedAnswer === -1) {
			return <div>{answerSelectIcon}</div>;
		} else if ((numberSelectedAnswer === currentQuestion?.rightAnswer && numberSelectedAnswer === index) || currentQuestion?.rightAnswer === index) {
			return <div>{correctResultIcon}</div>;
		} else if (numberSelectedAnswer === index) {
			return <div>{incorrectResultIcon}</div>;
		} else {
			return <div>{answerSelectIcon}</div>;
		}
	};

	const handleSelectedAnswer = ( index: number) => {
		if (numberSelectedAnswer !== -1) return;
		setNumberSelectedAnswer(currentQuestion?.selectedAnswer !== -1 ? currentQuestion?.selectedAnswer : index);
		setQuestionList(questionList.map(val => {
			if (val.id === currentQuestion?.id) {
				return { ...val, selectedAnswer: index };
			}
			return val;
		}));
	};

	const handleSelectedQuestion = (idQuestion: number) => {
		setIsShowExplanation(true);
		setNumberSelectedAnswer(questionList.find((question: QuestionPartOneType) => question.id === idQuestion)?.selectedAnswer);
		setCurrentQuestion(questionList.find((question: QuestionPartOneType) => question.id === idQuestion));
	};

	const handleNextQuestion = () => {
		questionList.find((question: QuestionPartOneType, index) => {
			if (question.id === currentQuestion?.id) {
				setCurrentQuestion(questionList.find((_, ind) => ind === index+1));
			}
		});
	};

	const handleRestartExam = () => {
		setShowModal(false);
		setQuestionList(questionList.map(val => {
			return { ...val, selectedAnswer: -1 };
		}));
		setCurrentQuestion(questionList[0]);
		setNumberSelectedAnswer(-1);
	};

	useEffect(() => {
		const {totalCorrect, totalIncorrect} = questionList.reduce(
			(pre, cur) => {
				if (cur.rightAnswer === cur.selectedAnswer) {
					pre.totalCorrect++;
					return pre;
				}
				if (cur.rightAnswer !== cur.selectedAnswer && cur.selectedAnswer !== -1) {
					pre.totalIncorrect++;
					return pre;
				}
				return pre;
			},
			{
				totalCorrect: 0,
				totalIncorrect: 0,
			},
		);
		setTotalCorrectAnswers(totalCorrect);
		setTotalIncorrectAnswers(totalIncorrect);

	}, [questionList]);

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
									{questionList.map((item, index) => {
										return (
											<div
												className={`${styles.questionItem} ${item?.selectedAnswer !== -1 && ((item?.rightAnswer === item?.selectedAnswer) ? styles.correct : styles.incorrect)} ${currentQuestion?.id === item.id && styles.itemCurrent}`}
												key={item.id}
												onClick={() => handleSelectedQuestion(item.id)}
												role="presentation"
											>{index + 1}</div>
										);
									})}
								</div>
							</div>
							<div className={styles.questionsStat}>
								<div className={styles.questionsStatItem}>
									<div className={styles.greenSquare} />
									<div className={styles.questionsStatItemText}>{totalCorrectAnswers}/6 Correct</div>
								</div>
								<div className={styles.questionsStatItem}>
									<div className={styles.redSquare} />
									<div className={styles.questionsStatItemText}>{totalIncorrectAnswers}/6 Incorrect</div>
								</div>
							</div>
						</div>
						<div className={styles.questionPaletteFooter} onClick={() => setShowModal(true)} role="presentation">
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
						<div className={styles.questionImage} style={{ backgroundImage: `url(${currentQuestion?.image})` }} />
						<div className={styles.quizChoices}>
							<div className={styles.quizChoicesItem} onClick={() => handleSelectedAnswer(0)} role="presentation">
								{handleResultIcon(0)}
								<div className={`${styles.quizChoicesItemContent} ${numberSelectedAnswer === 0 && numberSelectedAnswer !== currentQuestion?.rightAnswer ? styles.incorrect : ''}`}>(A)</div>
							</div>
							{currentQuestion?.rightAnswer === 0 && numberSelectedAnswer !== -1 && (
								handleShowExplanationElement()
							)}
							<div className={styles.quizChoicesItem} onClick={() => handleSelectedAnswer(1)} role="presentation">
								{handleResultIcon(1)}
								<div className={`${styles.quizChoicesItemContent} ${numberSelectedAnswer === 1 && numberSelectedAnswer !== currentQuestion?.rightAnswer ? styles.incorrect : ''}`}>(B)</div>
							</div>
							{currentQuestion?.rightAnswer === 1 && numberSelectedAnswer !== -1 && (
								handleShowExplanationElement()
							)}
							<div className={styles.quizChoicesItem} onClick={() => handleSelectedAnswer(2)} role="presentation">
								{handleResultIcon(2)}
								<div className={`${styles.quizChoicesItemContent} ${numberSelectedAnswer === 2 && numberSelectedAnswer !== currentQuestion?.rightAnswer ? styles.incorrect : ''}`}>(C)</div>
							</div>
							{currentQuestion?.rightAnswer === 2 && numberSelectedAnswer !== -1 && (
								handleShowExplanationElement()
							)}
							<div className={styles.quizChoicesItem} onClick={() => handleSelectedAnswer(3)} role="presentation">
								{handleResultIcon(3)}
								<div className={`${styles.quizChoicesItemContent} ${numberSelectedAnswer === 3 && numberSelectedAnswer !== currentQuestion?.rightAnswer ? styles.incorrect : ''}`}>(D)</div>
							</div>
							{currentQuestion?.rightAnswer === 3 && numberSelectedAnswer !== -1 && (
								handleShowExplanationElement()
							)}
						</div>
					</div>
					<div className={styles.btnNext}>
						<div className={styles.text} onClick={() => handleNextQuestion()} role="presentation">Next</div>
						<div className="d-flex">{angleRightWhiteIcon}</div>
					</div>
				</div>

				<CustomModal title="Restart" show={showModal} setShow={setShowModal}>
					<div className="text-align-justify mb-3">Do you want to restart your test? Your test progress won`t be saved.</div>
					<div className={styles.action}>
						<div className={styles.btnCancel} onClick={() => setShowModal(false)} role="presentation">Cancel</div>
						<div className={styles.btnRestart} onClick={() => handleRestartExam()} role="presentation">Restart</div>
					</div>
				</CustomModal>
			</div>
		</>
	);
};

export default PartOneDetailBody;
