import React from 'react';
import styles from './Music.module.scss';
import MusicCards from './MusicComponents/MusicCards';

const Music = () => {
    return (
        <div className={styles.musicPage}>
            <MusicCards />
        </div>
    );
};

export default Music;
