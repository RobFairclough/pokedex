import React from 'react';
import '../css/Bio.css';
const Bio = ({ descriptions, height, weight, types }) => {
  console.log(types);
  const type = types ? types.map(({ type }) => type.name) : [];
  const rand = descriptions[Math.floor(Math.random() * descriptions.length)];
  const bioText = rand ? rand.flavor_text : 'not found';
  return (
    <>
      <div id="bio-box" className="bio">
        <span id="bio-text">{bioText}</span>
      </div>
      <div id="stats-box" className="bio">
        <span id="stats-text">
          H: {height} <br /> W: {weight} <br /> Type: {types && type.join(', ')}
        </span>
      </div>
    </>
  );
};

export default Bio;
