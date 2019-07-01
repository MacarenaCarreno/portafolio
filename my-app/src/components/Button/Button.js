import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';

import './Button.css';

function Button(props) {
  return (
    <button>
      <FontAwesomeIcon icon={faFileAlt} /> {props.text}
    </button>
  );
}

export default Button;
