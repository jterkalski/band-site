import React from 'react';
import './style.scss';

const Footer = () => {
  return (
    <div className="footer">
      <a href="https://open.spotify.com/artist/3W9KJm1EVanHDVh80YkLQS" target="_blank">
        <img className="footer-item" src="./images/spotify-logo.svg" href="" alt="spotify-logo" />
      </a>
      <a href="https://www.instagram.com/fungy_band/" target="_blank">
        <img className="footer-item" src="./images/instagram-logo.svg" href="" alt="instagram-logo" />
      </a>
      <a href="https://www.facebook.com/fungy.band" target="_blank">
        <img className="footer-item" src="./images/facebook-logo.svg" alt="facebook-logo" />
      </a>
    </div>
  );
};

export default Footer;
