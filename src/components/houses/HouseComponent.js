import React from 'react'
import './HouseComponent.css';

function HouseComponent(props) {
    let house = props.house;
    switch (house) {
        case "Hufflepuff":
            house = "Hufflepuff";
            break;
        case "Gryffindor":
            house = "Gryffindor";
            console.log(house);
            return <div className="gryffindor-logo"></div>
        case "Slytherin":
            house = "Slytherin";
            break;
        case "Ravenclaw":
            house = "Ravenclaw";
            break;
        default:
            break;
    }
    return (
        <div>
            <div className="gold-svg"></div>
            <h1 className="house-styles"> Welcome to <span className="house-text">{house}</span></h1>
            {/* <div className="house-styles">{props.house}</div> */}
            <div className="castle"></div>
        </div>
    )
}

export default HouseComponent;
