import React from 'react';

const NavItem = ({ source, title }) => {
  return (
    <div className="nav-item">
      <a href={source}>{title}</a>
    </div>
  );
};

export default NavItem;
