import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

import { IoIosMail } from 'react-icons/io';

import './SocialIcons.css';

const SocialIcons = props => {
  return (
    <div className="title">
      <ul className="social-icons">
        <li>
          <a
            href="https://www.linkedin.com/in/mcarrenog/"
            target="_blank"
            rel="noopener noreferrer"
            alt="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </li>

        <li>
          <a
            href="https://github.com/MacarenaCarreno"
            target="_blank"
            rel="noopener noreferrer"
            alt="GitHub"
          >
            <FaGithub />
          </a>
        </li>

        <li>
          <a
            href=" https://instagram.com/macamaca72/"
            target="_blank"
            rel="noopener noreferrer"
            alt="Instagram"
          >
            <FaInstagram />{' '}
          </a>
        </li>
        <li>
          <a href="mailto:macarena.carreno@gmail.com">
            <IoIosMail />{' '}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialIcons;
