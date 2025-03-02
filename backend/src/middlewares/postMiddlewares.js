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
}
module.exports = {
    RequiredFieldsUser,
    RequiredFieldsHotel,
    RequiredFieldsRooms,
}