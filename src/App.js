import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './reset.css';
import './App.css';
import Title from './components/Title';
import ArrowButton from './components/ArrowButton';
//import Test from './pages/Test';
class App extends React.Component {
  constructor() {
    super();
    this.state = {url: "/"}
  }

  render() {
    return (
      <Router>
        <div className="background">
        <Route exact path ="/" component={Title}/>
        <NavLink to="/greatHall" >
          <ArrowButton />
        </NavLink>
        <Route path="/greatHall" exact component={GreatHall}></Route>
        </div>
       </Router>
    );
  }
}
const GreatHall = () => {
  return (
  <div style={{color: "white", fontSize: "200px"}}>
    <h1>Great Hall</h1>
  </div>
)}
export default App;
