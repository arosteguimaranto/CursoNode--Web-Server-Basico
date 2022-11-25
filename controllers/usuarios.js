const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

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

    
  
    const {nombre, correo, password, rol } = req.body; 
    const usuario = new Usuario({nombre, correo, password, rol});

    // verificar si el correo existe
   



    // guardar en BD
    await usuario.save();

    res.json({
    
        msg: 'POST API usuariosPost', 
        usuario,
        
    });
}

const usuariosPut = async (req, res = response) =>{
    
    const {id} =  req.params;
    const {password, google, correo, ...resto } = req.body;

    //TODO validar contra base de datos
    if( password) {
    // encriptt la contrase;a
    const salt = bcryptjs.genSaltSync();
    resto.password = bcryptjs.hashSync(password, salt);

    }

    const usuario = await Usuario.findByIdAndUpdate(id, resto);

    res.json({
    
        msg: 'PUT API controlador',
        usuario
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