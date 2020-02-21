import React from 'react';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import NewKeg from './NewKeg'
import PropTypes from 'prop-types';

const columnHeadingStyles = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
};

const headinglocationStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

function KegList(props){
  return (

    <div >
      <ul>
        <li><Link to ="/newkeg">New Keg</Link></li>
        <li><Link to ="/employee">Employee</Link></li>
        <li><Link to ="/patron">Patron</Link></li>
      </ul>

      <div style={columnHeadingStyles}>

        <h3 style={headinglocationStyles}>Name</h3>
        <h3 style={headinglocationStyles}>Brand</h3>
        <h3 style={headinglocationStyles}>Price</h3>
        <h3 style={headinglocationStyles}>Alcohol Content</h3>

        <div>
          <hr/>
          {kegList.map((keg, index) =>
            <Keg
              name={keg.name}
              brand={keg.brand}
              price={keg.price}
              alcoholContent={keg.alcoholContent}

              key={index}/>
          )}
        </div>

      );
    }

    KegList.propTypes = {
      kegList: PropTypes.array
    };

    export default KegList;
