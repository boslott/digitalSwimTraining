// Packages
import React, { Component } from 'react';

// Component CSS
import './LessonComments.css';

// Components
import AddComment from '../AddComment/AddComment';
import CommentListing from '../CommentListing/CommentListing';

class LessonComments extends Component {
  render() {
    return (
      <div className='lesson-comments'>
        <AddComment />
        <CommentListing />
        <CommentListing />
        <CommentListing />
        <CommentListing />
      </div>
    );
  }
}

export default LessonComments;