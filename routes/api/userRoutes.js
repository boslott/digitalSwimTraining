const router = require('express').Router();
const userController = require('../../controllers/userController'); // eslint-disable-line max-len
const { catchErrors } = require('../../handlers/errorHandlers');

// Matches with /api/user/...

router.route('/registerUser')
  .post(
    // userController.validateUserRegistrationData,
    catchErrors(userController.createUser),
  );

router.route('/signIn')
  .post(catchErrors(userController.signIn));

// router.route('/createTeamAdmin')
//   .post(
//     registrationController.validateTeamAdminRegistrationData,
//     catchErrors(registrationController.createTeamAdmin),
//   );

// router.route('/createTeam')
//   .post(
//     registrationController.testing,
//     registrationController.upload,
//     catchErrors(registrationController.resize),
//     // registrationController.validateTeamRegistrationData,
//     catchErrors(registrationController.createTeam),
//   );

module.exports = router;
