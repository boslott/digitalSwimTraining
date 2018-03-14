// Packages
import React, { Component } from 'react';

// Component CSS
import './CourseLessonsList.css';

// Components
import LessonsListCard from '../LessonsListCard/LessonsListCard';

class CourseLessonsList extends Component {
  render() {
    return (
      <div className='container-fluid lessons-list__bg'>
        <div className='container lessons-list__outer py-5'>
            <LessonsListCard bgShade='lt'/>
            <LessonsListCard bgShade='dk' />
            <LessonsListCard bgShade='lt' />
            <LessonsListCard bgShade='dk' />
        </div>
      </div>
    );
  }
}

export default CourseLessonsList;