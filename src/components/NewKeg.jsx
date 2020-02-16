import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

function NewKeg(props){

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
  const layoutStyles = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 4fr',
  };
  const locationStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={pagegrid}>
      <div>
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
      </div>
      <div>
        <p style={fullstyle}></p>
        <div style={layoutStyles}>
          <div style={locationStyles}>
            <p>{props.name}</p>
          </div>
          <div style={locationStyles}>
            <p>{props.brand}</p>
          </div>
          <div style={locationStyles}>
            <p>{props.price}</p>
          </div>
          <div style={locationStyles}>
            <p>{props.alcoholcontent}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

NewKeg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number,
  alcoholcontent: PropTypes.number,
};

export default NewKeg;
