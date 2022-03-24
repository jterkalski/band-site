import React from 'react';
import '../Pages/Events.scss';
import EventCard from './EventCard';

const EventCards = () => {
  return (
    <div className="event-cards">
      {events.map((e) => (
        <EventCard event={e} />
      ))}
    </div>
  );
};

const events = [
  {
    id: 1,
    date: 'FRI, 1 OCT 2021', // to UTC string (globalny czas z bazy)
    name: '8 urodziny HUTY METALU!',
    city: 'Kraków, Poland',
    place: 'Single Scena Music Bar',
    // location: lat/long
  },
];

export default EventCards;
