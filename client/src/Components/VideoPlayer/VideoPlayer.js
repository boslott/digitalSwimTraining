// Packages
import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

// Component CSS
import './VideoPlayer.css';

class VideoPlayer extends Component {
  render() {
    return (
      <div className='video-player flex justify-center'>
        <FontAwesomeIcon icon='play-circle' size='4x' />
      </div>
    );
  }
}

export default VideoPlayer;