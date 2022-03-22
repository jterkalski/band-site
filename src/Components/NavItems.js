import React from 'react';
import { Link } from 'react-router-dom';

const NavItems = () => {
  return (
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
  );
};

export default NavItems;
