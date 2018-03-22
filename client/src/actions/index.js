import API from '../utils/API';

export const GET_COURSES = 'GET_COURSES';
export const GET_COURSE = 'GET_COURSE';

export function getCourses() {
  return async function(dispatch) {
    const res = await API.getCourses();
    const courses = res.data;
    // const courses = await res.json();
    return dispatch({
      type: GET_COURSES,
      data: courses,
    });
  };
}

export function getCourse(slug) {
  return async function(dispatch) {
    const res = await API.getCourse(slug);
    const course = res.data;
    return dispatch({
      type: GET_COURSE,
      data: course,
    });
  };
}