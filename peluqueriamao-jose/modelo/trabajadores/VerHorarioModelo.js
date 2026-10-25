const dbService = require('../bd/Conexion');

class VerHorarioModelo {
  static async buscaTodoDia(idTrabajador, fechaConsulta = null) {
    const fecha =
      fechaConsulta || new Date().toISOString().split('T')[0];

    const query = `
      SELECT
        t.nombres AS nombresTrabajador,
        h.fecha,
        h.horaInicio,
        h.horaFinal,
        rh.estado AS estadoRegistro
      FROM reghorarios rh
      INNER JOIN trabajadores t
        ON rh.idTrabajador = t.idtrabajador
      INNER JOIN horarios h
        ON rh.idHorario = h.idHorario
      WHERE h.fecha = ?
        AND rh.idTrabajador = ?
    `;

    try {
      const resultado = await dbService.query(query, [fecha, idTrabajador]);
      return resultado.length > 0 ? resultado : [];
    } catch (err) {
      throw new Error(`Error al buscar el horario: ${err.message}`);
    }
  }

  static async buscaEstado(idTrabajador, fechaConsulta = null, est) {
    const fecha =
      fechaConsulta || new Date().toISOString().split('T')[0];

    const estado = est === 'A' ? 'Activo' : 'Inactivo';

    const query = `
      SELECT
        t.nombres AS nombresTrabajador,
        h.fecha,
        h.horaInicio,
        h.horaFinal,
        rh.estado AS estadoRegistro
      FROM reghorarios rh
      INNER JOIN trabajadores t
        ON rh.idTrabajador = t.idtrabajador
      INNER JOIN horarios h
        ON rh.idHorario = h.idHorario
      WHERE h.fecha = ?
        AND rh.idTrabajador = ?
        AND rh.estado = ?
    `;

    try {
      const resultado = await dbService.query(query, [
        fecha,
        idTrabajador,
        estado
      ]);
      return resultado.length > 0 ? resultado : [];
    } catch (err) {
      throw new Error(`Error al buscar el estado: ${err.message}`);
    }
  }

  static async buscaTodo(idTrabajador, pag = 1, limit = 50) {
    const paginaActual = Math.max(1, parseInt(pag, 10) || 1);
    const limite = Math.max(1, parseInt(limit, 10) || 50);
    const desplazamiento = (paginaActual - 1) * limite;

    const query = `
      SELECT
        t.nombres AS nombresTrabajador,
        h.fecha,
        h.horaInicio,
        h.horaFinal,
        rh.estado AS estadoRegistro
      FROM reghorarios rh
      INNER JOIN trabajadores t
        ON rh.idTrabajador = t.idtrabajador
      INNER JOIN horarios h
        ON rh.idHorario = h.idHorario
      WHERE rh.idTrabajador = ?
      LIMIT ? OFFSET ?
    `;

    try {
      const resultado = await dbService.query(query, [
        idTrabajador,
        limite,
        desplazamiento
      ]);
      return resultado.length > 0 ? resultado : [];
    } catch (err) {
      throw new Error(`Error al buscar los horarios: ${err.message}`);
    }
  }
}

module.exports = VerHorarioModelo;