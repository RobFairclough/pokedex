import React from 'react';
import Header from './Header';
import Sprite from './Sprite';
import { camelCase } from '../utils';

const InnerLeft = props => {
  const { pokemonObj } = props;
  const pokemonName = camelCase(pokemonObj.name);
  const image = pokemonObj.sprites.front_default;
  console.log(image);
  // const image = pokemonObj.sprites.default_front;
  // const pokemonName = pokemonObj.name;
  return (
    <>
      <div id="inner-left-page" className="page">
        <Header light={props.headerLight} />
        <div id="sprite-container">
          <shape className="red-circle" />
          <shape id="gap-circle" />
          <shape className="red-circle" />
          {/* sprite component */}
          <Sprite
            pokemonName={pokemonName}
            spriteImg={image}
            loc="main-sprite"
          />
          <span className="poke-text">{pokemonName}</span>
        </div>

        {/* buttons for image - cry, shiny toggle, front/back toggle */}
        <div id="control-container" />
        {/* flavor text and height/weight boxes */}
      </div>
    </>
  );
};

export default InnerLeft;
