import React from 'react';
import styles from '../Pages/Events.module.scss';

const EventCard = ({ event }) => {
    return (
        <div className={styles.eventCard} style={event.id === 1 ? { border: 'none' } : {}}>
            <div className={styles.eventDetails}>
                <div style={{ fontSize: '18px' }}>{event.name}</div>
                <div style={{ fontSize: '14px' }}>with</div>
                <div>
                    {event.artists.map((artist) =>
                        event.artists.indexOf(artist) < event.artists.length - 1 ? `${artist} & ` : artist
                    )}
                </div>
            </div>
            <div className={styles.eventDetails}>{event.date}</div>
            <div className={styles.eventDetails}>
                <div style={{ fontSize: '18px' }}>{event.city}</div>
                <div style={{ fontSize: '14px' }}>{event.place}</div>
            </div>
        </div>
    );
};

export default EventCard;
