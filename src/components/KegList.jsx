import React from 'react';

function KegList(){

  const pagegrid = {
    display:'grid',
    gridTemplateColumns: '1fr 8fr',
    gridColumnGap: '20px',
    height: '100vh'
  }

  const navstyle ={
    backgroundColor: 'lightblue',
    padding: '30px'
  }

  const fullstyle ={
    backgroundColor: 'lightblue',
    padding: '20px',
    height: '100vh'
  }


  return (
    <div style = {pagegrid}>

      <div >
        <p style = {navstyle}>New Keg</p>
        <p style = {navstyle}>Employee</p>
        <p style = {navstyle}>Patron</p>

      </div>
      <div>
        <p style = {fullstyle}></p>
      </div>
    </div>


);
}

export default KegList;
