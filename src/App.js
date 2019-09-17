import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './reset.css';
import './App.css';
import './assets/sortinghat.png';
import Title from './components/Title';
import ArrowButton from './components/ArrowButton';

function App() {
  return (
    <Router>
      <div className="background">
        <Route exact strict path="/" component={Title}></Route>
        <Link className="button" exact strict to="/test" component={ArrowButton}>Let the sorting begin!</Link>
      </div>

    </Router>
    
  );
}

export default App;
