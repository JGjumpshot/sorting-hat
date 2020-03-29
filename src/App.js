import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './reset.css';
import './App.css';
import Title from './components/Title';
import "./components/Button.css";
import GreatHall from './components/GreatHall';
class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.handleClick = this.handleClick.bind(this);
  // }
  // handleClick = () => {
    
  //   // this.setState(() => ({
  //   //   isDisplayed: !this.state.isDisplayed
  //   // }))
  //   this.props.history.match("/greatHall");
  // }

  render() {
    //if(this.state.isDisplayed === true) {
      return(
        <Router>
          <div className="background"></div>
          <Title />
          {/* <Link to="/greatHall"> */}
            <button className="button" onClick={this.props.history.match("/greatHall").bind(this)}>Let the sorting begin</button>
            {/* <ArrowButton isHome={true}/> */}
          {/* </Link> */}
        <Route path="/greatHall" exact component={GreatHall}/>
      </Router>
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
