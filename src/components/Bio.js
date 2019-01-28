import React from 'react';
import '../css/Bio.css';
const Bio = ({ descriptions, height, weight, type }) => {
  const rand = descriptions[Math.floor(Math.random() * descriptions.length)];
  const bioText = rand ? rand.flavor_text : 'not found';
  return (
    <>
      <div id="bio-box" className="bio">
        <span id="bio-text">{bioText}</span>
      </div>
      <div id="stats-box" className="bio">
        <span id="stats-text">
          H: {height} <br /> W: {weight} <br /> Type: {type}
        </span>
      </div>
    </>
  );
};

export default Bio;
