import React from 'react';
import '../css/header.css';

const Header = props => {
  const { headerLight } = props;
  return (
    <>
      {/* blue orb thing */}
      {/* loading indicators, ul of 3 shapes */}
      <ul id="loading-lights">
        <shape id="blue-orb" />
        <shape id="red" className="loading-orb" />
        <shape id="yellow" className="loading-orb" />
        <shape id="green" className="loading-orb" />
      </ul>
    </>
  );
};

export default Header;
