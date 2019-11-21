// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component{

    constructor() {
        super()
        this.state = {
          timesClicked: 0
        }
      }
    

    click = () => {
        let clicks = this.state.timesClicked + 1
        this.setState({
            timesClicked: clicks 
        })
    }

    render(){
        return (
            <div>
               <button onClick={this.click}>{this.state.timesClicked}</button>
            </div>
        )
    }
}

export default DigitalClicker