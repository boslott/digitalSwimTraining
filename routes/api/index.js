const router = require('express').Router();
const registrationRoutes = require('./registrationRoutes');
const authRoutes = require('./authRoutes');

// Registration Routes
router.use('/registration', registrationRoutes);

// Auth routes
router.use('/auth', authRoutes);

// Pool routes
// router.use('/pool', poolRoutes);

// Chore routes
// router.use('/chore', choreRoutes);

// .get(articleController.findAll)
// .post(articleController.create);

// Matches with "/api/books/:id"
// router
// .route("/:id")
// .get(articleController.findById)
// .delete(articleController.remove);

module.exports = router;
