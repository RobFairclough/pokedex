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
  genus,
  height,
  weight,
  descriptions = '',
  types,
  toggleView,
  view
}) => {
  return (
    <div id="inner-left-page" className="page">
      <Header light={headerLight} />
      <Sprite
        pokemonName={name}
        spriteImgs={sprites}
        id={id}
        loc="main-sprite"
        genus={genus}
        toggleView={toggleView}
        view={view}
      />
      <Controls id={id} getNewPokemon={getNewPokemon} />
      <Bio
        descriptions={descriptions}
        height={height}
        weight={weight}
        types={types}
      />
    </div>
  );
};

export default InnerLeft;
