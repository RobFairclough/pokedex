import React from 'react';
import '../css/Sprite.css';
const Sprite = props => {
  return (
    <div id="sprite-bg">
      <img
        src={props.spriteImage}
        alt={props.pokemonName}
        className="sprite-img"
      />
    </div>
  );
};

export default Sprite;
