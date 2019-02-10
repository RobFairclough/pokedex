import React from 'react';
import '../css/header.css';

const Header = props => {
  const { light } = props;
  return (
    <>
      <ul id="loading-lights">
        <span id="blue-orb" />
        <span
          id={light === 'red' ? 'red-active' : 'red'}
          className={light === 'red' ? 'loading-orb orb-active' : 'loading-orb'}
        />
        <span
          id={light === 'yellow' ? 'yellow-active' : 'yellow'}
          className={
            light === 'yellow' ? 'loading-orb orb-active' : 'loading-orb'
          }
        />
        <span
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
