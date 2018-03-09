const router = require('express').Router();
const registrationController = require('../../controllers/registrationController');
const { catchErrors } = require('../../handlers/errorHandlers');

// Matches with /api/registration/...

router.route('/createSiteAdmin')
  .post(
    registrationController.validateSiteAdminRegistrationData,
    catchErrors(registrationController.createSuper),
  );

router.route('/createTeamAdmin')
  .post(
    registrationController.validateTeamAdminRegistrationData,
    catchErrors(registrationController.createTeamAdmin),
  );

router.route('/createTeam')
  .post(
    registrationController.testing,
    registrationController.upload,
    catchErrors(registrationController.resize),
    // registrationController.validateTeamRegistrationData,
    catchErrors(registrationController.createTeam),
  );

module.exports = router;
