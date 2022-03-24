import React from 'react';
import '../Pages/Events.scss';

const EventCard = ({ event }) => {
  return (
    <div className="event-card" style={event.id == 1 ? { border: 'none' } : {}}>
      <div className="event-details">
        <div style={{ fontSize: '18px' }}>{event.name}</div>
        <div style={{ fontSize: '14px' }}>with</div>
        <div>
          {event.artists.map((artist) =>
            event.artists.indexOf(artist) < event.artists.length - 1 ? `${artist} & ` : artist
          )}
        </div>
      </div>
      <div className="event-details">{event.date}</div>
      <div className="event-details">
        <div style={{ fontSize: '18px' }}>{event.city}</div>
        <div style={{ fontSize: '14px' }}>{event.place}</div>
      </div>
    </div>
  );
};

export default EventCard;
