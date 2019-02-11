import React from 'react';
import '../css/Bio.css';
const Bio = ({ descriptions, height, weight, types }) => {
  const rand = descriptions[Math.floor(Math.random() * descriptions.length)];
  const bioText = rand ? rand.flavor_text : 'Pokémon not found';
  return (
    <>
      <div id="bio-box" className="bio">
        <span id="bio-text">{bioText}</span>
      </div>
      <div id="stats-box" className="bio">
        <span id="stats-text">
          H: <br />
          {height && height / 10}M <br /> W:
          <br />
          {weight && weight / 10}kg <br />
        </span>
      </div>
    </>
  );
};

export default Bio;
