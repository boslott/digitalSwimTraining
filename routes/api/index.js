const router = require('express').Router();
const userRoutes = require('./userRoutes');
const authRoutes = require('./authRoutes');

// User Routes
router.use('/user', userRoutes);

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
