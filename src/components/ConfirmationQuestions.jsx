import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestions(props){
  return (
    <div>
      <p>Are you authorzed to make changes to the Keg List?</p>
      <button onClick={props.onAuthorizeConfirmation}>Yes</button>
    </div>
  );
}

ConfirmationQuestions.propTypes = {
  onAuthorizeConfirmation: PropTypes.func
};

export default ConfirmationQuestions;
