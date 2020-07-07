import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
//import history from './history';
import Title from "./components/Title.js";
import GreatHall from './components/GreatHall.js';
import HouseRouter from './components/HouseRouter.js';
export default class Routes extends Component {
    render() {
        return (
            
                <Switch>
                    <Route exact path="/" component={Title} />
                    <Route path="/GreatHall" component={GreatHall} />
                    <Route path="/HouseRouter" component={HouseRouter} />
                </Switch>
            
        )
    }
}