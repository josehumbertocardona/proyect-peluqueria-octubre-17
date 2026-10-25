const express = require('express');
const CRutas = require('../../controlador/admin/CrearClienteControlador');
const TRutas = require('../../controlador/admin/CrearTrabajadorControlador');
const ARutas = require('../../controlador/admin/CrearAdminControlador');
const LRutas = require('../../controlador/admin/LoginAdminControlador');
const MCRutas = require('../../controlador/admin/DesactivarClienteControlador');
const MTRutas = require('../../controlador/admin/DesactivarTrabajadorControlador');
const ATRutas = require('../../controlador/admin/ActivarTrabajadorControlador');
const ACRutas = require('../../controlador/admin/ActivarClienteControlador');

const router = express.Router();

router.post('/seguridad/crearCliente', CRutas.crearCliente); // RF01
router.post('/seguridad/crearTrabajador', TRutas.crearTrabajador); // RF04
router.post('/seguridad/crearAdmin', ARutas.crearAdmin); // RF05
router.post('/seguridad/loginAdmin', LRutas.validarCredencial);
router.put('/seguridad/desactivarcliente/:id', MCRutas.modificarestado);
router.put('/seguridad/desactivartrabajador/:id', MTRutas.modificarestado);
router.put('/seguridad/activartrabajador/:id', ATRutas.modificarestado);
router.put('/seguridad/activarcliente/:id', ACRutas.modificarestado);

module.exports = router;