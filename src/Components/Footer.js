import React from 'react';
import './style.scss';

const Footer = () => {
  return (
    <div className="footer">
      <a href="https://open.spotify.com/artist/3W9KJm1EVanHDVh80YkLQS" target="_blank" rel="noopener noreferrer">
        <img className="footer-item" src={process.env.PUBLIC_URL + './images/spotify-icon.svg'} alt="spotify-icon" />
      </a>
      <a href="https://www.instagram.com/fungy_band/" target="_blank" rel="noopener noreferrer">
        <img className="footer-item" src="./images/instagram-icon.svg" href="" alt="instagram-icon" />
      </a>
      <a href="https://www.facebook.com/fungy.band" target="_blank" rel="noopener noreferrer">
        <img className="footer-item" src="./images/facebook-icon.svg" alt="facebook-icon" />
      </a>
      <a href="https://www.youtube.com/channel/UCXyQaRr4I7wIwtRSrFdyDnA" target="_blank" rel="noopener noreferrer">
        <img className="footer-item" src="./images/youtube-icon.svg" alt="youtube-icon" />
      </a>
    </div>
  );
};

// noopener - prevents access to the window opener
// noreferer - removes information from the header after clicking (so it is impossible to detect where the user came from)

export default Footer;
