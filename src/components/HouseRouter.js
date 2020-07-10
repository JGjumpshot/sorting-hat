import React from 'react'

function pickHouse() {
    var houses = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'];
    var sorted = Math.floor(Math.random() * houses.length)
    // console.log(houses[sorted]);
    if (houses[sorted] === "Gryffindor") {
        return "Gryffindor";
    }
    else if (houses[sorted] === "Slytherin") {
        return "Slytherin";
    }
    else if (houses[sorted] === "Hufflepuff") {
        return "Hufflepuff";
    }
    else {
        return "Ravenclaw";
    }
}

function HouseRouter() {
    return (
        <div style={{"color": "white", "font-family": "monospace", "font-size": "200px"}}>
            {pickHouse()}
        </div>
    )
}

export default HouseRouter;
