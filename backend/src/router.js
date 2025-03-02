const express = require('express');

const router = express.Router();
const getController  = require('./controllers/getController');
const postController = require('./controllers/postController');

const postmiddleware = require('./middlewares/postMiddlewares');

// GET ROUTES
router.get('/users', getController.getAllUsers);
router.get('/hotel', getController.getAllHotel)
router.get('/rooms', getController.getAllRooms)
router.get('/reservations', getController.getAllReservations);
router.get('/cpayments', getController.getAllCondPayments);
router.get('/payments', getController.getAllPayments);
router.get('/reviews', getController.getAllReviews);

// POST ROUTES
router.post('/users', postmiddleware.RequiredFieldsUser, postController.createUsers);
router.post('/hotel', postmiddleware.RequiredFieldsHotel, postController.createHotel);
router.post('/rooms', postmiddleware.RequiredFieldsRooms, postController.createRooms);
router.post('/reservations', postmiddleware.RequiredFieldsReservation, postController.createReservations);
router.post('/cpayments', postmiddleware.RequiredFieldsCondPayments, postController.createCondPayments);
router.post('/payments', postmiddleware.RequiredFieldsPayments, postController.createPayments);
router.post('/reviews', postmiddleware.RequiredFieldsReviews, postController.createReviews);

module.exports = router;