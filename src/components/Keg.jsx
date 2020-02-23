import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  return (
    <div>
      <h3>{props.name} - {props.brand}</h3>
      <p><em>{props.price}</em></p>
      <hr/>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string

};

export default Keg;
