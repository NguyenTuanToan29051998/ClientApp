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

const EventDetail: NextPageWithLayout = (props: any) => {
  const router = useRouter();
  const { id, page } = router.query;
  const trans = useTrans();
  const [event, setEvent] = useState<EventTypes | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!id) return;
    eventApiManagement.getEventDetail(id as string).then((res) => {
      setEvent(res.data);
      setLoading(false);
    });
  }, [id]);

  return (
    <CustomContainer size="large">
	  <CustomHead title={event?.title || ''} description={event?.content} img={event?.thumbnail}  />
      {page ? (
        <BreadCrumb
          firstLayer={`${page}`}
          lastLayer={event?.title || ''}
          firstPath={"/home"}
        />
      ) : (
        <BreadCrumb
          firstLayer={trans.media.event}
          lastLayer={event?.title || ''}
          firstPath={"/media/events"}
        />
      )}
      {loading && <CustomLoading />}
      {event && !loading && <MediaEventBodyDetail event={event} />}
    </CustomContainer>
  );
};

EventDetail.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default EventDetail;
