import React from 'react';
import './Card.css';
import { FaGithub } from 'react-icons/fa';
import { IoIosGlobe } from 'react-icons/io';

function CardDetail(props) {
  const projects = props.project;

  return (
    <div className="card-container">
      {projects.map(project => (
        <div className="card">
          <div className="card_image-container">
            <img className="card_image" src={project.img} alt="" />
          </div>

          <div className="card_content">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              title="View Live Demo"
            >
              <h4 className="card_title">{project.name}</h4>
            </a>

            <table className="moveTop">
              <thead>
                <tr className="rigth">
                  <th colspan="1">
                    <a
                      href={project.web}
                      target="_blank"
                      rel="noopener noreferrer"
                      alt="Website"
                    >
                      <IoIosGlobe className="card_svg" />{' '}
                    </a>
                    
      
                    <a
                      href={project.git}
                      target="_blank"
                      rel="noopener noreferrer"
                      alt="Git"
                    >
                      <FaGithub className="card_svg" />
                    </a>
                  </th>
                </tr>
              </thead>
              {/* </table>

            <table> */}
              <thead>
                <th>
                  <tr>Technologies</tr>
                </th>
              </thead>

              <tbody>
                <td>
                  <tr>{project.tech}</tr>
                </td>
              </tbody>

              <thead>
                <th>
                  <tr>Description </tr>
                </th>
              </thead>

              <tbody>
                <td>
                  <tr>{project.description}</tr>
                </td>
              </tbody>
            </table>

            <hr />
            <table>
              <tbody>
                <td>
                  <tr>Developed in: {project.time}</tr>
                  <tr>Team: {project.team} </tr>
                </td>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardDetail;
