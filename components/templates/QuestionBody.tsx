import { QuestionType } from '@/models/question';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useTrans from '../../hooks/useTrans';
import { angleDownIcon, angleRightIcon, questionIcon } from '../../public/icons';
import styles from '../../styles/components/templates/QuestionBody.module.scss';
import BackButton from '../atoms/buttons/BackButton';

type PropTypes = {
  questions: QuestionType[],
};

const QuestionBody: NextPage<PropTypes> = (props) => {
  const { questions } = props;
  const router = useRouter();
  const trans = useTrans();
  const [currentQuestion, setCurrentQuestion] = useState<number | null>(null);

  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>{trans.policy.question}{questionIcon}</h4>
      <div className={styles.questionArea}>
        {(questions || []).map((question, index) => (
          <div
            key={question.id}
            className={styles.question}
            onClick={() => setCurrentQuestion(currentQuestion === index ? null : index)}
            onKeyDown={() => setCurrentQuestion(currentQuestion === index ? null : index)}
            role="presentation"
          >
            <h5>{question.question}{currentQuestion === index ? angleDownIcon : angleRightIcon}</h5>
            {currentQuestion === index && (
              <p className={styles.answer}>{question.answer}</p>
            )}
          </div>
        ))}
      </div>
      <div className="mt-5 pt-1">
        <BackButton content={trans.back} onClick={() => router.push({ pathname: '/home', query: { isScrollToPolicySection: 'true' } }, undefined, { scroll: false })} />
      </div>
    </div>
  );
};

export default QuestionBody;
