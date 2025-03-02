const RequiredFieldsUser = (request, response, next)=>{
    const { body } = request;

    if(body.nome === undefined  || body.email === undefined || body.senha_hash === undefined){
        response.status(400).json({ message: 'Your request has a required fields undefined!'})
    }
    if(body.nome === "" || body.email === "" || body.senha_hash === ""){
        response.status(400).json({ message: 'Your request has a required fields empty!'})
    }

    next();
};

const RequiredFieldsHotel = (request, response, next)=>{ 
    const { body } = request;

    if(body.nome === undefined || body.endereco === undefined || body.cidade === undefined || body.estado === undefined || body.pais === undefined){
        response.status(400).json({ message: 'Your request has a required fields undefined!'})
    }
    if(body.nome === "" || body.endereco === "" || body.cidade === "" || body.estado === "" || body.pais === ""){
        response.status(400).json({ message: 'Your request has a required fields empty!'})
    }

    next();
};

const RequiredFieldsRooms = (request, response, next)=>{
    const { body } = request;

    if(body.tipo === undefined || body.capacidade === undefined || body.preco_diaria === undefined){
        response.status(400).json({ message: 'Your request has a required fields undefined!'})
    }
    if(body.tipo === "" || body.capacidade === "" || body.preco_diaria === ""){
        response.status(400).json({ message: 'Your request has a required fields empty!'})
    }

    next();
};

const RequiredFieldsReservation = (request, response, next)=>{
    const {body} = request;

    if(body.data_checkin === undefined || body.data_checkout === undefined || body.preco_total === undefined){
        response.status(400).json({ message: 'Your request has a required fields undefined!'})
    }
    if(body.data_checkin === "" || body.data_checkout === "" || body.preco_total === ""){
        response.status(400).json({ message: 'Your request has a required fields empty!'})
    }

    next();
};

const RequiredFieldsCondPayments = (request, response, next)=>{
    const {body} = request;

    if(body.descricao === undefined || body.tipo === undefined || body.parcela === undefined){
        response.status(400).json({ message: 'Your request has a required fields undefined!'})
    }
    if(body.descricao === "" || body.tipo === "" || body.parcela === ""){
        response.status(400).json({ message: 'Your request has a required fields empty!'})
    }

    next();
};

const RequiredFieldsPayments = (request, response, next)=>{
    const {body} = request;

    if(body.reserva_id === undefined || body.metodo_pagamento === undefined || body.valor_pago === undefined){
        response.status(400).json({ message: 'Your request has a required fields undefined!'})
    }
    if(body.reserva_id === undefined || body.metodo_pagamento === "" || body.valor_pago === ""){
        response.status(400).json({ message: 'Your request has a required fields empty!'})
    }

    next();
};

const RequiredFieldsReviews = (request, response, next)=>{
    const {body} = request;

    if(body.usuario_id === undefined || body.hotel_id === undefined || body.nota === undefined || body.comentario === undefined){
        response.status(400).json({ message: 'Your request has a required fields undefined!'})
    }
    if(body.usuario_id === "" || body.hotel_id === "" || body.nota === "" || body.comentario === ""){
        response.status(400).json({ message: 'Your request has a required fields empty!'})
    }

    if (body.nota < 0 || body.nota > 10){
        response.status(400).json({ message: 'Your rating must be between 0 and 10'})
    }

    next();
};


module.exports = {
    RequiredFieldsUser,
    RequiredFieldsHotel,
    RequiredFieldsRooms,
    RequiredFieldsReservation,
    RequiredFieldsCondPayments,
    RequiredFieldsPayments,
    RequiredFieldsReviews
}