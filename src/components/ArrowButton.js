import React from 'react';
import './Button.css';
class ArrowButton extends React.Component {

    // constructor(props) {
    //     super(props);
    //     // this.state = {
    //     //   isDisplayed: true
    //     // }
    //   }
    // handleToggle(e) {
    //     e.preventDefault();
    //     this.setState({
    //         isDisplayed: !this.state.isDisplayed
    //     })
    // }
    handleToggle = () => {
        document.getElementsByClassName('button').className = "hideButton";
        console.log('working?')
    }
    render() {
        // const {isDisplayed} = this.state;
        return (
            <div>
                <button className="button" onClick={this.handleToggle()}>
                    {console.log(this.props)}
                    Let the sorting begin
                </button>
                {/* onClick={(e) => this.handleToggle(e)}
                style={{display: isDisplayed ? 'inline-block' : 'none'}}*/}
            </div>
        );
    }
    
}


export default ArrowButton;