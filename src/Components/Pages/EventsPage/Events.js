import React from 'react';
import styles from './Events.module.scss';
import EventCards from './EventComponents/EventCards';

const Events = () => {
    return (
        <div className={styles.eventsPage}>
            <EventCards />
        </div>
    );
};

export default Events;
