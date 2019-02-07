import React from 'react';
import '../css/Sprite.css';
const Sprite = props => {
  const { toggleView, view } = props;
  return (
    <div id="sprite-container">
      <span className="red-circle" onClick={() => toggleView('shiny')} />
      <span id="gap-circle" />
      <span className="red-circle" onClick={() => toggleView('frontBack')} />
      <div id="sprite-bg">
        <img
          src={
            props.spriteImgs &&
            props.spriteImgs[`${view.frontBack}_${view.shiny}`]
          }
          alt={props.pokemonName}
          className="sprite-img"
          id={props.loc}
        />
      </div>
      <span className="poke-text">{props.pokemonName}</span>
      <br />
      <i className="poke-text">{props.genus}</i>
    </div>
  );
};

export default Sprite;
