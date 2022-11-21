import { ReactElement } from 'react';
import EventBody from '../../components/templates/EventBody';
import Layout from '../../layouts';
import { NextPageWithLayout } from '../_app';

const Event: NextPageWithLayout = () => {

  return (
    <EventBody />
  );
};

Event.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default Event;
