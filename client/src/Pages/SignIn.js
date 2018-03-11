// Packages
import React, { Component } from 'react';

// Components
import Nav from '../Components/Nav/Nav';
import Footer from '../Components/Footer/Footer';
import SignInForm from '../Components/SignInForm/SignInForm';

class SignIn extends Component {
  render() {
    const location = this.props.location;
    return (
      <div className='page'>
        <Nav location={location} />
          <div className='container mt-5'>
            <div className='row'>
              <div className='col-sm-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2'>
                <div style={{minHeight: '50vh'}}>
                <SignInForm />
                </div>
              </div>
            </div>
          </div>
        <Footer />
      </div>
    );
  }
}

export default SignIn;