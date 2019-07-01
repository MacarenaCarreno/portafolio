import React from 'react';
import { projects } from '../../data/projects';
import './Card.css';
import CardDetail from './CardDetail';

function Card() {
  return (
    <div className="card-container">
      {projects.map(el => (
        <div className="card-container">
          <h3> {el.type} </h3>
          <CardDetail project={el.project} key={el.id} id={el.id} />
        </div>
      ))}
    </div>
  );
}

export default Card;
