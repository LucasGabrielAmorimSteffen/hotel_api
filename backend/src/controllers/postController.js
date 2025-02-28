const pModels = require('../models/postModels')

const createUsers = async (request, response)=>{
    const createdUser = await pModels.createUsers(request.body);
    return response.status(201).json(createdUser);
};

module.exports = {
    createUsers,
    
}