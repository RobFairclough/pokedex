import React, { useState } from 'react';
import '../css/Controls.css';

const Controls = ({ id: currentId, getNewPokemon }) => {
  const [id, setId] = useState(currentId);
  const handleChangeButton = direction => {
    const newId = +id + direction;
    if (newId && newId > 0 && newId <= 805) {
      getNewPokemon(newId);
      setId(newId);
    }
  };
  const handleChange = ({ target: { value } }) => {
    setId(value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    getNewPokemon(+id);
  };
  return (
    <div className="pokedex-controls">
      <span id="prev" onClick={() => handleChangeButton(-1)} />
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          id="num-selector"
          value={id}
          onChange={handleChange}
        />
      </form>
      <span id="next" onClick={() => handleChangeButton(1)} />
    </div>
  );
};

export default Controls;
