import React from 'react';
const OuterCase = props => {
  const openPokedex = e => {
    props.getNewPokemon(1);
    // flip open
  };
  return (
    <div id="outer-case" className="page">
      {/* <Header /> */}
      {/* element to hide top of case for header */}
      <shape onClick={openPokedex} id="open-button" />
      {/* ridge shape */}
      <shape id="case-ridge" />
    </div>
  );
};

export default OuterCase;
