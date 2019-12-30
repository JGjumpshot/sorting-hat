import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './reset.css';
import './App.css';
import Title from './components/Title';
import "./components/Button.css";
//import ArrowButton from './components/ArrowButton';
//import Test from './pages/Test';
class App extends React.Component {
  state = {
    isDisplayed: true
  }
  handleClick = () => {
    
    this.setState(() => ({
      isDisplayed: !this.state.isDisplayed
    }))
    console.log(this.state.isDisplayed);
  }
  
  render() {
    if(this.state.isDisplayed === true) {
      return(
        <Router>
          <div className="background"></div>
          <Title />
          <Link to="/greatHall" >
            <button className="button" onClick={this.handleClick}>Let the sorting begin</button>
            {/* <ArrowButton isHome={true}/> */}
          </Link>
        <Route path="/greatHall" exact component={GreatHall}/>
      </Router>
      );
    }
    return (
      <h1>Hello world</h1>
    );
  }
}
const GreatHall = () => {
  return (
  <div style={{color: "white", fontSize: "140px"}}>
    <h1>Great Hall</h1>
    {/* {document.getElementsByClassName('button').className = "hideButton"} */}
  </div>
)}
export default App;
