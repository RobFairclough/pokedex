import React from 'react';
import '../css/Controls.css';
const Controls = ({ id, getNewPokemon }) => {
  const handleChangeButton = direction => {
    const newId = direction ? +id + 1 : +id - 1;
    if (newId && newId > 0 && newId <= 802) getNewPokemon(newId);
  };
  const handleChange = e => {
    const newId = e.target.value;
    e.target.value = newId;
    if (newId && newId > 0 && newId <= 802) getNewPokemon(newId);
  };
  return (
    <div className="pokedex-controls">
      <shape id="prev" onClick={() => handleChangeButton(false)} />
      <input
        type="number"
        id="num-selector"
        value={id}
        onChange={handleChange}
        min="1"
        max="802"
      />
      <shape id="next" onClick={() => handleChangeButton(true)} />
    </div>
  );
};

export default Controls;
