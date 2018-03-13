// Packages
import React, { Component } from 'react';

// Components
import Nav from '../Components/Nav/Nav';
import Footer from '../Components/Footer/Footer';
import SignInForm from '../Components/SignInForms/SignInForm';
import ResetPassForm from '../Components/SignInForms/ResetPassForm';

class SignIn extends Component {

  state = {
    userAuth: this.props.isAuthenticated
  }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({ userAuth: this.nextProps.isAuthenticated });
  // }

  authenticate = authenticated => {
    this.setState({ userAuth: true });
    this.props.userHasAuthenticated(true);
  }

  render() {
    return (
      <div className='page'>
        <Nav
          location={this.props.location}
          userAuth={this.state.userAuth}
          userHasAuthenticated={this.props.userHasAuthenticated}
        />
          <div className='container mt-5'>
            <div className='row'>
              <div className='col-sm-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2'>
                <div style={{minHeight: '50vh'}}>
                <SignInForm props={this.props} auth={this.authenticate} />
                <ResetPassForm />
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