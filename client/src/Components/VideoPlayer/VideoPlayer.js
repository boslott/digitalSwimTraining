// Packages
import React, { Component } from 'react';

// Component CSS
import './VideoPlayer.css';

class VideoPlayer extends Component {
  render() {
    return (
      <iframe title='video-player' className='player' src='https://player.vimeo.com/video/24993984' width='1280' height='720' frameborder='1' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    );
  }
}

export default VideoPlayer;