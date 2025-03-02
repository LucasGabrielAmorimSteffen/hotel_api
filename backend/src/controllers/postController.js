const pModels = require('../models/postModels')

const createUsers = async (request, response)=>{
    const createdUser = await pModels.createUsers(request.body);
    return response.status(201).json(createdUser);
};

const createHotel = async (request, response)=>{
    const createdHotel = await pModels.createHotel(request.body);
    return response.status(201).json(createdHotel)
};

const createRooms = async (request, response)=>{
    const createdRooms = await pModels.createRooms(request.body);
    return response.status(201).json(createdRooms);
};

const createReservations = async (request, response) => {
    const createdReservation = await pModels.createReservations(request.body);
    return response.status(201).json(createdReservation);
};

const createCondPayments = async (request, response) => {
    const createdCondPayments = await pModels.createCondPayments(request.body);
    return response.status(201).json(createdCondPayments);
};

const createPayments = async (request, response) => {
    const createdPayments = await pModels.createPayments(request.body);
    return response.status(201).json(createdPayments);
};

const createReviews = async (request, response) => {
    const createdReviews = await pModels.createReviews(request.body);
    return response.status(201).json(createdReviews);
};

module.exports = {
    createUsers,
    createHotel,
    createRooms,
    createReservations,
    createCondPayments,
    createPayments,
    createReviews
}