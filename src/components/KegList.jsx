import React from 'react';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import NewKeg from './NewKeg'

const columnHeadingStyles = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
};

const headinglocationStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};







function KegList(){
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
        <h3 style={headinglocationStyles}>Pints Remaining</h3>

        <div>
          <hr/>
          {masterKegList.map((keg, index) =>
            <Ticket name={keg.name}
              brand={keg.brand}
              price={keg.price}
              alcoholContent={keg.alcoholContent}
              pintsRemaining={keg.pintsRemaining}
              key={index}/>
          )}
        </div>


      );
    }

    export default KegList;
