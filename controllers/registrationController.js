// const mongoose = require('mongoose');
// const multer = require('multer');
// const jimp = require('jimp');
// const uuid = require('uuid');

// const Super = mongoose.model('Super');
// const TeamAdmin = mongoose.model('TeamAdmin');
// const Team = mongoose.model('Team');

// To register a new site admin, must validate the information first
// exports.validateSiteAdminRegistrationData = (req, res, next) => {
//   req.sanitizeBody('name');
//   req.checkBody('name', 'You must supply a name!').notEmpty();
//   req.checkBody('email', 'That email is not valid!').isEmail();
//   req.sanitizeBody('email').normalizeEmail({
//     remove_dots: false,
//     remove_extension: false,
//     gmail_remove_subaddress: false,
//   });
//   req.checkBody('password', 'Password cannot be blank!').notEmpty();
//   req.checkBody('password-confirm', 'Confirm Password cannot be blank!').notEmpty();
//   req.checkBody('password-confirm', 'Oops! Your passwords do not match!').equals(req.body.password);

//   const errors = req.validationErrors();
//   if (errors) {
//     console.log(errors);
//     // req.flash('error', errors.map(err => err.msg ));
//     return;
//   }
//   next();
// };

// exports.createSuper = async (req, res) => {
//   console.log(req.body);
//   const newAdmin = new Super(req.body);

//   // model.register method comes from passportLocalMongoose package
//   await Super.register(newAdmin, req.body.password, (err) => {
//     if (err) throw err;
//     console.log(`${req.body.name} is now registered! 😃`);
//     res.json(newAdmin);
//   });
// };

// exports.validateTeamAdminRegistrationData = (req, res, next) => {
//   console.log('beginning validation');
//   req.sanitizeBody('firstName');
//   req.checkBody('firstName', 'You must supply a first name!').notEmpty();
//   req.sanitizeBody('lastName');
//   req.checkBody('lastName', 'You must supply a last name!').notEmpty();
//   req.checkBody('email', 'That email is not valid!').isEmail();
//   req.sanitizeBody('email').normalizeEmail({
//     remove_dots: false,
//     remove_extension: false,
//     gmail_remove_subaddress: false,
//   });
//   req.sanitizeBody('phone');
//   req.checkBody('phone', 'You must provide a phone number!').notEmpty();
//   req.checkBody('password', 'Password cannot be blank!').notEmpty();
//   req.checkBody('password-confirm', 'Confirm Password cannot be blank!').notEmpty();
//   req.checkBody('password-confirm', 'Oops! Your passwords do not match!').equals(req.body.password);

//   const errors = req.validationErrors();
//   if (errors) {
//     console.log('oh no errors!!');
//     console.log(errors);
//     // req.flash('error', errors.map(err => err.msg ));
//     return;
//   }
//   next();
// };

// exports.createTeamAdmin = async (req, res) => {
//   console.log('creating in DB has begun');
//   console.log(req.body);
//   const newAdmin = new TeamAdmin(req.body);

//   // model.register method comes from passportLocalMongoose package
//   await TeamAdmin.register(newAdmin, req.body.password, (err) => {
//     if (err) throw err;
//     console.log(`${req.body.firstName} is now registered with ${req.body.team}! 😃`);
//     res.json(newAdmin);
//   });
// };

// exports.validateTeamRegistrationData = (req, res, next) => {
//   req.sanitizeBody('name');
//   req.checkBody('name', 'You must supply a name!').notEmpty();
//   req.sanitizeBody('phone');
//   req.checkBody('phone', 'You must provide a phone number!').notEmpty();
//   req.sanitizeBody('address1');
//   req.checkBody('address1', 'You must provide an address!').notEmpty();
//   req.sanitizeBody('address2');
//   req.sanitizeBody('city');
//   req.checkBody('city', 'You must provide a city!').notEmpty();
//   req.sanitizeBody('state');
//   req.checkBody('state', 'You must provide a state!').notEmpty();
//   req.sanitizeBody('zip');
//   req.checkBody('zip', 'You must provide a zip!').notEmpty();

//   const errors = req.validationErrors();
//   if (errors) {
//     console.log(errors);
//     // req.flash('error', errors.map(err => err.msg ));
//     return;
//   }
//   next();
// };

// exports.testing = (req, res, next) => {
//   // console.log(req.body);
//   console.log(req.files);
//   next();
// };

// const multerOptions = {
//   storage: multer.memoryStorage(),
//   fileFilter: (req, file, next) => {
//     const isPhoto = file.mimetype.startsWith('image/');
//     if (isPhoto) {
//       console.log('it is a photo!');
//       next(null, true);
//     } else {
//       next({ message: 'That file type isn\'t allowed! ' }, false);
//     }
//   },
// };

// // Saves the file into the memory of the server
// exports.upload = multer(multerOptions).single('logo');

// exports.resize = async (req, res, next) => {
//   // Check if there is no new file to resize
//   console.log('Req.File:');
//   console.log(req.file);
//   if (!req.file) {
//     console.log('sorry not going through');
//     next(); // Skip to the next middleware
//     return;
//   }
//   const extension = req.file.mimetype.split('/')[1];
//   req.body.photo = `${uuid.v4()}.${extension}`;
//   // Now resize
//   const photo = await jimp.read(req.file.buffer);
//   await photo.resize(1024, jimp.AUTO);
//   await photo.write(`./public/images/uploads/teamLogos/${req.body.photo}`);
//   // Once written to the filesystem, keep going!
//   next();
// };

// exports.createTeam = async (req, res) => {
//   console.log('Team!');
//   // const newTeam = await (new Team(req.body)).save();
//   // console.log(`${req.body.name} has been registered!`);
//   // res.json(newTeam);
// };
