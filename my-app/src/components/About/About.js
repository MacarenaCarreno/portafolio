import React from 'react';
import { Parallax } from 'react-parallax';

import Button from '../Button/Button';

import './Parallax.css';
import Skills from './Skills';

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
                  I am a Bachelor of science and engineering in Industrial
                  Engineering and Software Developer.
                  <br /> During my time as an Industrial Engineer, I worked in
                  process optimization and data analysis across industries, that
                  included mining, healthcare, mobile, and construction.
                  <br />
                  <br />I have been working as a freelancer for the last 4
                  years, that is why I created Chagual Technologies, where I
                  help small and midsize companies in process optimization, and
                  as a result of that, I have been developing and implementing
                  SAAS solutions and websites, that was my Aha! moment and
                  decide to pursue the path of Software Developer.
                  <br />
                  <br /> In May 2019 I graduated from Fullstack Academy of Code
                  (Grace Hopper Program) and currently looking for new
                  opportunities in New York City.
                  <br /> <br />
                  Now, I work as a Solutions Engineer! Where I mix both careers.
                  <br />
                </h3>

                <div className="Parallax-button">
                  <a href="/Macarena_Carreno_2020.pdf" target="_blank">
                    <Button text={'My Resume'} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Parallax>

      <div className="App-container skills">
        <div className="App-container-header title">
          <h1> Skills </h1>
        </div>

        <div className="App-container-content">
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default About;
