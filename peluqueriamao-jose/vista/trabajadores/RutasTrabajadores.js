const express = require('express');
const LTRutas = require('../../controlador/trabajadores/LoginTrabajadorControlador');
const HRutas = require('../../controlador/trabajadores/VerHorarioControlador');
const EHTRutas = require('../../controlador/trabajadores/EditarHorarioTrabajadorControlador');
const router = express.Router();


router.post('/trabajador/login', LTRutas.validarCredencial); // RF05
router.get('/trabajador/horariod/:id&:fecha', HRutas.obtenerHorarioDia);
router.get('/trabajador/horarioe/:id&:fecha&:est', HRutas.obtenerHorarioEstado);
router.get('/trabajador/horariot/:id', HRutas.buscarTodo);
router.put('/usuario/:idTrabajador/horario/:idHorario', EHTRutas.editarHorario);

module.exports = router;