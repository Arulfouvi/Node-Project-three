const express = require('express');

const {
  getBootcamps,
  getBootcamp,
  createBootcamps,
  updateBootcamps,
  deleteBootcamps,
} = require('../controllers/bootcamps');

const router = express.Router(); // Use express.Router() to create a router instance

router.route('/').get(getBootcamps).post(createBootcamps);

router
  .route('/:id')
  .get(getBootcamps)
  .put(updateBootcamps)
  .delete(deleteBootcamps);

module.exports = router;
