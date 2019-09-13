import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './reset.css';
import './App.css';
import './assets/sortinghat.png';
import Title from './components/Title';
import Test from './pages/Test';

function App() {
  return (
    <Router>
      <div className="background">
        <Route exact path="/" component={Title}></Route>
        <Link to="/test" component={Test}></Link>
      </div>

    </Router>
    
  );
}

export default App;
