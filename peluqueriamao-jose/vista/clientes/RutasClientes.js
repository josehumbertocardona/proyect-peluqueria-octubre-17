const express = require('express');
const CRutas = require('../../controlador/clientes/CrearClienteControlador');
const LCRutas = require('../../controlador/clientes/LoginClienteControlador');
const MCRutas = require('../../controlador/clientes/DesactivarClienteControlador');
const VHTRutas = require('../../controlador/clientes/VistaHorarioTrabajadorControlador');

const router = express.Router();

router.post('/usuario/crear', CRutas.crearCliente); // RF02
router.post('/cliente/login', LCRutas.validarCredencial); // RF03
router.put('/usuario/desactivar/:id', MCRutas.modificarestado);  // RF07
router.get('/usuario/horario/:id', VHTRutas.obtenerHorario); //RF06
module.exports = router; 