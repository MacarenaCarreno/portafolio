import React from 'react';
import { projects } from '../../data/projects';
import './Card.css';
import CardDetail from './CardDetail';

function Card() {
  return (
    <div className="card-container">
      {projects.map(el => (
        <div className="card-container">
          <h3 className="card-container-title"> {el.type} </h3>
          <p className="card-container-detail">{el.description}</p>

          <CardDetail project={el.project} id={el.id} />
        </div>
      ))}
    </div>
  );
}

export default Card;
