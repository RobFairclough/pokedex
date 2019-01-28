import React from 'react';
import Header from './Header';
import Sprite from './Sprite';
const InnerLeft = props => {
  const { pokemonObj } = props;
  const image = pokemonObj.sprites.default_front;
  const pokemonName = pokemonObj.name;
  return (
    <>
      <div id="inner-left-page" className="page">
        <Header />
        <div id="sprite-container">
          <shape className="red-circle" />
          <shape id="gap-circle" />
          <shape className="red-circle" />
          {/* sprite component */}
          <Sprite pokemonName={pokemonName} spriteImg={image} />
        </div>

        {/* buttons for image - cry, shiny toggle, front/back toggle */}
        <div id="control-container" />
        {/* flavor text and height/weight boxes */}
      </div>
    </>
  );
};

export default InnerLeft;
