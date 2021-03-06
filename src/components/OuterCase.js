import React from 'react';
const OuterCase = props => {
  let open = false;
  const openPokedex = e => {
    open = !open;
    props.getNewPokemon(1);
    // flip open
  };
  return (
    <div id="outer-case" className={open ? 'page open' : 'page closed'}>
      <span onClick={openPokedex} id="open-button" />
      <span id="case-ridge" />
    </div>
  );
};

export default OuterCase;
