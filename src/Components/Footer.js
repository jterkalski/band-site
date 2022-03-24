import React from 'react';
import spotifyIcon from '../icons/spotify-icon.svg';
import instagramIcon from '../icons/instagram-icon.svg';
import facebookIcon from '../icons/facebook-icon.svg';
import youtubeIcon from '../icons/youtube-icon.svg';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <a href="https://open.spotify.com/artist/3W9KJm1EVanHDVh80YkLQS" target="_blank" rel="noopener noreferrer">
        <img className="footer-item" src={spotifyIcon} alt="spotify-icon" />
      </a>
      <a href="https://www.instagram.com/fungy_band/" target="_blank" rel="noopener noreferrer">
        <img className="footer-item" src={instagramIcon} href="" alt="instagram-icon" />
      </a>
      <a href="https://www.facebook.com/fungy.band" target="_blank" rel="noopener noreferrer">
        <img className="footer-item" src={facebookIcon} alt="facebook-icon" />
      </a>
      <a href="https://www.youtube.com/channel/UCXyQaRr4I7wIwtRSrFdyDnA" target="_blank" rel="noopener noreferrer">
        <img className="footer-item" src={youtubeIcon} alt="youtube-icon" />
      </a>
    </div>
  );
};

// noopener - prevents access to the window opener
// noreferer - removes information from the header after clicking (so it is impossible to detect where the user came from)

export default Footer;
