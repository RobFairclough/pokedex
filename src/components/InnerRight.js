import React from 'react';
import '../css/innerRight.css';
const InnerRight = ({ stats, types, habitat }) => {
  return (
    <div id="inner-right-page" className="page">
      <div id="stats">
        <ul id="stat-list" className="black-screen-text">
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
        <div className="black-screen">
          <p className="black-screen-text">
            {habitat && `habitat: ${habitat.name}`}
          </p>
        </div>
        <div className="black-screen" />
      </div>
      {/* evolutions */}
    </div>
  );
};

export default InnerRight;
