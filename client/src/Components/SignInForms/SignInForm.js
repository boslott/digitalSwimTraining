// Packages
import React, { Component } from 'react';
import { Card, CardTitle } from 'react-materialize';
import { Redirect } from 'react-router-dom';
import API from '../../utils/API';

// RegisterForm CSS - no sense in repeating the style code
import '../RegisterForm/RegisterForm.css';

class SignInForm extends Component {

  state = {
    email: '',
    password: '',
    redirect: false
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    localStorage.setItem('token', '');
    API.signIn(this.state)
      .then(user => {
        const token = JSON.stringify(user.data);
        localStorage.setItem('token', token);
        this.props.auth(true);
      })
      .catch(err => console.log(err));
    this.setState({ email: '', password: '', redirect: true });
    // this.props.history.push('/');
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
    return (
      <Card title='' className='my-5'>
        <CardTitle className='card-title' image=''>SIGN IN</CardTitle>
        <form>
          <div className='container mt-5'>
            <div className='row form-group pr-1'>
              <div className='col-sm-3 col-md-3 offset-md-1 text-center'>
                <label htmlFor="email">Email:</label>
              </div>
              <div className='col-sm-9 col-md-7'>
                <input
                  type='email'
                  name='email'
                  required
                  className='form-control'
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div className='row form-group pr-1'>
              <div className='col-sm-3 col-md-3 offset-md-1 text-center'>
                <label htmlFor="password">Password:</label>
              </div>
              <div className='col-sm-9 col-md-7'>
                <input
                  type='password'
                  name='password'
                  required
                  className='form-control'
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div className='row my-5'>
              <div className='col-sm-9 offset-sm-3 col-md-10 offset-md-1'>
                <button
                  type='submit'
                  className='btn btn-warning btn-block text-white'
                  onClick={this.handleFormSubmit}
                > Submit →
                </button>
              </div>
            </div>
          </div>
        </form>
      </Card>
    );
  }
}

export default SignInForm;