import React from 'react'
import './HouseComponent.css';

function HouseComponent(props) {
    let house = props.house;
    function houseConditional(house) {
        switch (house) {
            case "Hufflepuff":
                house = "Hufflepuff";
                return <div className="gryffindor-logo"></div>
            case "Gryffindor":
                house = "Gryffindor";
                return <div className="gryffindor-logo"></div>
            case "Slytherin":
                house = "Slytherin";
                return <div className="slytherin-logo"></div>
            case "Ravenclaw":
                house = "Ravenclaw";
                return <div className="gryffindor-logo"></div>
            default:
                break;
        }
    }
    
    return (
        <div>
            <div className="gold-svg"></div>
            <h1 className="house-styles"> Welcome to <span className="house-text">{house}</span></h1>
            {/* <div className="house-styles">{props.house}</div> */}
            {houseConditional(house)}
            <div className="castle"></div>
            <div className="button"></div>
        </div>
    )
}

export default HouseComponent;
