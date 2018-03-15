// Packages
import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

// Component CSS
import './AddComment.css';

class AddComment extends Component {
  render() {
    return (
      <div className='add__comment'>
        <div className='row total-comments'>
          <p>5 Comments</p>
        </div>
        <div className='row add-comment__input-row'>
          <div className='col-sm-2 add-comment__profile-pic'>
            <FontAwesomeIcon icon='user-circle' size='4x' />
          </div>
          <div className='col-sm-10'>
            <form action="" className='add-comment__form'>
              <input
                type='text'
                name='comment'
                className='add-comment__input-field'
                size='60'
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddComment;