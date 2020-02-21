
import React from 'react';
import NewKeg from './NewKeg';
import PropTypes from 'prop-types';

function KegList(props) {
return (
  <div>
    <hr />
    {props.kegList.map((newkeg, index) => (
      <NewKeg
        name={newkeg.name}
        brand={newkeg.brand}
        price={newkeg.price}
        alcoholContent={newkeg.alcoholContent}
        key={index}
      />
    ))}
  </div>
);
}

KegList.propTypes = {
kegList: PropTypes.array
};

export default KegList;
