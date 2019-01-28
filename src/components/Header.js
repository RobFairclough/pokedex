import React from 'react';
import '../css/header.css';

const Header = props => {
  const { light } = props;
  return (
    <>
      {/* blue orb thing */}
      {/* loading indicators, ul of 3 shapes */}
      <ul id="loading-lights">
        <shape id="blue-orb" />
        <shape
          id={light === 'red' ? 'red-active' : 'red'}
          className={light === 'red' ? 'loading-orb orb-active' : 'loading-orb'}
        />
        <shape
          id={light === 'yellow' ? 'yellow-active' : 'yellow'}
          className={
            light === 'yellow' ? 'loading-orb orb-active' : 'loading-orb'
          }
        />
        <shape
          id={light === 'green' ? 'green-active' : 'green'}
          className={
            light === 'green' ? 'loading-orb orb-active' : 'loading-orb'
          }
        />
      </ul>
    </>
  );
};

export default Header;
