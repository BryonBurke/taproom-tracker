import React from 'react';

function NewKegForm(){

  let _name = null;
  let _brand = null;
  let _price = null;
  let _alcoholContent = null;

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
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
          id='names'
          placeholder='Name'
          ref={(input) => {_name = input;}}/>
        <input
          type='text'
          id='brand'
          placeholder='Brand'
          ref={(input) => {_brand = input;}}/>
        <input
          type='number'
          id='price'
          placeholder='Price'
          ref={(input) => {_price = input;}}/>
        <input
          type='text'
          id='alcoholContent'
          placeholder='Alcohol Content'
          ref={(input) => {_alcoholContent = input;}}/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

export default NewKegForm;
