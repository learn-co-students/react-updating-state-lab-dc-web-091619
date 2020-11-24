import React from 'react'

export default class YouTubeDebugger extends React.Component {
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
        this.setState(preState => {
            return {
                settings: {
                    ...preState.settings,
                    bitrate: 12
                }
            }
        })
    }
    
    changeResolution = () => {
        this.setState(preState => {
            return {
                settings: {
                    ...preState.settings,
                    video: {
                        resolution: '720p'
                    }
                }
            }
        })
    }

    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.changeBitrate}>bitrate</button>
                <button className="resolution" onClick={this.changeResolution}>resolution</button>
            </div>
        )
    }
}