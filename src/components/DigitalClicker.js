import React from 'react'

class DigitalClicker extends React.Component {
  constructor() {
    super()

    this.state = {
      timesClicked: 0
    }
  }

  incrementClicker = () => {
    this.setState(prevState => {
      return {
        timesClicked: prevState.timesClicked + 1
      }
    })
  }

  render() {
    return (
      <div className="clicks">
        <div>{this.state.timesClicked}</div>
        
        <button 
          onClick={this.incrementClicker}
        >
          {this.state.timesClicked}
        </button>
      </div>
    )
  }
}

export default DigitalClicker