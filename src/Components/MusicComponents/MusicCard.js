import React from 'react';
import '../Pages/Music.scss';
import spotifyIcon from '../../icons/spotify-icon.svg';
import youtubeIcon from '../../icons/youtube-icon.svg';
import appleMusicIcon from '../../icons/apple-music-icon.svg';
import tidalIcon from '../../icons/tidal-icon.svg';

const MusicCard = ({ song }) => {
  return (
    <div className="music-card" style={song.id === 1 ? { border: 'none' } : {}}>
      <div className="music-title">{song.title}</div>
      <div className="social-links">
        <a href={song.socialLinks.spotify} target="_blank" rel="noopener noreferrer">
          <img className="social-media-icon" src={spotifyIcon} alt="Spotify icon" />
        </a>
        <a href={song.socialLinks.youtube} target="_blank" rel="noopener noreferrer">
          <img className="social-media-icon" src={youtubeIcon} alt="Youtube icon" />
        </a>
        <a href={song.socialLinks.appleMusic} target="_blank" rel="noopener noreferrer">
          <img className="social-media-icon" src={appleMusicIcon} alt="Apple music icon" />
        </a>
        <a href={song.socialLinks.tidal} target="_blank" rel="noopener noreferrer">
          <img className="social-media-icon" src={tidalIcon} alt="Tidal icon" />
        </a>
      </div>
    </div>
  );
};

export default MusicCard;
