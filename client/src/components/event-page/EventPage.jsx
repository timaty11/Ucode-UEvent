import React from 'react';
import { useEvent } from '../../../hooks/events/useEvent.js';
import { useUserFavoriteEvent } from '../../../hooks/user/useUserFavoriteEvent.js';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEventTickets } from '../../../hooks/events/useEventTicket.js';

import Spinner from '../common/Spinner.jsx';
import EventDetailsHead from './event-details/EventDetailsHead.jsx';
import EventDetailsBody from './event-details/EventDetailsBody.jsx';
import RecommendSection from './recommendations/RecommendSection.jsx';
import CommentsSection from './comments/CommentsSection.jsx';
import Aside from './aside-menu/Aside.jsx';

import '../css/EventPage.css';
import '../css/event-card.css';
import { useUser } from '../../../hooks/user/useUser.js';

const EventPage = () => {
  const id = useParams()['id'];
  const [t, i18n] = useTranslation('eventPage');
  const { isLoading, event } = useEvent(id);
  const organizator = useUser(event?.user_id);
  const eventTickets = useEventTickets(id);
  const [edit, setEdit] = React.useState({})
  // const favoriteEvent = useUserFavoriteEvent();
  if (isLoading  || eventTickets.isLoading || organizator.isLoading) {
    return <Spinner />;
  }

  return (
    <div>          
      {/* <EventDetailsBody eventData={event} isFavorite={favoriteEvent.favorite.find((event) => event.id === id)}/> */}
      
      <div className="container  m-auto py-6 px-4 sm:p-6 md:py-10 md:px-8 dark:bg-dark-bg-900">
        <div className=" mb-9 dark:bg-dark-bg-800 rounded-lg">
          <div className=" px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg md:w-2/3">
              <EventDetailsHead edit={edit} setEdit={setEdit} eventData={event} />

            </div>
            <div className="md:mt-0 md:w-1/4 ">
              <Aside edit={edit} setEdit={setEdit} eventData={{...organizator.user, ...event}} ticketLeft={eventTickets.tickets}/>
            </div>
          </div>
          <RecommendSection event={event}/>
          <CommentsSection eventId={id} />
        </div>
      </div>
    </div>
  );
}

export default EventPage;
