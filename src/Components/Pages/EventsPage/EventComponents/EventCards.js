import React from 'react';
import styles from '../Events.module.scss';
import EventCard from './EventCard';

const EventCards = () => {
    return (
        <div className={styles.eventCards}>
            {events.map((e) => (
                <EventCard event={e} key={e.id} />
            ))}
        </div>
    );
};

const events = [
    {
        id: 4,
        date: 'FRI, 1 OCT 2021', // to UTC string (globalny czas z bazy)
        name: '8 urodziny HUTY METALU',
        city: 'Kraków',
        place: 'Single Scena Music Bar',
        artists: ['AMAYB', 'Snakebyte'],
    },
    {
        id: 3,
        date: 'FRI, 27 DEC 2019',
        name: 'Świąteczne granko Fungy x Taleia',
        city: 'Kraków',
        place: 'PIEC Art acoustic JAZZ club ',
        artists: ['Taleia'],
    },
    {
        id: 2,
        date: 'SAT, 30 NOV 2019',
        name: 'Studencki Festiwal Andrzejkowy',
        city: 'Kraków',
        place: 'Klub Kornet',
        artists: ['Out Of The Blues', 'Krzysztof Rollauer i Chlorki'],
    },
    {
        id: 1,
        date: 'FRI, 12 JUL 2019',
        name: 'Fungy & Hot Streak live in Kornet',
        city: 'Kraków',
        place: 'Klub Kornet',
        artists: ['Hot Streak'],
    },
];

export default EventCards;
