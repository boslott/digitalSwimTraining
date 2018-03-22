// Packages
import React, { Component } from 'react';

// Component CSS
import './About.css';

// Components
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';

class About extends Component {
  render() {
    return (
      <div>
        <Nav location={this.props.location} userAuth={this.props.isAuthenticated} />
        {/* <div style={{minHeight:'50vh'}}>About</div> */}
        <div className='container'>
          <div className='row'>
            <div class='outer'>
              <div className='row'>
                <div className='col-sm-4'>
                  <img src='/images/bo-author2.JPG' alt='Bo Slott swim coach and web developer'/>
                </div>
                <div className='col-sm-8'>
                  <h2>Bo Slott</h2>
                  <br />
                  <h3>Swim Coach and Web Developer</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;