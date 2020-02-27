import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  const styles = {
    backgroundColor: '#34ebd5',
    fontFamily: 'Roboto',
    color: 'white',
    textAlign: 'center',
    height: '16vh',
  };

  const butonStyle =  {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    backgroundColor: '#34ebd5',
    textAlign: 'center',
    paddingTop: '5vh',
    fontFamily: 'Roboto',
    color: 'orange',
    fontSize: '25px',

  }

  return (
    <div>

      <div style={butonStyle}>
        <Link to="/newkeg">New Keg </Link>
        <h1 style={styles}>Tap Room Tracker</h1>
        <Link to="/editkeg">Edit Keg  </Link>
      </div>



    </div>
  );
}

export default Header;
