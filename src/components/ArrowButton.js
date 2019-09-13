import React from 'react';
import {Link} from 'react-router-dom';
import './Button.css';
function ArrowButton () {
    return (
        <div>
            <Link to="/test"></Link>
            <button className="button">
                Let the sorting begin
            </button>
        </div>
    );
}

export default ArrowButton;