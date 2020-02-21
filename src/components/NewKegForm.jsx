import React from 'react';

function NewKegForm(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='names'
          placeholder='Name'/>
        <input
          type='text'
          id='brand'
          placeholder='Brand'/>
          <input
            type='number'
            id='price'
            placeholder='Price'/>
            <input
              type='text'
              id='alcoholContent'
              placeholder='Alcohol Content'/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

export default NewKegForm;
