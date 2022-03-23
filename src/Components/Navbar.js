import React from 'react';
import NavItems from './NavItems';
import './style.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src="./images/logo.svg" alt="band-logo" />
      <NavItems />
    </div>
  );
};

export default Navbar;
