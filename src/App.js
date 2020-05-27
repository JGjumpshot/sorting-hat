import React from 'react';
//import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './reset.css';
import './App.css';
import Title from './components/Title';
import "./components/Button.css";
//import GreatHall from './components/GreatHall';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

class App extends React.Component {

  render(props) {
    //if(this.state.isDisplayed === true) {
      return(
        <Router>
          <div>
            <Routes />
            <div className="background"></div>
            <Title />
          </div>
        </Router>
      );
  }
}

export default App;
