import React from 'react';
import { Link } from 'react-router-dom'
import Keg from './NewKeg'


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
const masterKegList = [
  {
    name: 'Vortex',
    brand: 'Fort George',
    price: "6.00",
    alcoholcontent: "3.5"
  },
  {
    name: 'Hefe',
    brand: 'Widmer',
    price: "6.00",
    alcoholcontent: "5.0"
  },
];

function KegList(){
  return (

    <div style={pagegrid}>
      <div>
        <ul style={liststyle}>
          <li>
            <Link to ="/newkeg" style={{ textDecoration: 'none'}}>
              <div style = {navstyle}>
                <p style={fontstyle}>New Keg</p>
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
        {masterKegList.map((keg, index) => (
          <Keg
            name={keg.name}
            brand={keg.brand}
            price={keg.price}
            alcoholconten={keg.alcoholcontent}
            key={index}
            />
        ))}
      </div>

    </div>
  );
}

export default KegList;
