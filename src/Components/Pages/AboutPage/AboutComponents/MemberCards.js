import React from 'react';
import styles from '../About.module.scss';
import MemberCard from './MemberCard';
import microphoneIcon from '../../../../icons/instruments/microphone-icon.svg';
import bassIcon from '../../../../icons/instruments/bass-icon.svg';
import guitarIcon from '../../../../icons/instruments/guitar-icon.svg';
import drumsIcon from '../../../../icons/instruments/drums-icon.svg';

const MemberCards = () => {
    return (
        <div className={styles.memberCards}>
            {members.map((m) => (
                <MemberCard member={m} icon={m.icon} />
            ))}
        </div>
    );
};

const members = [
    {
        id: 1,
        name: 'Michał Domagała',
        instrument: 'wokal',
        icon: microphoneIcon,
    },
    {
        id: 2,
        name: 'Michał Pałys',
        instrument: 'bas',
        icon: bassIcon,
    },
    {
        id: 3,
        name: 'Jakub Terkalski',
        instrument: 'gitara',
        icon: guitarIcon,
    },
    {
        id: 4,
        name: 'Mikołaj Sieńko',
        instrument: 'perkusja',
        icon: drumsIcon,
    },
];

export default MemberCards;
