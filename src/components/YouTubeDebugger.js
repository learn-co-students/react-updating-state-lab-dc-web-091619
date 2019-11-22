// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component{

 constructor(){
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

 changeBitRate = () => {
   const newVal = {...this.state, settings:{...this.state.settings, bitrate:12}};
   this.setState(newVal)
 };

 changeResolution = () => {
   const newRes = {...this.state, settings: {...this.state.settings, video:{resolution: '720p'}}};
   this.setState(newRes)
 };

  render(){
    return(
      <div>
        <button onClick={this.changeBitRate} className='bitrate'>change bitrate</button>
        <button onClick={this.changeResolution} className='resolution'>change resolution</button>
      </div>
    )
  }
}

export default YouTubeDebugger
