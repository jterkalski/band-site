import React from 'react';
import MusicCard from './MusicCard';
import styles from '../Music.module.scss';

const MusicCards = () => {
    return (
        <div className={styles.musicCards}>
            {songs.map((song) => (
                <MusicCard song={song} key={song.id} />
            ))}
        </div>
    );
};

const songs = [
    {
        id: 3,
        title: 'Pustynny',
        socialLinks: {
            spotify: 'https://open.spotify.com/track/0zCWmhJIFKsCyftnD2RNbm?si=0fd3948f7e8a4097',
            youtube: 'https://youtu.be/YcWJBDf0nf0',
            appleMusic: 'https://music.apple.com/pl/album/pustynny/1576231211?i=1576231215',
            tidal: 'https://tidal.com/browse/track/190689594',
        },
    },
    {
        id: 2,
        title: 'Niesamowita Wilgoć',
        socialLinks: {
            spotify: 'https://open.spotify.com/track/4JU1WDgDnmFZxBUzThaDm1?si=9cdace865e4144de',
            youtube: 'https://youtu.be/TinQJtPcLEs',
            appleMusic: 'https://music.apple.com/pl/album/niesamowita-wilgo%C4%87/1576231729?i=1576231896',
            tidal: 'https://tidal.com/browse/track/190689545',
        },
    },
    {
        id: 1,
        title: 'Whaling',
        socialLinks: {
            spotify: 'https://open.spotify.com/track/4yZuBfFk7RJIuEYnvAO86m?si=b5f66348e9544eee',
            youtube: 'https://youtu.be/klLGTDuSTt8',
            appleMusic: 'https://music.apple.com/pl/album/whaling/1576231905?i=1576231908',
            tidal: 'https://tidal.com/browse/track/190689559',
        },
    },
];

export default MusicCards;
