import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import history from './history';
import Title from './components/Title';
import GreatHall from './components/GreatHall.js';
export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Title} />
                    <Route path="/GreatHall" component={GreatHall} />
                </Switch>
            </Router>
        )
    }
}