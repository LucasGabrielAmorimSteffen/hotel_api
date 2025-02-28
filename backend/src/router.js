const express = require('express');

const router = express.Router();
const getController = require('./controllers/getController');

// GET ROUTES
router.get('/users', getController.getAllUsers);
router.get('/hotel', getController.getAllHotel)
router.get('/rooms', getController.getAllRooms)
router.get('/reservations', getController.getAllReservations);
router.get('/payments', getController.getAllPayments);
router.get('/reviews', getController.getAllReviews);

// POST ROUTES

module.exports = router;