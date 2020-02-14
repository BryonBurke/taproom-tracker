import React from 'react';

function KegList(){

  const pagegrid = {
    display:'grid',
    gridTemplateColumns: '1fr 8fr',
    gridColumnGap: '10px',
  }

  const backstyle ={
    backgroundColor: 'lightblue',
    height: '500px',
    padding: '20px'
  }


  return (
    <div style = {pagegrid}>

      <div >
        <p style = {backstyle}></p>
      </div>
      <div>
        <p style = {backstyle}></p>
      </div>
    </div>


);
}

export default KegList;
