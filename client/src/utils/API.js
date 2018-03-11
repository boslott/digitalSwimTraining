import axios from "axios";

export default {

  registerSiteAdmin: function(newAdmin) {
    // const newAdmin = {
    //   name,
    //   email,
    //   password,
    //   'password-confirm': passwordConfirm
    // };
    return axios.post('/api/registration/createSiteAdmin', newAdmin);
  },

  registerTeamAdmin: function(newAdmin) {
    return axios.post('/api/registration/createTeamAdmin', newAdmin);
  },

  registerCoach: function(newCoach) {
    return axios.post('/api/registration/createCoach', newCoach);
  },

  registerTeam: function(newTeam) {
    return axios.post('/api/registration/createTeam', newTeam);
  },



  login: function(email, password) {
    // const user = { email, password };
    return axios.post('/api/auth/login', email, password);
  },

  logout: function() {
    return axios.get('/api/auth/logout');
  },

  getUser: function() {
    return axios.get('/api/auth/getUser');
  },

  createPool: function(name, description, chores, reward) {
    const pool = { name, description, chores, reward };
    return axios.post('/api/pool/create', pool);
  },

  getPools: function() {
    return axios.get('/api/pool/getPools');
  },

  getPool: function(id) {
    return axios.get('/api/pool/getPool/' + id);
  },

  deletePool: function(id) {
    return axios.delete('/api/pool/deletePool/' + id);
  },

  addChore: function(name, description) {
    const chore = { name, description };
    return axios.post('/api/chore/create', chore);
  },

  getChores: function() {
    return axios.get('/api/chore/getAll');
  },


  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
