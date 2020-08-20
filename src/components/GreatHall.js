import React from 'react';
import './GreatHall.css';
import { Link } from 'react-router-dom';

function GreatHall() {
    return (
      <div>
          <div className="gold-svg"></div>
          <div className="hogwarts-crest"></div>
          <div className="castle"></div>
          <div className="sorting-text">Are you Brave of heart? <br />&nbsp;&nbsp;Cunning and Ambitious? <br /> Loyal and Dedicated? <br /> &nbsp;&nbsp;Or Clever and Creative? <br /> <br /> Click to find out your house</div>
<<<<<<< HEAD
          <Link to="House" className="button-two">Discover House</Link>
=======
          <Link className="button-two" to="HouseRouter">Discover House</Link>
>>>>>>> 7541fba1ba3adb6c824001dd0204d2bd92e1efac
      </div>
    );
}

export default GreatHall;