import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './reset.css';
import './App.css';
import './assets/sortinghat.png';
import Title from './components/Title';
import ArrowButton from './components/ArrowButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    }
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }
  render() {
    return (
      <Router>
        <div className="background">
          <Route exact strict path="/" component={Title}></Route>
          <Link className="button" exact strict to="/test" component={ArrowButton}>Let the sorting begin!</Link>
        </div>
  
      </Router>
      
    )
  }
  
}

export default App;