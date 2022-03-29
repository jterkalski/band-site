import React from 'react';
import spotifyIcon from '../icons/spotify-icon.svg';
import instagramIcon from '../icons/instagram-icon.svg';
import facebookIcon from '../icons/facebook-icon.svg';
import youtubeIcon from '../icons/youtube-icon.svg';
import appleMusicIcon from '../icons/apple-music-icon.svg';
import tidalIcon from '../icons/tidal-icon.svg';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <a href="https://open.spotify.com/artist/3W9KJm1EVanHDVh80YkLQS" target="_blank" rel="noopener noreferrer">
                <img className={styles.footerItem} src={spotifyIcon} alt="Spotify icon" />
            </a>
            <a href="https://www.instagram.com/fungy_band/" target="_blank" rel="noopener noreferrer">
                <img className={styles.footerItem} src={instagramIcon} href="" alt="Instagram icon" />
            </a>
            <a href="https://www.facebook.com/fungy.band" target="_blank" rel="noopener noreferrer">
                <img className={styles.footerItem} src={facebookIcon} alt="Facebook icon" />
            </a>
            <a
                href="https://www.youtube.com/channel/UCXyQaRr4I7wIwtRSrFdyDnA"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img className={styles.footerItem} src={youtubeIcon} alt="Youtube icon" />
            </a>
            <a href="https://music.apple.com/pl/artist/fungy/1530002852" target="_blank" rel="noopener noreferrer">
                <img className={styles.footerItem} src={appleMusicIcon} alt="Apple Music icon" />
            </a>
            <a href="https://tidal.com/browse/artist/21139499" target="_blank" rel="noopener noreferrer">
                <img className={styles.footerItem} src={tidalIcon} alt="Tidal icon" />
            </a>
        </div>
    );
};

// noopener - prevents access to the window opener
// noreferer - removes information from the header after clicking (so it is impossible to detect where the user came from)

export default Footer;
