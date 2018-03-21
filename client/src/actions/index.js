import API from '../utils/API';

export const GET_COURSES = 'GET_COURSES';

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