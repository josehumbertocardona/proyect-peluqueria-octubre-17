const modelo = require('../../modelo/clientes/VistaHorarioTrabajadorModelo');
class VistaHorarioTrabajadorControlador { 

    obtenerHorario = async (req, res) => {
        const {id} = req.params;
        const horario = await modelo.verHorario(id);
       res.status(200).json({
            exito: true,
            mensaje: 'Horario obtenido correctamente',
            datos: horario
        });
    
}
}
module.exports = new VistaHorarioTrabajadorControlador();