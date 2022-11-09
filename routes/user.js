const { Router} = require('express');

const {usuariosGet, usuariosPost, usuariosPut, usuariosPatch, usuariosDelete} = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet);


router.put('/', usuariosPost );

router.post('/', usuariosPut );

router.delete('/', usuariosDelete);

router.patch('/', usuariosPatch );


module.exports = router;usuariosDelete