import { EventTypes } from '@/models/event';
import { useRouter } from 'next/router';
import { ReactElement, useEffect, useState } from 'react';
import { eventApiManagement } from '../../../api-clients/events';
import BreadCrumb from '../../../components/molecules/BreadCrumb';
import CustomContainer from '../../../components/molecules/CustomContainer';
import CustomLoading from '../../../components/molecules/CustomLoading';
import MediaEventBodyDetail from '../../../components/templates/MediaEventBodyDetail';
import useTrans from '../../../hooks/useTrans';
import Layout from '../../../layouts';
import { NextPageWithLayout } from '../../_app';
import CustomHead from '../../../components/atoms/headers/CustomHead';
import PartOneDetailBody from '../../../components/templates/PartOneDetailBody';
import { QuestionPartOneType } from '@/models/question';

const PartOneDetail: NextPageWithLayout = (props: any) => {
	const router = useRouter();
	const { id, page } = router.query;
	const trans = useTrans();
	const [questionList, setQuestionList] = useState<QuestionPartOneType[]>([
		{
			id: 1,
			mp3Link: 'https://www.anhngumshoa.com/uploads/sound/dificult_1/difficult_13.mp3',
			image: 'string',
			answer: ['There are some tables and chairs outdoors', 'There are some people sitting at the tables.', 'There are plastic umbrellas on the tables.', 'There are many flowers in the garden.'],
			rightAnswer: 0,
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

PartOneDetail.getLayout = function getLayout(page: ReactElement) {
	return (
		<Layout>
			{page}
		</Layout>
	);
};

export default PartOneDetail;