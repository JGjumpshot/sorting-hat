import React from 'react';
import './GreatHall.css';

class GreatHall extends React.Component {
  render() {
    return (
      <div>
          <div className="gold-svg"></div>
          <div className="hogwarts-crest"></div>
          <div className="castle"></div>
          <div className="sorting-text">Are you Brave of heart? <br />&nbsp;&nbsp;Cunning and Ambitious? <br /> Loyal and Dedicated? <br /> &nbsp;&nbsp;Or Clever and Creative? <br /> <br /> Click to find out your house</div>
          <button className="button-two">Discover House</button>
      </div>
    );
  }
}

export default GreatHall;