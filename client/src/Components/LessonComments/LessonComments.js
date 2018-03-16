// Packages
import React, { Component } from 'react';

// Component CSS
import './LessonComments.css';


class LessonComments extends Component {
  render() {
    const identifier = this.props.disqusIdentifer;
    const disqus_config = function () {
      this.page.url = 'http://digitalswimtraining.com';
      this.page.identifier = identifier;
    };
      // (function() { // DON'T EDIT BELOW THIS LINE
      // var d = document, s = d.createElement('script');
      // s.src = 'https://digitalswimtraining-com.disqus.com/embed.js';
      // s.setAttribute('data-timestamp', +new Date());
      // (d.head || d.body).appendChild(s);
      // })();

    return (
      <div>
        <div className='lesson-comments'  id='disqus_thread'></div>
        <script>
          {
            (function() { // DON'T EDIT BELOW THIS LINE
            var d = document, s = d.createElement('script');
            s.src = 'https://digitalswimtraining-com.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
            })()
          }
        </script>
      </div>
    );
  }
}

export default LessonComments;