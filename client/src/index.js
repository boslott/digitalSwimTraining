import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { save, load } from 'redux-localstorage-simple';
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import { faHome, faInfoCircle, faListUl, faEnvelope, faPlayCircle, faUserCircle, faUsers } from '@fortawesome/fontawesome-free-solid'
import './index.css';
import App from './App';
import './include/bootstrap';
import rootReducer from './rootReducer';

// Font Awesome icons library
fontawesome.library.add(brands, faHome, faInfoCircle, faListUl, faEnvelope, faPlayCircle, faUserCircle, faUsers);

// Redux Middleware
const middleware = [logger, thunk];

// Create Store accepts inital reducter (rootReducer here), initial state, and middleware
// composeWithDevTools is our middleware right now
// The middle parameter is the initial state
// Using redux-localstorage-simple, the load() method will look into our local storage and load the state if it exists
const store = createStore(
  rootReducer,
  load(),
  composeWithDevTools(applyMiddleware(...middleware, save())),
);
// store.subscribe(() => console.log('store', store.getState()));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
