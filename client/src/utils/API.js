import axios from "axios";

export default {

  registerUser: function(userData) {
    const newUser = {
      name: userData.name,
      email: userData.email,
      password: userData.password
    };
    return axios.post('/api/user/registerUser', newUser);
  },

  signIn: function(userData) {
    const user = {
      email: userData.email,
      password: userData.password
    };
    return axios.post('/api/user/signIn', user);
  },

  logout: function() {
    return axios.get('/api/auth/logout');
  },

  getUser: function(tokenData) {
    const token = JSON.parse(tokenData);
    return axios.post('/api/user/getUser', token);
  },

  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },

};
