// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {
  constructor() { 
    super()
    this.state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }
}

bitrate = () => {
    let bitrate = this.state.settings.bitrate 
    this.setState({
        settings: {
            ...this.state.settings,
            bitrate: 12
        }
    })
}

resolution = () => {
    let resolution = this.state.settings.video.resolution
    this.setState({
        settings: {
            ...this.state.settings,
            video:{resolution: "720p"}
        }
    }, ()=> console.log(resolution))
}

    render(){
        return (
            <div>
               <button className='bitrate' onClick={this.bitrate}>Bitrate</button>
               <button className='resolution' onClick={this.resolution}>Resolution</button>
            </div>
        )
    }
}

export default YouTubeDebugger