

const modelo = require('../../modelo/trabajadores/EditarHorarioTrabajadorModelo');


class EditarHorarioTrabajadorControlador {

    editarHorario = async (req, res) => {
        try {
            const { idTrabajador, idHorario } = req.params;
            const { fecha, horaInicio, horaFinal } = req.body;

            // Validar los identificadores
            if (
                !/^[1-9]\d*$/.test(idTrabajador) ||
                !/^[1-9]\d*$/.test(idHorario)
            ) {
                return res.status(400).json({
                    exito: false,
                    mensaje: 'Los identificadores no son válidos'
                });
            }

            // Validar los campos obligatorios
            if (!fecha || !horaInicio || !horaFinal) {
                return res.status(400).json({
                    exito: false,
                    mensaje: 'Debe ingresar fecha, hora de inicio y hora final'
                });
            }

            // Validar formatos básicos
            if (
                !/^\d{4}-\d{2}-\d{2}$/.test(fecha) ||
                !/^([01]\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(horaInicio) ||
                !/^([01]\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(horaFinal)
            ) {
                return res.status(400).json({
                    exito: false,
                    mensaje: 'La fecha o las horas tienen un formato incorrecto'
                });
            }

            // Validar que la hora final sea posterior
            if (horaFinal <= horaInicio) {
                return res.status(400).json({
                    exito: false,
                    mensaje: 'La hora final debe ser posterior a la hora de inicio'
                });
            }

            const resultado = await modelo.editarHorario(
                idTrabajador,
                idHorario,
                fecha,
                horaInicio,
                horaFinal
            );

            // Si no se modificó ningún registro
            if (resultado.affectedRows === 0) {
                return res.status(404).json({
                    exito: false,
                    mensaje: 'No se encontró un horario activo para ese trabajador o no hubo cambios'
                });
            }

            return res.status(200).json({
                exito: true,
                mensaje: 'Horario actualizado correctamente'
            });

        } catch (error) {
            console.error('Error al editar el horario:', error);

            return res.status(500).json({
                exito: false,
                mensaje: 'Error al actualizar el horario',
                error: error.message
            });
        }
    };
}

module.exports = new EditarHorarioTrabajadorControlador();
