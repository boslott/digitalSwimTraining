import React from 'react';
import ReactDOM from 'react-dom';
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import { faHome, faInfoCircle, faListUl, faEnvelope, faPlayCircle } from '@fortawesome/fontawesome-free-solid'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './include/bootstrap';

// Font Awesome icons library
fontawesome.library.add(brands, faHome, faInfoCircle, faListUl, faEnvelope, faPlayCircle);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
