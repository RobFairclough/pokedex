import React from 'react';
import Header from './Header';
import Sprite from './Sprite';
import Controls from './Controls';

const InnerLeft = ({ sprites, name, headerLight, id, getNewPokemon }) => {
  const image = sprites.front_default;
  return (
    <>
      <div id="inner-left-page" className="page">
        <Header light={headerLight} />
        <div id="sprite-container">
          <shape className="red-circle" />
          <shape id="gap-circle" />
          <shape className="red-circle" />
          {/* sprite component */}
          <Sprite pokemonName={name} spriteImg={image} loc="main-sprite" />
          <span className="poke-text">{name}</span>
        </div>

        {/* buttons for image - cry, shiny toggle, front/back toggle */}
        <Controls id={id} getNewPokemon={getNewPokemon} />
        {/* flavor text and height/weight boxes */}
      </div>
    </>
  );
};

export default InnerLeft;
