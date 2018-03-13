// Packages
import React, { Component } from 'react';

// Components
import Nav from '../Components/Nav/Nav';
import Footer from '../Components/Footer/Footer';

class NotFound extends Component {
  render() {
    return (
      <div className='page'>
        <Nav location={this.props.location}/>
        <h1>Too Bad So Sad. You Can't Find Your Page!</h1>
        <div style={{minHeight: '50vh'}}></div>
        <Footer />
      </div>
    );
  }
}

export default NotFound;