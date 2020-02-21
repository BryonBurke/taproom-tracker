import React from 'react';
import PropTypes from 'prop-types';

function NewKegForm(props){
  let _name = null;
  let _brand = null;
  let _price = null;
  let _alcoholContent = null;


  function handleNewKegFormSubmission(event) {
    event.preventDefault();

    props.onNewKegCreation({name: _name.value, brand: _brand.value, price: _price.value});
    _name.value = '';
    _brand.value = '';
    _price.value = '';
    _alcoholContent.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Name'
          ref={(input) => {_name = input;}}/>
        <input
          type='text'
          id='brand'
          placeholder='Brand'
          ref={(input) => {_brand = input;}}/>/>
        <input
          type=' text'
          id='price'
          placeholder='Price'
          ref={(input) => {_price = input;}}/>/>
        <input
          type='text'
          id='alcoholContent'
          placeholder='Alcohol Content'
          ref={(input) => {_alcoholContent = input;}}/>/>
        <button type='submit'>Add new keg</button>
      </form>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
