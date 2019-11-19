// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component{
    constructor(){
        super();

        this.state = {
            timesClicked: 0
        }
    }

    clickHandler = () => {
        this.setState(previousState => {
            console.log(previousState)
            return {
                timesClicked: previousState.timesClicked + 1 //must update whatever prop was named in the constructor of the state
            }
        }, console.log(this.state.timesClicked))
    }

    render(){
        return (
            <div>
                <button onClick={this.clickHandler}>
                    {this.state.timesClicked}
                </button>
            </div>
        )
    }
}

export default DigitalClicker