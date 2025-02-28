const validateFieldNome = (request, response, next)=>{
    const { body } = request;

    if(body.nome === undefined){
        response.status(400).json({ message: 'The field nome is required!'})
    }

    if(body.nome === ""){
        response.status(400).json({ message: 'The name cannot is empty!'})
    }
}

module.exports = {
    validateFieldNome,
    validateFieldEmail,
    validateFieldSenha
}