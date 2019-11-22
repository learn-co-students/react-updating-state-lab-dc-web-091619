// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component{

  constructor(){
    super();
    this.state = {
      timesClicked: 0
    }
  }

  incrementOne = () => {
    const newVal = this.state.timesClicked + 1;
    this.setState({
      timesClicked: newVal
    })
  }


  render(){
    return(
      <div>
        <button onClick={this.incrementOne}>{this.state.timesClicked}</button>
      </div>
    )
  }
}

export default DigitalClicker
