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

import ReactTooltip from 'react-tooltip';

import { IoMdBoat } from 'react-icons/io';
import { FaDatabase, FaGlobe, FaChartBar } from 'react-icons/fa';
import { MdStore, MdDevicesOther } from 'react-icons/md';
import { GiRayGun } from 'react-icons/gi';

import './skills.css';

function Skills(params) {
  return (
    <div className="title">
      <ul className="social-icons skill">
        <li>
          {' '}
          <p data-tip="SQL">
            {' '}
            <FaDatabase />{' '}
          </p>{' '}
          <ReactTooltip />{' '}
        </li>

        <li>
          {' '}
          <p data-tip="MySql">
            {' '}
            <DiMysql />{' '}
          </p>{' '}
          <ReactTooltip />{' '}
        </li>

        <li>
          {' '}
          <p data-tip="PostgreSQL">
            {' '}
            <DiPostgresql />{' '}
          </p>{' '}
          <ReactTooltip />{' '}
        </li>

        <li>
          {' '}
          <p data-tip="JavaScript">
            {' '}
            <DiJsBadge />{' '}
          </p>{' '}
          <ReactTooltip />{' '}
        </li>

        <li>
          {' '}
          <p data-tip="ExpressJs">
            {' '}
            <DiNodejsSmall />{' '}
          </p>{' '}
          <ReactTooltip />{' '}
        </li>

        <li>
          {' '}
          <p data-tip="NodeJs">
            {' '}
            <DiNodejs />{' '}
          </p>{' '}
          <ReactTooltip />{' '}
        </li>

        <li>
          {' '}
          <p data-tip="ReactJs">
            {' '}
            <DiReact />{' '}
          </p>{' '}
          <ReactTooltip />{' '}
        </li>

        <li>
          {' '}
          <p data-tip="ReduxJs">
            {' '}
            <MdStore />{' '}
          </p>{' '}
          <ReactTooltip />{' '}
        </li>

        <li>
          {' '}
          <p data-tip="SailsJs">
            {' '}
            <IoMdBoat />{' '}
          </p>{' '}
          <ReactTooltip />{' '}
        </li>

        <li>
          {' '}
          <p data-tip="GitHub">
            {' '}
            <DiGithubBadge />{' '}
          </p>{' '}
          <ReactTooltip />{' '}
        </li>

        <li>
          {' '}
          <p data-tip="Heroku">
            {' '}
            <DiHeroku />{' '}
          </p>{' '}
          <ReactTooltip />{' '}
        </li>

        <li>
          {' '}
          <p data-tip="Trello">
            {' '}
            <DiTrello />{' '}
          </p>{' '}
          <ReactTooltip />{' '}
        </li>

        <li>
          {' '}
          <p data-tip="Visual Studio">
            {' '}
            <DiVisualstudio />{' '}
          </p>{' '}
          <ReactTooltip />{' '}
        </li>

        <li>
          {' '}
          <p data-tip="HTML">
            {' '}
            <DiHtml5 />{' '}
          </p>{' '}
          <ReactTooltip />{' '}
        </li>

        <li>
          {' '}
          <p data-tip="CSS">
            {' '}
            <MdDevicesOther />{' '}
          </p>{' '}
          <ReactTooltip />{' '}
        </li>

        <li>
          {' '}
          <p data-tip="Materialize CSS">
            {' '}
            <DiMaterializecss />{' '}
          </p>{' '}
          <ReactTooltip />{' '}
        </li>

        <li>
          {' '}
          <p data-tip="Bootstrap CSS">
            {' '}
            <DiBootstrap />{' '}
          </p>{' '}
          <ReactTooltip />{' '}
        </li>

        <li>
          {' '}
          <p data-tip="Phaser">
            {' '}
            <GiRayGun />{' '}
          </p>{' '}
          <ReactTooltip />{' '}
        </li>

        <li>
          {' '}
          <p data-tip="Tableau">
            {' '}
            <FaChartBar />{' '}
          </p>{' '}
          <ReactTooltip />{' '}
        </li>

        <li>
          {' '}
          <p data-tip="Bilingual English/Spanish">
            {' '}
            <FaGlobe />{' '}
          </p>{' '}
          <ReactTooltip />{' '}
        </li>
      </ul>
    </div>
  );
}

export default Skills;
