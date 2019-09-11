import React from 'react';
import './Title.css';
import Hat from '../assets/sortinghat.png';
function Title () {
    return (
        <div className="text-wrapper">
            <p className="text"><strong>Harry Potter</strong></p>
            <h2 className="text2">Sorting&nbsp;&nbsp;Hat</h2>
            <div className="img-container">
                <img src={Hat} alt="sorting hat"/>
            </div>
        </div>
    );
}

export default Title;