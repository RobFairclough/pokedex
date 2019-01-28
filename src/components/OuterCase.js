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
      {/* <Header /> */}
      {/* element to hide top of case for header */}
      <shape onClick={openPokedex} id="open-button" />
      {/* ridge shape */}
      <shape id="case-ridge" />
    </div>
  );
};

export default OuterCase;
