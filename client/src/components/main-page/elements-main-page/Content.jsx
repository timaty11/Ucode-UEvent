import React from 'react';

import Sidebar from './elements-content/Sidebar.jsx';
import EventElement from './elements-content/EventElement.jsx';
import Spinner from '../../common/Spinner.jsx';

const Content = ({ data }) => {
  const [events, setEvents] = React.useState(data);
  const [isLoading, setLoading] = React.useState(false);
  console.log(data);

    return (
    <>
      <Sidebar setData={setEvents} setLoading={setLoading}/>

      {isLoading ? <Spinner /> : <div className="container m-auto flex flex-wrap overflow-hidden justify-between ">
        {events.data.values.map((event) => (
          <EventElement key={event.id} event={event} />
        ))}
      </div>}
    </>
  );
};

export default Content;
