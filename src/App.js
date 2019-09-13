import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './reset.css';
import './App.css';
import './assets/sortinghat.png';
import Title from './components/Title';
import ArrowButton from './components/ArrowButton';
import Test from './pages/Test';

function App() {
  return (
    <Router>
      <div className="background">
        <Route exact path="/" component={Title}>
          <Title />
          <ArrowButton />
        </Route>
        <Route path="/test" component={Test}>
          <Test />
        </Route>
      </div>

    </Router>
    
  );
}

export default App;
