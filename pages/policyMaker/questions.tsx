import { QuestionType } from '@/models/question';
import { ReactElement, useEffect, useState } from 'react';
import { questionManagementAPI } from '../../api-clients/question';
import BreadCrumb from '../../components/molecules/BreadCrumb';
import CustomContainer from '../../components/molecules/CustomContainer';
import QuestionBody from '../../components/templates/QuestionBody';
import useTrans from '../../hooks/useTrans';
import Layout from '../../layouts';
import { NextPageWithLayout } from '../_app';

const PAGE_NUMBER = 1;
const PAGE_SIZE = 100;

const Question: NextPageWithLayout = () => {
  const trans = useTrans();
  const [questions, setQuestions] = useState<QuestionType[] | null>(null);

  useEffect(() => {
    questionManagementAPI.getAll(PAGE_NUMBER, PAGE_SIZE).then((res) => {
      setQuestions(res.data);
    }).catch((err) => console.log(err));
  }, []);

  return (
    <CustomContainer size="large">
      <BreadCrumb firstLayer={trans.policy.title} firstPath={'/home?isScrollToPolicySection=true'} lastLayer={trans.policy.question} />
      {questions && <QuestionBody questions={questions} />}
    </CustomContainer>
  );
};

Question.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Question;
