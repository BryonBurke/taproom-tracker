import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  const kegInformation =
    <div>
      <h3>{props.name} - {props.brand} - {props.price} - {props.alcoholContent}</h3>
      <hr/>
    </div>
    if (props.currentRouterPath === '/editkeg'){
      return (
        <div onClick={() => {alert('hey, you just clicked the keg belonging to ' + props.names);}}>
          {kegInformation}
        </div>
      );
    } else {
      return (
        <div>
          {kegInformation}
        </div>
      );
    }
  }

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string

};

export default Keg;
