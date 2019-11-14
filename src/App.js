import React from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import './reset.css';
import './App.css';
import Title from './components/Title';
import ArrowButton from './components/ArrowButton';
//import Test from './pages/Test';
class App extends React.Component {
  constructor() {
    super()
    this.state = {
        showMe:true
    }
  }
  componentWillUnmount() {
      this.setState({
          showMe:!this.state.showMe
      })
  }

  render() {
    return (
      <Router>
        <div className="background">
          <Route exact strict path="/" component={Title}></Route>
          {
            this.state.showMe ? <NavLink onClick={()=>this.componentWillUnmount()} className="button" exact strict to="/test" component={ArrowButton}>Let the sorting begin!</NavLink> : null
          }
                  
        </div>
  
      </Router>
      
    );
  }
}

export default App;
