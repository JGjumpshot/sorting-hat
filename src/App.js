import React from "react";
//import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import "./reset.css";
import "./App.css";
//import Title from './components/Title';
import "./components/Button.css";
//import GreatHall from './components/GreatHall';
//import history from './history';
import Routes from "./routes";

function App() {
  // render(props) {
  //   //if(this.state.isDisplayed === true) {

  // }

  return (
    <div>
      <div className="background">
        <Routes />
        {/* <Title /> */}
      </div>
    </div>
  );
}

export default App;
