const express = require('express');
const router = express.Router();
const { getDestinations, getDestinationById, createDestination } = require('../controllers/destinationController');

router.route('/')
    .get(getDestinations)
    .post(createDestination); // In a real app, protect this route for Admin only

router.route('/:id')
    .get(getDestinationById);

module.exports = router;