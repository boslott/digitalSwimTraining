// Packages
import React, { Component } from 'react';

// Components
import Nav from '../Components/Nav/Nav';
import Footer from '../Components/Footer/Footer';
import RegisterForm from '../Components/RegisterForm/RegisterForm';

class Register extends Component {

  state = {
    userAuth: this.props.isAuthenticated
  }

  authenticate = authenticated => {
    this.setState({ userAuth: true });
    this.props.userHasAuthenticated(true);
  }

  render() {
    const location = this.props.location;
    return (
      <div className='page'>
        <Nav location={location} />
          <div className='container mt-5'>
            <div className='row'>
              <div className='col-sm-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2'>
                <div style={{minHeight: '50vh'}}>
                <RegisterForm />
                </div>
              </div>
            </div>
          </div>
        <Footer />
      </div>
    );
  }
}

export default Register;