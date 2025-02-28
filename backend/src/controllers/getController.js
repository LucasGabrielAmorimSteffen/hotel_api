const { response } = require('express');
const models = require('../models/getModels');

const getAllUsers = async (request, response)=>{
    const users = await models.getAllUsers();
    return response.status(200).json(users)
};

const getAllHotel = async (request, response)=>{
    const hotel = await models.getAllHotel();
    return response.status(200).json(hotel)
};

const getAllRooms = async (request, response)=>{
    const rooms = await models.getAllRooms();
    return response.status(200).json(rooms)
};

const getAllReservations = async (request, response)=>{
    const reservations = await models.getAllReservations();
    return response.status(200).json(reservations)
};

const getAllPayments = async (request, response)=>{
    const payments = await models.getAllPayments();
    return response.status(200).json(payments)
};

const getAllReviews = async (request, response)=>{
    const reviews = await models.getAllReviews();
    return response.status(200).json(reviews)
};

module.exports = {
    getAllUsers,
    getAllHotel,
    getAllRooms,
    getAllReservations,
    getAllPayments,
    getAllReviews
}