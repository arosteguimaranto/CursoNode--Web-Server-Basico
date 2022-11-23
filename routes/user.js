const { Router} = require('express');
const {check } = require('express-validator');

const {usuariosGet, usuariosPost, usuariosPut, usuariosPatch, usuariosDelete} = require('../controllers/usuarios');
const { esRolValido, emailExiste } = require('../helpers/db-validators');
const {validarCampos} = require('../middlewares/validar-campos');

const router = Router();

router.get('/', usuariosGet);


router.put('/:id', usuariosPut );

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe de ser mas de 6 letras').isLength({min: 6}),
    check('correo').custom(emailExiste),
    //check('rol', 'No es un rol valido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
     check('rol').custom( esRolValido),
    validarCampos
], usuariosPost );

router.delete('/', usuariosDelete);

router.patch('/', usuariosPatch );


module.exports = router;