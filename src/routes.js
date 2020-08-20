import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

//import history from './history';
import Title from "./components/Title.js";
import GreatHall from './components/GreatHall.js';
import House from './components/House.js';
export default class Routes extends Component {
    render() {
        return (
            
                <Switch>
                    <Route exact path="/" component={Title} />
                    <Route path="/GreatHall" component={GreatHall} />
                    <Route path="/api/sorting-hat" component={House} />
                </Switch>
            
        )
    }
}