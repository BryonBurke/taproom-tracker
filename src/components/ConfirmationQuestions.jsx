import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestions(){
  return (
    <div>
      <p>Are you authorized to add a new Keg to the list?</p>
      <button onClick={props.onAuthorizedConfirmation}>Yes</button>
    </div>
  );
}

ConfirmationQuestions.propTypes = {
  onAuthorizedConfirmation: PropTypes.func
};

export default ConfirmationQuestions;
