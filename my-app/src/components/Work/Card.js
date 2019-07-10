import React from 'react';
import { projects } from '../../data/projects';
import './Card.css';
import CardDetail from './CardDetail';

function Card() {
  return (
    <div className="card-container">
      {projects.map(el => (
        <div className="card-container" key={el.id}>
          <h3 className="card-container-title"> {el.type} </h3>
          <CardDetail project={el.project} id={el.id} key={el.id} />
        </div>
      ))}
    </div>
  );
}

export default Card;
