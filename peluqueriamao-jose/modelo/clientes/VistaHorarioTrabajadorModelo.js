const dbService = require('../bd/Conexion');

class VistaHorarioTrabajadorModelo {

    static async verHorario(idTrabajador) {
            //const fecha = fechaConsulta || new Date().toISOString().split('T')[0];
            const query = `
            SELECT
             t.nombres AS nombresTrabajador,
              h.fecha,
               h.horaInicio,
                h.horaFinal,
                 rh.estado
                  AS estadoRegistro
                   FROM reghorarios rh
                    INNER JOIN trabajadores
                     t ON rh.idTrabajador = t.idtrabajador
                      INNER JOIN horarios h ON rh.idHorario = h.idHorario
                       WHERE rh.idtrabajador = ?
                        AND rh.estado = "Activo";
           `;
            try {
                const resultado = await dbService.query(query, [idTrabajador]);
                return resultado.length > 0 ? resultado : [];
            } catch (err) {
                throw new Error(`Error al buscar el horario: ${err.message}`);
            }
        }

}

module.exports = VistaHorarioTrabajadorModelo;