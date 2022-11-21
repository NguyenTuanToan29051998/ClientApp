import type { NextPageWithLayout } from '../../_app';
import { ReactElement, useEffect, useState } from 'react';
import Layout from '../../../layouts';
import MediaEventBody from '../../../components/templates/MediaEventBody';
import CustomContainer from '../../../components/molecules/CustomContainer';
import { MediaType } from '@/models/media';
import { mediaApiManagement } from '../../../api-clients/media';
import { useRouter } from 'next/router';
import CustomLoading from '../../../components/molecules/CustomLoading';

const MediaEvent: NextPageWithLayout = () => {
  const router = useRouter();
  const { hashtag } = router.query;
  const [events, setEvents] = useState<MediaType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const pageNumber = 1;
    const pageSize = 10;
    if (hashtag) {
      mediaApiManagement.getEventByHashtag(hashtag.toString(), pageNumber, pageSize).then((res) => {
        setEvents(res.data);
        setLoading(false);
      }).catch((err) => console.log(err));
    } else {
      mediaApiManagement.getEventList(pageNumber, pageSize).then((res) => {
        setEvents(res.data);
        setLoading(false);
      }).catch((err) => console.log(err));
    }
  }, [hashtag]);

  return (
    <CustomContainer size="large">
      {loading && <CustomLoading />}
      {!loading && <MediaEventBody posts={events} />}
    </CustomContainer>
  );
};

MediaEvent.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default MediaEvent;
