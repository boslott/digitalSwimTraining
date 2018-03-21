// This rootReducer will collect all of our reducers in our app and turn them into one reducer

import { combineReducers } from 'redux';

// Reducers are anonymous in the reducer index.js files so we can import them with any name we choose
// import toggle from './toggle/reducer';
import courses from './reducers';

const rootReducer = combineReducers({
  // toggle,
  courses,
});

export default rootReducer;
