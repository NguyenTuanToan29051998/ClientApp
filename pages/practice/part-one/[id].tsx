import { useRouter } from 'next/router';
import { ReactElement, useEffect, useState } from 'react';
import BreadCrumb from '../../../components/molecules/BreadCrumb';
import CustomContainer from '../../../components/molecules/CustomContainer';
import CustomLoading from '../../../components/molecules/CustomLoading';
import useTrans from '../../../hooks/useTrans';
import Layout from '../../../layouts';
import { NextPageWithLayout } from '../../_app';
import CustomHead from '../../../components/atoms/headers/CustomHead';
import { QuestionPartOneType } from '@/models/question';
import PartOneDetailBody from '../../../components/templates/PartOneDetailBody';

const PartTwoDetail: NextPageWithLayout = (props: any) => {
	const router = useRouter();
	const { id, page } = router.query;
	const trans = useTrans();
	const [questionList, setQuestionList] = useState<QuestionPartOneType[]>([
		{
			id: 1,
			mp3Link: 'https://www.anhngumshoa.com/uploads/sound/dificult_1/difficult_13.mp3',
			image: 'string',
			answer: ['The woman is cooking some bacon.', 'The woman is baking a cake.', 'The woman is preparing for dinner.', 'The woman is frying some fish.'],
			rightAnswer: 1,
		}
	]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		if (!id) return;
		// eventApiManagement.getEventDetail(id as string).then((res) => {
		//   setEvent(res.data);
		//   setLoading(false);
		// });
	}, [id]);

	return (
		<CustomContainer size="large">
			{/* {loading && <CustomLoading />} */}
			<PartOneDetailBody questionList={questionList} />
		</CustomContainer>
	);
};

PartTwoDetail.getLayout = function getLayout(page: ReactElement) {
	return (
		<Layout>
			{page}
		</Layout>
	);
};

export default PartTwoDetail;
