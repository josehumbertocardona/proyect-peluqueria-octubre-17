
const dbService = require('../bd/Conexion');

class EditarHorarioTrabajadorModelo {

    static async editarHorario(
        idTrabajador,
        idHorario,
        fecha,
        horaInicio,
        horaFinal
    ) {
        const query = `
            UPDATE horarios h
            SET
                h.fecha = ?,
                h.horaInicio = ?,
                h.horaFinal = ?
            WHERE h.idHorario = ?
              AND h.estado = 'Activo'
              AND EXISTS (
                  SELECT 1
                  FROM reghorarios rh
                  WHERE rh.idHorario = h.idHorario
                    AND rh.idTrabajador = ?
                    AND rh.estado = 'Activo'
              );
        `;

        try {
            const resultado = await dbService.query(query, [
                fecha,
                horaInicio,
                horaFinal,
                idHorario,
                idTrabajador
            ]);

            return resultado;

        } catch (err) {
            throw new Error(
                `Error al editar el horario: ${err.message}`
            );
        }
    }
}

module.exports = EditarHorarioTrabajadorModelo;
