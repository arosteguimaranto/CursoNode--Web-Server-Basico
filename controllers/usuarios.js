const { response } = require('express');


const usuariosGet = (req, res = response) =>{
    res
    res.json({
    
        msg: 'GET API controlador'
    });
}

const usuariosPost = (req, res = response) =>{
    
    const {nombre, edad} = req.body;

    res.json({
    
        msg: 'POST API usuariosPost',
        nombre, 
        edad
    });
}

const usuariosPut = (req, res = response) =>{
    res
    res.json({
    
        msg: 'PUT API controlador'
    });
}

const usuariosPatch = (req, res = response) =>{
    res
    res.json({
    
        msg: 'PATCH API controlador'
    });
}

const usuariosDelete = (req, res = response) =>{
    res
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