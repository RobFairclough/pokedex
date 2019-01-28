import React from 'react';
import '../css/Controls.css';
const Controls = ({ id, getNewPokemon }) => {
  const handleChangeButton = direction => {
    const newId = direction ? +id + 1 : +id - 1;
    getNewPokemon(newId);
  };
  const handleChange = e => {
    const newId = e.target.value;
    e.target.value = newId;
    console.log(newId);
    getNewPokemon(newId);
  };
  return (
    <div className="pokedex-controls">
      <shape id="prev" onClick={() => handleChangeButton(false)} />
      <input
        type="number"
        id="num-selector"
        value={id}
        onChange={handleChange}
      />
      <shape id="next" onClick={() => handleChangeButton(true)} />
    </div>
  );
};

export default Controls;
