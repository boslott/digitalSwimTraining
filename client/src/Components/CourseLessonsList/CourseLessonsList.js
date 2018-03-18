// Packages
import React, { Component } from 'react';

// Component CSS
import './CourseLessonsList.css';

// Components
import LessonsListCard from '../LessonsListCard/LessonsListCard';

class CourseLessonsList extends Component { 
  render() {
    let cnt = 1;
    const list = this.props.lessons.map(lesson => {
      if (cnt % 2 !== 0) {
        cnt++;
        return <LessonsListCard key={lesson.episodeNum} bgShade='lt' lesson={lesson} />
      } else {
        cnt++;
        return <LessonsListCard key={lesson.episodeNum} bgShade='dk' lesson={lesson} />
      }
    });
    return (
      <div className='container-fluid lessons-list__bg'>
        <div className='container lessons-list__outer py-5'>
          {list}
            {/* <LessonsListCard bgShade='lt'/>
            <LessonsListCard bgShade='dk' />
            <LessonsListCard bgShade='lt' />
            <LessonsListCard bgShade='dk' /> */}
        </div>
      </div>
    );
  }
}

export default CourseLessonsList;