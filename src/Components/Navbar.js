import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src="./images/logo.svg" alt="band-logo" />
      <div className="nav-items">
        <Link className="link" to="events">
          Events
        </Link>
        <Link className="link" to="music">
          Music
        </Link>
        <Link className="link" to="community">
          Community
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
