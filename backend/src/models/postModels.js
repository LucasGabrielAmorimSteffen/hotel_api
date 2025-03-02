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
    const { rows } = await connection.query(query, [hotel_id, tipo, capacidade, preco_diaria, descricao, 'disponivel']);
    return { id: rows[0].id}
};

const createReservations = async (getAllReservations)=>{
    const { usuario_id, quarto_id, data_checkin, data_checkout, preco_total, status, data_criacao} =  getAllReservations;
    const dateUTC  = new Date(Date.now()).toUTCString();

    const query = 'INSERT INTO reservas(usuario_id, quarto_id, data_checkin, data_checkout, preco_total, status, data_criacao) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id, quarto_id, data_checkin, data_checkout';
    const { rows } = await connection.query(query, [usuario_id, quarto_id, data_checkin, data_checkout, preco_total, 'Reservado', dateUTC]);
    return { id: rows[0].id};
};

const createCondPayments = async (getAllCondPayments)=>{
    const { descricao, tipo, created_at, parcela } = getAllCondPayments;
    const dateUTC  = new Date(Date.now()).toUTCString();
    
    const query = 'INSERT INTO condpagamento(descricao, tipo, created_at, parcela) VALUES($1, $2, $3, $4) RETURNING id, descricao, tipo, parcela';
    const { rows } = await connection.query(query, [descricao, tipo, dateUTC, parcela]);
    return {id: rows[0].id,descricao,tipo,parcela};
};

const createPayments = async (getAllPayments) => {
    const { reserva_id, metodo_pagamento, status, valor_pago, data_pagamento} = getAllPayments;
    const dateUTC  = new Date(Date.now()).toUTCString();

    const query = 'INSERT INTO pagamentos(reserva_id, metodo_pagamento, status, valor_pago, data_pagamento) VALUES ($1, $2, $3, $4, $5) RETURNING reserva_id, metodo_pagamento, status, valor_pago, data_pagamento';
    const { rows } = await connection.query(query, [reserva_id, metodo_pagamento, 'Pago', valor_pago, dateUTC]);
    return {id: rows[0].id};
};

const createReviews = async (getAllReviews) => {
    const { usuario_id, hotel_id, nota, comentario, data_avaliacao } = getAllReviews;
    const dateUTC  = new Date(Date.now()).toUTCString();
    
    const query = 'INSERT INTO avaliacoes(usuario_id, hotel_id, nota, comentario, data_avaliacao) VALUES($1, $2, $3, $4, $5) RETURNING usuario_id, hotel_id, nota, comentario, data_avaliacao';
    const { rows } = await connection.query(query, [usuario_id, hotel_id, nota, comentario, dateUTC]);
    return {id: rows[0].id};
}

module.exports = {
    createUsers, 
    createHotel,
    createRooms,
    createReservations,
    createCondPayments,
    createPayments,
    createReviews
}