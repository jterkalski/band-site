import React from 'react';
import spotifyIcon from '../../../../icons/spotify-icon.svg';
import youtubeIcon from '../../../../icons/youtube-icon.svg';
import appleMusicIcon from '../../../../icons/apple-music-icon.svg';
import tidalIcon from '../../../../icons/tidal-icon.svg';
import styles from '../Music.module.scss';

const MusicCard = ({ song }) => {
    return (
        <div className={styles.musicCard} style={song.id === 1 ? { border: 'none' } : {}}>
            <div className={styles.musicTitle}>{song.title}</div>
            <div className={styles.socialLinks}>
                <a href={song.socialLinks.spotify} target="_blank" rel="noopener noreferrer">
                    <img className={styles.socialMediaIcon} src={spotifyIcon} alt="Spotify icon" />
                </a>
                <a href={song.socialLinks.youtube} target="_blank" rel="noopener noreferrer">
                    <img className={styles.socialMediaIcon} src={youtubeIcon} alt="Youtube icon" />
                </a>
                <a href={song.socialLinks.appleMusic} target="_blank" rel="noopener noreferrer">
                    <img className={styles.socialMediaIcon} src={appleMusicIcon} alt="Apple music icon" />
                </a>
                <a href={song.socialLinks.tidal} target="_blank" rel="noopener noreferrer">
                    <img className={styles.socialMediaIcon} src={tidalIcon} alt="Tidal icon" />
                </a>
            </div>
        </div>
    );
};

export default MusicCard;
