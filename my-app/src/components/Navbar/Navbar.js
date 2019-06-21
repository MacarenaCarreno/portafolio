import React from 'react';
import { Link } from 'react-router-dom';
import ToggleButton from '../SideNav/ToggleButton';
import './Nav.css';
// import './css/Buttons.css';

const Navbar = props => (
  <header className="Nav_header">
    <nav className="Nav_navigation">
      <div className="Nav_ToogleButton">
        <ToggleButton click={props.navToggleClick} />
      </div>

      <div className="Nav-logo">
        <Link to="/">Macarena Carreno</Link>
      </div>

      <div className="spacer" />

      <div className="Nav_items">
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/works">Works</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Navbar;
