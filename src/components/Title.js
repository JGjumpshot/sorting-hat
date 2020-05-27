import React from 'react';
import './Title.css';
import Hat from '../assets/sortinghatlogo.png';
import ArrowButton from './ArrowButton';
import history from '../history.js';

function Title () {
    return (
        <div className="text-wrapper">
            <p className="text"><strong>Harry Potter</strong></p>
            <h2 className="text2">Sorting&nbsp;&nbsp;Hat</h2>
            <div className="img-container">
                <img src={Hat} alt="sorting hat"/>
            </div>
            <ArrowButton onClick={ () => {
              history.push('/GreatHall')
            } } />
        </div>
    );
}

export default Title;