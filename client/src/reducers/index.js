// import { combineReducers } from 'redux';
import { GET_COURSES } from '../actions/index';

const initialState = {
  courses: [],
  coursesLoaded: false,
  coursesLoadedAt: null,
  course: {},
  courseLoaded: false,
}

export default function (state = initialState, action) {
  const { type, data } = action;
  switch(type) {
    case GET_COURSES:
      return {
        ...state,
        courses: data,
        coursesLoaded: true,
        coursesLoadedAt: new Date(),
      };
    default:
      return state;
  }
}
