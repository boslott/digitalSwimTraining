// Packages
import React, { Component } from 'react';
import { Card, CardTitle } from 'react-materialize';

// RegisterForm CSS
import './RegisterForm.css';

class RegisterForm extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: ''
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <Card title='' className='my-5'>
        <CardTitle className='card-title' image=''>REGISTER</CardTitle>
        <form>
          <div className='container mt-5'>
            <div className='row form-group'>
              <div className='col-sm-3 col-md-3 offset-md-1 text-center'>
                <label htmlFor="name">Name:</label>
              </div>
              <div className='col-sm-9 col-md-7'>
                <input
                  type='text'
                  name='name'
                  required
                  className='form-control'
                  value={this.state.name}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div className='row form-group'>
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
            <div className='row form-group'>
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
            <div className='row form-group'>
              <div className='col-sm-3 col-md-3 offset-md-1 text-center'>
                <label htmlFor="password">Confirm Password:</label>
              </div>
              <div className='col-sm-9 col-md-7'>
                <input
                  type='password'
                  name='passwordConfirm'
                  required
                  className='form-control'
                  value={this.state.passwordConfirm}
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

export default RegisterForm;