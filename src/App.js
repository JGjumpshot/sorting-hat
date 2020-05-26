import React from 'react';
//import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './reset.css';
import './App.css';
import Title from './components/Title';
import "./components/Button.css";
//import GreatHall from './components/GreatHall';
import ArrowButton from './components/ArrowButton';
import history from './history.js';

class App extends React.Component {

  render(props) {
    //if(this.state.isDisplayed === true) {
      return(
        <div>
          <div className="background"></div>
          <Title />
          <ArrowButton onClick={ () => {
            history.push('/GreatHall')
          } } />
        </div>
      );
    
    // return (
    //   <React.Fragment>
    //     <div className="background">
    //       <GreatHall />
    //     </div>
    //   </React.Fragment>
    // );
  }
}

export default App;
