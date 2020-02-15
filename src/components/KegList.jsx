import React from 'react';
import { Link } from 'react-router-dom'

function KegList(){

  const pagegrid = {
    display:'grid',
    gridTemplateColumns: '1fr 9fr',
    gridColumnGap: '20px',
    height: '100vh'
  }
  const navstyle ={
    backgroundColor: 'lightblue',
    borderRadius: '30px',
    padding: '20px',
    height: '20vh',
    marginTop: '10px'
  }
  const fullstyle ={
    backgroundColor: 'lightblue',
    padding: '20px',
    height: '100vh'
  }
  const liststyle ={
    listStyleType: 'none'
  }

  return (

    <div style={pagegrid}>

      <ul style={liststyle}>
        <li>
          <Link to ="/newkeg" style={{ textDecoration: 'none'}}>
            <div style = {navstyle}>
              <p >New Keg</p>
            </div>
          </Link>

        </li>
        <li>
          <Link to ="/employee" style={{ textDecoration: 'none'}}>
            <div style = {navstyle}>
              <p >Employee</p>
            </div>
          </Link>
        </li>
        <li>
          <Link to ="/patron" style={{ textDecoration: 'none'}}>
            <div style = {navstyle}>
              <p >Patron</p>
            </div>
          </Link>
        </li>
      </ul>

      <div>
        <p style = {fullstyle}></p>
      </div>
    </div>
  );
}

export default KegList;
