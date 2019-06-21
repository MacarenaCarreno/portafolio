import React from 'react';
import { Link } from 'react-router-dom';
import './SideNav.css';

const SideNav = props => {
  let sideNavClasses = 'SideNav_navigation';

  if (props.show) {
    sideNavClasses = 'SideNav_navigation open';
  }
  return (
    <nav className={sideNavClasses}>
      <ul>
        <li>
          <Link to="/about" onClick={props.navToggleClick}>
            About
          </Link>
        </li>

        <li>
          <Link to="/works" onClick={props.navToggleClick}>
            Works
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
