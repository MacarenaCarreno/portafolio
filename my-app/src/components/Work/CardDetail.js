import React from 'react';
import './Card.css';
import { FaGithub } from 'react-icons/fa';
import { IoIosGlobe } from 'react-icons/io';

function CardDetail(props) {
  const projects = props.project;

  return (
    <div className="card-container">
      {projects.map(project => (
        <div className="card" key={project.name}>
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
              <tbody>
                <tr className="tr-rigth">
                  <th>
                    <a
                      href={project.web}
                      target="_blank"
                      rel="noopener noreferrer"
                      alt="Website"
                    >
                      <IoIosGlobe className="card_svg" />{' '}
                    </a>

                    {project.git !== '' ? (
                      <a
                        href={project.git}
                        target="_blank"
                        rel="noopener noreferrer"
                        alt="Git"
                      >
                        <FaGithub className="card_svg" />
                      </a>
                    ) : null}
                  </th>
                </tr>

                {/* </table>

            <table> */}

                <tr>
                  <th className="left">Technologies</th>
                </tr>

                <tr>
                  <td>{project.tech}</td>
                </tr>

                <tr>
                  <th className="left">Description</th>
                </tr>

                <tr>
                  <td>{project.description}</td>
                </tr>
              </tbody>
            </table>

            <hr />
            <table>
              <tbody>
                <tr>
                  <td>Developed in: {project.time}</td>
                </tr>

                <tr>
                  <td>Team: {project.team} </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardDetail;
