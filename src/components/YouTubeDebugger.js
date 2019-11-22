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

  changeBitrate = () => {
    this.setState( prevState => {
      return ({
        settings: {
          ...this.state.settings,
          bitrate: prevState.settings.bitrate === 8 ? 12 : 8
        }
      })
    } )
  }

  changeResolution = () => {
    this.setState( prevState => {
      return( {
        settings: {
          ...this.state.settings,
          video: {
            ...this.state.video,
            resolution: prevState.settings.video.resolution === '1080p' ? '720p' : '1080p'
          }
        }
      } )
    } )
  }

  render() {
    return(
      <div>
        <button 
          className="bitrate" 
          onClick={this.changeBitrate}
        >
          bitrate: {this.state.settings.bitrate}
        </button>

        <button 
          className="resolution" 
          onClick={this.changeResolution}
        >
          resolution: {this.state.settings.video.resolution}
        </button>
      </div>
    )
  }
}

export default YouTubeDebugger