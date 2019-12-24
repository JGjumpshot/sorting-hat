import React from 'react';
import './Button.css';
class ArrowButton extends React.Component {

    constructor() {
        super();
        this.state = {
          isDisplayed: true
        }
      }
    handleToggle(e) {
        e.preventDefault();
        this.setState({
            isDisplayed: !this.state.isDisplayed
        })
    }

    render() {
        const {isDisplayed} = this.state;
        return (
            <div>
                
                <button onClick={(e) => this.handleToggle(e)} className="button" style={{display: isDisplayed ? 'inline-block' : 'none'}}>
                    Let the sorting begin
                </button>
                
            </div>
        );
    }
    
}

export default ArrowButton;