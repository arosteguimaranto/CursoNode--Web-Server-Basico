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
    const existeEmail = await Usuario.findOne({correo});
    if( existeEmail) {
        return res.status(400).json({
            msg: 'El correo ya esta registrado'
        })
    }
    // encriptt la contrase;a
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);


    // guardar en BD
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