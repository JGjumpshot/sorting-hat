import React from 'react'
import './HouseComponent.css';

function HouseComponent(props) {
    
    // switch (props.house) {
    //     case "Hufflepuff":
    //         house = "Hufflepuff";
    //         break;
    //     case "Gryffindor":
    //         house = "Gryffindor";
    //         break;
    //     case "Slytherin":
    //         house = "Slytherin";
    //         break;
    //     case "Ravenclaw":
    //         house = "Ravenclaw";
    //         break;
    //     default:
    //         break;
    // }
    return (
        <div>
            <div className="gold-svg"></div>
            <h1 className="house-styles"> Welcome to <span className="house-text">{props.house}</span></h1>
            {/* <div className="house-styles">{props.house}</div> */}
            <div className="castle"></div>
        </div>
    )
}

export default HouseComponent;
