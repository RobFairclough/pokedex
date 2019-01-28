import React from 'react';
import '../css/Bio.css';
const Bio = ({ descriptions }) => {
  const rand = Math.floor(Math.random() * descriptions.length);
  const bioText = descriptions[rand].flavor_text;
  return (
    <div id="bio-box">
      <span id="bio-text">{bioText}</span>
    </div>
  );
};

export default Bio;
