import React from 'react';
import Header from './Header';
import Sprite from './Sprite';
import Controls from './Controls';
import Bio from './Bio';

const InnerLeft = ({
  sprites,
  name,
  headerLight,
  id,
  getNewPokemon,
  descriptions = 'Not found'
}) => {
  const image = name
    ? sprites.front_default
    : 'https://upload.wikimedia.org/wikipedia/commons/2/23/Pok%C3%A9_Ball.svg';
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
        <Bio descriptions={descriptions} />
      </div>
    </>
  );
};

export default InnerLeft;
