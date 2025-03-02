const connection = require('./connection');
const getModels  = require('./getModels');

const createUsers = async (getAllUsers)=>{
    const { nome, email, telefone, senha_hash } = getAllUsers;
    const dateUTC  = new Date(Date.now()).toUTCString();

    const query = 'INSERT INTO usuarios(nome, email, telefone, senha_hash, data_criacao) VALUES ($1, $2, $3, $4, $5) RETURNING id'
    const { rows } = await connection.query(query, [nome, email, telefone, senha_hash, dateUTC]);
    return { id: rows[0].id }; 
};

const createHotel = async (getAllHotel)=>{
    const { nome, descricao, endereco, cidade, estado, pais, cep, telefone, email, avaliacao_media} = getAllHotel;
    const dateUTC  = new Date(Date.now()).toUTCString();

    const query = 'INSERT INTO hoteis(nome, descricao, endereco, cidade, estado, pais, cep, telefone, email, avaliacao_media, data_criacao) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING id'
    const { rows } = await connection.query(query, [nome, descricao, endereco, cidade, estado, pais, cep, telefone, email, avaliacao_media, dateUTC]);
    return { id: rows[0].id }
};

const createRooms = async (getAllRooms)=>{
    const { hotel_id, tipo, capacidade, preco_diaria, descricao, disponibilidade} = getAllRooms;

    const query = 'INSERT INTO quartos(hotel_id, tipo, capacidade, preco_diaria, descricao, disponibilidade) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id';
    const { rows } = await connection.query(query, [hotel_id, tipo, capacidade, preco_diaria, descricao, 'Disponivel']);
    return { id: rows[0].id}
}

module.exports = {
    createUsers, 
    createHotel,
    createRooms
}