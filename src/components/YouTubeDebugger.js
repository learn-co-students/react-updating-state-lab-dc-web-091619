import React from 'react';

export default class YouTubeDebugger extends React.Component {

  constructor() {
    super();

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
  render() {
    return (<div><button className="bitrate" onClick={this.bitrateClicked}>bitrateButton</button>
    <button className="resolution" onClick={this.resolutionClicked}>resolutionButton</button></div>)
  }

  bitrateClicked = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  resolutionClicked = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }

}