import React from 'react';
import './Button.css';

class ArrowButton extends React.Component {

    render(props) {
        // const {isDisplayed} = this.state;
        return (
            <div>
                <button className="button" onClick={() => {
                    return this.props.onClick();
                }}>
                    Let the sorting begin
                </button>
            </div>
        );
    }
    
}


export default ArrowButton;