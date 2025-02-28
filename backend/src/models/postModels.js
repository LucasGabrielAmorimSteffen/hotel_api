const connection = require('./connection');
const get        = require('./getModels');

const createUsers = async (getAllUsers)=>{
    const { nome } = getAllUsers;
    const dateUTC  = new Date(Date.now()).toUTCString();

    {
        let query = 'INSERT INTO usuarios(nome, email, telefone, senha, data_criacao), VALUES ($1, $2, $3, $4, $5) RETURNING id'
        const { rows } = await connection.query(query, [nome, email, telefone, senha, dateUTC]);
        return {id: createUsers.id};
    }
};

module.exports = {
    createUsers, 
}