const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const validator = require('validator');
const bcrypt = require('bcrypt');
const mongodbErrorHandler = require('mongoose-mongodb-errors');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please supply a Manager name',
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    validate: [validator.isEmail, 'Invalid Email Address'],
    required: 'Please supply an email address',
  },
  hashPassword: {
    type: String,
    required: 'You must supply a password',
  },
  role: {
    type: String,
    default: 'user',
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

userSchema.plugin(mongodbErrorHandler);
userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.hashPassword);
};

module.exports = mongoose.model('User', userSchema);
