import React from 'react';

function NewKegForm(){
  let _name = null;
  let _brand = null;
  let _price = null;
  let _alcoholContent = null;


  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    console.log(_name.value);
    console.log(_brand.value);
    console.log(_price.value);
    console.log(_alcoholContent.value);
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

export default NewKegForm;
