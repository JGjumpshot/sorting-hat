import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './reset.css';
import './App.css';
import './assets/sortinghat.png';
import Title from './components/Title';
import ArrowButton from './components/ArrowButton';

function App() {
  return (
    <div className="background">
      <Title />
      <ArrowButton />
    </div>
  );
}

export default App;
