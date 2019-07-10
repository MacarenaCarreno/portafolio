import React from 'react';
import {
  DiJsBadge,
  DiBootstrap,
  DiGithubBadge,
  DiHeroku,
  DiHtml5,
  DiMaterializecss,
  DiNodejsSmall,
  DiPostgresql,
  DiReact,
  DiTrello,
  DiVisualstudio,
  DiNodejs,
  DiMysql,
} from 'react-icons/di';

import { IoIosCheckmark, IoMdBoat } from 'react-icons/io';
import { FaDatabase } from 'react-icons/fa';
import { MdStore, MdDevicesOther } from 'react-icons/md';

import './skills.css';

function Skills(params) {
  return (
    <div className="title">
      <ul className="social-icons skill">
        <li>
          <a href="#/about" rel="noopener noreferrer" alt="JavaScript">
            <DiJsBadge />
          </a>
        </li>
        <li>
          <a href="#/about" rel="noopener noreferrer" alt="BootStrap">
            <DiBootstrap />
          </a>
        </li>
        <li>
          <a href="#/about" rel="noopener noreferrer" alt="GitHub">
            <DiGithubBadge />{' '}
          </a>
        </li>
        <li>
          <a href="#/about" rel="noopener noreferrer" alt="Heroku">
            <DiHeroku />{' '}
          </a>
        </li>

        <li>
          <a href="#/about" rel="noopener noreferrer" alt="HTML5">
            <DiHtml5 />{' '}
          </a>
        </li>

        <li>
          <a href="#/about" rel="noopener noreferrer" alt="MaterializeCss">
            <DiMaterializecss />{' '}
          </a>
        </li>

        <li>
          <a href="#/about" rel="noopener noreferrer" alt="NodeJs">
            <DiNodejsSmall />{' '}
          </a>
        </li>

        <li>
          <a href="#/about" rel="noopener noreferrer" alt="PostgreSQL">
            <DiPostgresql />{' '}
          </a>
        </li>

        <li>
          <a href="#/about" rel="noopener noreferrer" alt="React">
            <DiReact />{' '}
          </a>
        </li>

        <li>
          <a href="#/about" rel="noopener noreferrer" alt="Trello">
            <DiTrello />{' '}
          </a>
        </li>

        <li>
          <a href="#/about" rel="noopener noreferrer" alt="Visual Studio">
            <DiVisualstudio />{' '}
          </a>
        </li>

        <li>
          <a href="#/about" alt="ExpressJS">
            <DiNodejs />{' '}
          </a>
        </li>

        <li>
          <div id="tooltip" className="left">
            <div className="tooltip-arrow" />
            <div className="tooltip-label">
              {' '}
              <a href="#/about" rel="noopener noreferrer" alt="MySql">
                <DiMysql />{' '}
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Skills;
