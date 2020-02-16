import React from 'react';
import { Link } from 'react-router-dom'
import NewKeg from './NewKeg'

const masterKegList = [
  {
    name: 'Vortex',
    brand: 'Fort George',
    price: "6.00",
    alcoholcontent: "3.5",
    pintsRemaining:"124"
  },
  {
    name: 'Hefe',
    brand: 'Widmer',
    price: "6.00",
    alcoholcontent: "5.0",
    pintsRemaining:"124"
  },
];

const columnHeadingStyles = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
};

const locationStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};





function KegList(){
  return (
    <div >
            <Link to ="/newkeg">New Keg</Link>
            <Link to ="/employee">Employee</Link>
            <Link to ="/patron">Patron</Link>

          <div style={columnHeadingStyles}>

<h3 style={locationStyles}>Name</h3>
<h3 style={locationStyles}>Brand</h3>
<h3 style={locationStyles}>Price</h3>
<h3 style={locationStyles}>Alcohol Content</h3>
<h3 style={locationStyles}>Pints Remaining</h3>
          </div>

        {masterKegList.map((keg, index) => (
          <NewKeg
            name={keg.name}
            brand={keg.brand}
            price={keg.price}
            alcoholcontent ={keg.alcoholcontent}
            pintsRemaining ={keg.pintsRemaining}
            key={index}
            />
        ))}
      </div>


  );
}

export default KegList;
