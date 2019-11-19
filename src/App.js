import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './reset.css';
import './App.css';
import Title from './components/Title';
import ArrowButton from './components/ArrowButton';
//import Test from './pages/Test';
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      showMe: false
    }
  }
  componentWillUnmount() {
    this.setState({
      showMe: !this.state.showMe
    })
  }



  render() {
    return (
      <Router>
        <div className="background">
          <Title />
          <Link exact strict to="/">Home</Link>
          <Link to="/greatHall">
            {
              <ArrowButton />           
            }
          </Link>
          <Route exact strict path="/" component={Title}></Route>
          <Route exact strict path="/greatHall"></Route>
          {/* <NavLink path="/test" component={Test}> */}
          {/* {
            this.state.showMe ? <NavLink onClick={()=>this.componentWillUnmount()} className="button" exact strict to="/test" component={ArrowButton}>Let the sorting begin!</NavLink> : null
          } */}
          {/* </NavLink> */}



        </div>

      </Router>

    );
  }
}

export default App;
