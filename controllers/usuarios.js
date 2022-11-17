const { response, request } = require('express');

const Usuario = require('../models/usuario'); 



const usuariosGet = (req = request, res = response) =>{
    
    const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;
    res.json({
    
        msg: 'GET API controlador',
        q,
        nombre,
        apikey,
        page,
        limit
        
        
    });
}

const usuariosPost = async(req, res = response) =>{

  
    const body = req.body; 
    const usuario = new Usuario(body);

    await usuario.save();

    res.json({
    
        msg: 'POST API usuariosPost', 
        usuario,
        
    });
}

const usuariosPut = (req, res = response) =>{
    
    const {id} =  req.params;

    res.json({
    
        msg: 'PUT API controlador',
        id
    });
}

const usuariosPatch = (req, res = response) =>{
    
    res.json({
    
        msg: 'PATCH API controlador'
    });
}

const usuariosDelete = (req, res = response) =>{
    
    res.json({
    
        msg: 'DELETE API controlador'
    });
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete

}