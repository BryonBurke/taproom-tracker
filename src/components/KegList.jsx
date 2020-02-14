import React from 'react';

function NewKeg(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='name'
          placeholder='Keg Name'/>
        <input
          type='text'
          id='Brand'
          placeholder='Brand'/>

        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

export default NewKeg;
