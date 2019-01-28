import React from 'react';
import '../css/Sprite.css';
const Sprite = props => {
  return (
    <div id="sprite-bg">
      <img
        src={props.spriteImg}
        alt={props.pokemonName}
        className="sprite-img"
        id={props.loc}
      />
    </div>
  );
};

export default Sprite;
