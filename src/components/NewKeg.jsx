import React from 'react';
import { Link } from 'react-router-dom'

function NewKeg(){

  const pagegrid = {
    display:'grid',
    gridTemplateColumns: '1fr 9fr',
    gridColumnGap: '20px',
    height: '100vh'
  }
  const navstyle ={
    backgroundColor: '#406aad',
    borderRadius: '30px',
    padding: '30px',
    height: '20vh',
    marginTop: '10px',
    color:'white',
    textAlign:'center'
  }
  const fullstyle ={
    backgroundColor: 'lightblue',
    padding: '20px',
    height: '100vh'
  }
  const liststyle ={
    listStyleType: 'none'
  }

  const fontstyle ={
    fontFamily: 'Roboto',
    fontSize:'3.5ex'
  }

  return (

    <div style={pagegrid}>

      <ul style={liststyle}>
        <li>
          <Link to ="/" style={{ textDecoration: 'none'}}>
            <div style = {navstyle}>
              <p style={fontstyle}>Keg List</p>
            </div>
          </Link>

        </li>
        <li>
          <Link to ="/employee" style={{ textDecoration: 'none'}}>
            <div style = {navstyle}>
              <p style={fontstyle}>Employee</p>
            </div>
          </Link>
        </li>
        <li>
          <Link to ="/patron" style={{ textDecoration: 'none'}}>
            <div style = {navstyle}>
              <p style={fontstyle}>Patron</p>
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

export default NewKeg;
