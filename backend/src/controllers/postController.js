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
    return response.status(201).json(createRooms);
}

module.exports = {
    createUsers,
    createHotel,
    createRooms,
}