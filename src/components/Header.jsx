import React from 'react';


function Header() {
    const styles = {
        backgroundColor: '#406aad',
        fontFamily: 'Roboto',
        color: 'white',
        textAlign: 'center',
        margin: '0',
        height: '8vh',
        fontSize: '6vh',
        lineHeight: '8vh',

    };
    return (
      <div>
        <h1 style={styles}>Tap Room Tracker</h1>
      </div>
    );
}

export default Header;
