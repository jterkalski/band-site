import React from 'react';
import NavItems from './NavbarComponents/NavItems';
import './style.scss';

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src="./images/logo.svg" alt="band-logo" />
      <NavItems />
    </div>
  );
};

export default Header;
