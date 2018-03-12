const mongoose = require('mongoose');

const User = mongoose.model('User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// To register a new user, must validate the information first
exports.validateUserRegistrationData = (req, res, next) => {
  req.sanitizeBody('name');
  req.checkBody('name', 'You must supply a name!').notEmpty();
  req.checkBody('email', 'That email is not valid!').isEmail();
  req.sanitizeBody('email').normalizeEmail({
    remove_dots: false,
    remove_extension: false,
    gmail_remove_subaddress: false,
  });
  req.checkBody('password', 'Password cannot be blank!').notEmpty();
  req.checkBody('password-confirm', 'Confirm Password cannot be blank!').notEmpty();
  req.checkBody('password-confirm', 'Oops! Your passwords do not match!').equals(req.body.password);

  const errors = req.validationErrors();
  if (errors) {
    console.log(errors);
    // req.flash('error', errors.map(err => err.msg ));
    return;
  }
  next();
};

exports.createUser = async (req, res) => {
  console.log(req.body);
  const user = new User(req.body);
  user.hashPassword = bcrypt.hashSync(req.body.password, 10);
  await user.save((err, user) => {
    if (err) {
      return res.status(400).send({ message: err });
    }
    user.hashPassword = undefined;
    return res.json({ token: jwt.sign({ name: user.name, id: user._id, role: user.role }, process.env.JWT_SECRET, {expiresIn: 60 * 60 * 24})});
  });
};

exports.signIn = async (req, res) => {
  await User.findOne({ email: req.body.email }, (err, user) => {
    if(err) throw err;
    if(!user) {
      res.status(401).json({ message: 'Authentication Failed. User not found.'});
    } else if(user) {
      if(!user.comparePassword(req.body.password)) {
        res.status(401).json({ message: 'Authentication Failed. Wrong password.'});
      } else {
        return res.json({ token: jwt.sign({ name: user.name, id: user._id, role: user.role }, process.env.JWT_SECRET, {expiresIn: 60 * 60 * 24})});
      }
    }
  });
};
