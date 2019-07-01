import React from 'react';
import './Card.css';

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
            <p>{project.description}</p>
            <p>{project.tech}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardDetail;
