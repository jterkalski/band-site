import React from 'react';
import MusicCard from './MusicCard';

const MusicCards = () => {
  return (
    <div className="music-cards">
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
      spotify: '',
      youtube: '',
      appleMusic: '',
      tidal: '',
    },
  },
  {
    id: 2,
    title: 'Niesamowita Wilgoć',
    socialLinks: {
      spotify: '',
      youtube: '',
      appleMusic: '',
      tidal: '',
    },
  },
  {
    id: 1,
    title: 'Whaling',
    socialLinks: {
      spotify: '',
      youtube: '',
      appleMusic: '',
      tidal: '',
    },
  },
];

export default MusicCards;
