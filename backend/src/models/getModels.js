const connection = require('./connection');

const getAllUsers = async function(){
    const users   = await connection.query('SELECT * FROM usuarios');
    return users.rows;    
};

const getAllHotel = async ()=>{
    const hotel   = await connection.query('SELECT * FROM hoteis')
    return hotel.rows;
};

const getAllRooms = async ()=>{
    const rooms   = await connection.query('SELECT * FROM quartos');
    return rooms.rows
};

const getAllReservations = async ()=>{
    const reservations   = await connection.query('SELECT * FROM reservas');
    return reservations.rows;
};

const getAllPayments = async ()=>{
    const payments   = await connection.query('SELECT * FROM pagamentos');
    return payments.rows;
};

const getAllReviews = async ()=>{
    const reviews   = await connection.query('SELECT * FROM avaliacoes');
    return reviews.rows;
}

module.exports = {
    getAllUsers,
    getAllHotel,
    getAllRooms,
    getAllReservations,
    getAllPayments,
    getAllReviews
}