import React from 'react';
import './Footer.css';
import SocialIcons from '../SocialIcons/SocialIcons';

function Footer() {
  return (
    <div className="footer">
      <div className="App-container-header title">
        <h1 className="title">Thanks!</h1>
      </div>

      <div className="fotter-content">
        <SocialIcons />{' '}
      </div>
    </div>
  );
}

export default Footer;
