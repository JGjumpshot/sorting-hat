import React from 'react'
import HouseComponent from './houses/HouseComponent.js';
function pickHouse() {
    var houses = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'];
    var sorted = Math.floor(Math.random() * houses.length)
    // console.log(houses[sorted]);
    if (houses[sorted] === "Gryffindor") {
        return <HouseComponent house={houses[0]}/>
    }
    else if (houses[sorted] === "Slytherin") {
        return <HouseComponent house={houses[1]}/>
    }
    else if (houses[sorted] === "Hufflepuff") {
        return <HouseComponent house={houses[2]}/>
    }
    else {
        return <HouseComponent house={houses[3]}/>
    }
}

function HouseRouter() {
    return (
        <div>
            {pickHouse()}
        </div>
    )
}

export default HouseRouter;
