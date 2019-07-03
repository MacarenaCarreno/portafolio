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

// import skills from '../../data/skills.js';

function Skills(params) {
  return (
    <div>
      <FaDatabase /> SQL
      
      <DiMysql /> Mysql
    </div>
  );
}

export default Skills;
