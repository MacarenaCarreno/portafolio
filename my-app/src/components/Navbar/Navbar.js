import React from 'react';
import { Link } from 'react-router-dom';
import ToggleButton from '../SideNav/ToggleButton';
import './Nav.css';
// import './css/Buttons.css';

import { FaLinkedin } from 'react-icons/fa';

const Navbar = props => {
  return (
    <header className="Nav_header">
      <nav className="Nav_navigation">
        <div className="Nav-logo">
          <i className="material-icons md-48">fingerprint</i>
          <Link to="/works">Macarena Carreno</Link>
        </div>

        <div className="Nav-spacer" />

        <div className="Nav_items">
          <ul>
            <li>
              <Link to="/works">Works</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li className="Icon">
              <a
                href="https://www.linkedin.com/in/mcarrenog/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />{' '}
              </a>
            </li>
          </ul>
        </div>

        <div className="Nav_ToogleButton">
          <ToggleButton click={props.navToggleClick} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
