import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Card from '../molecules/Card';
import FlexCard from '../molecules/FlexCard';
import TransparentButton from '../atoms/buttons/TransparentButton';
import useTrans from '../../hooks/useTrans';
import SectionContainer from '../molecules/SectionContainer';
import { EventTypes } from '@/models/event';
import useFormat from '../../hooks/useFormat';
import styles from '../../styles/components/organisms/EventSection.module.scss';

const COUNT_MINI_CARD = 4;

type PropTypes = {
  events: EventTypes[],
};

const EventSection: FC<PropTypes> = (props) => {
  const { events } = props;
  const trans = useTrans();
  const router = useRouter();
  const { formatDate } = useFormat();
  const [hotEvent, setHotEvent] = useState<EventTypes | null>(null);
  const [eventValues, setEventValues] = useState<EventTypes[] | null>(null);

  useEffect(() => {
    const hotEventValue = events.find((event) => event.isHotEvent) || null;
    setHotEvent(hotEventValue);
    const eventList = [...events.filter((event) => !event.isHotEvent)];
    eventList.length = eventList.length > COUNT_MINI_CARD ? COUNT_MINI_CARD : eventList.length;
    setEventValues(eventList);
  }, [events]);

  return (
    <SectionContainer label={trans.home.event}>
      <div className={styles.cardArea}>
        {hotEvent && (
          <div
            className={!eventValues?.length ? `${styles.cardLeft} w-100` : styles.cardLeft}
            onClick={() => router.push({ pathname: `/media/events/${hotEvent?.id}`, query: { page: trans.homePage } })}
            onKeyDown={() => router.push({ pathname: `/media/events/${hotEvent?.id}`, query: { page: trans.homePage } })}
            role="presentation"
          >
            <Card
              titleSize="large"
              image={hotEvent?.thumbnail}
              title={hotEvent?.title}
              subTitle={hotEvent?.content}
              time={formatDate(hotEvent?.startDate || '')}
              isTruncase
              boxTime
            />
          </div>
        )}
        {eventValues && !!eventValues.length && (
          <div className={styles.cards}>
            {(eventValues || []).map((event) => (
              <div
                key={event.id}
                className={styles.card}
                onClick={() => router.push({ pathname: `/media/events/${event.id}`, query: { page: trans.homePage } })}
                onKeyDown={() => router.push({ pathname: `/media/events/${event.id}`, query: { page: trans.homePage } })}
                role="presentation"
              >
                <FlexCard
                  titleSize="small"
                  title={event.title}
                  image={event.thumbnail}
                  subTitle={''}
                  time={formatDate(event.startDate)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={styles.buttonArea}>
        <TransparentButton name={trans.home.seeMoreEvent} onClick={() => router.push({ pathname: '/media/events', query: { page: 'home' } })} isRouter />
      </div>
    </SectionContainer>
  );
};

export default EventSection;
