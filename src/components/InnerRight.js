import React from 'react';
import '../css/innerRight.css';
const InnerRight = ({ stats, types }) => {
  return (
    <div id="inner-right-page" className="page">
      {/* stats */}
      <div id="stats">
        <ul id="stat-list">
          {stats &&
            stats.map(stat => (
              <li key={stat.stat.name}>
                {stat.stat.name.replace('special', 'SP')}:{stat.base_stat}
              </li>
            ))}
          <li>Type: {types && types.join('/')}</li>
        </ul>
      </div>
      <div id="blue-buttons">
        {/* button stuff */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map(x => (
          <div className="blue-button" key={x} />
        ))}
        <div className="mini-black-button" id="black-button-left" />
        <div className="mini-black-button" id="black-button-right" />
      </div>

      <div id="white-buttons">
        <div className="white-button" />
        <div className="white-button" />
        <div className="yellow-circle" />
      </div>
      <div id="black-screens">
        <div className="black-screen" />
        <div className="black-screen" />
      </div>
      {/* evolutions */}
      {/* extra info */}
      {/* controls for selecting pokemon */}
    </div>
  );
};

export default InnerRight;
