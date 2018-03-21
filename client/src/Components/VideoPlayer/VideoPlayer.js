// Packages
import React, { Component } from 'react';

// Component CSS
import './VideoPlayer.css';

class VideoPlayer extends Component {
  render() {
    return (
      <iframe title='video-player' className='player' src={this.props.lesson.videoURL} width='1280' height='720' frameBorder='1' webkitallowfullscreen='true' mozallowfullscreen='true' allowFullScreen='true'></iframe>
    );
  }
}

export default VideoPlayer;