import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import logo from '../icons/logo.svg';

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="band-logo" />
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
