import React from 'react';
import { Parallax } from 'react-parallax';

import Button from '../Button/Button';

import './Parallax.css';

function About() {
  const image1 = '/assets/img/background.jpg';

  const profile = '/assets/img/profile01.jpeg';

  return (
    <div className="App-container">
      <Parallax
        bgImage={image1}
        strength={400}
        bgClassName="Parallax-image"
        blur={{ min: -1, max: 3 }}
        className="Parallax"
      >
        <div id="Parallax">
          <div className="App-container">
            <div className="App-container-header title">
              <h1> About Me </h1>
            </div>

            <div className="App-container-content">
              <div className="Parallax-Photo">
                <img src={profile} alt="profile" id="profile" />
              </div>
              <div className="App-container-content ">
                <h3 className="about">
                  I am an Industrial Engineer and now a Software Developer.
                  <br /> During my time as an Industrial Engineer, I worked in
                  process optimization across industries that included mining,
                  healthcare, and mobile.
                  <br />
                  Having now completed a coding boot camp with Fullstack
                  Academy, I am excited to blend my previous experience with my
                  new love of software development. 
                </h3>
                <div className="Parallax-button">
                  <a href="/Macarena_Carreno_2019.pdf" target="_blank">
                    <Button text={'My Resume'} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
      <div className="App-container">
        <div className="App-container-header title">
          <h1> Skills </h1>
        </div>

        <div className="App-container-content skills">
          SQL | MySql | PostgreSQL | JavaScript | ExpressJs | NodeJs | ReactJs |
          SailsJs | ReduxJs | HTML | Materialize CSS | CSS | Tableau | Phaser |
          Bilingual English/Spanish
        </div>
      </div>
    </div>
  );
}

export default About;
