const modelo = require('../../modelo/trabajadores/VerHorarioModelo');

class VerHorarioControlador {
  obtenerHorarioDia = async (req, res) => {
    const { id, fecha } = req.params;
    const horario = await modelo.buscaTodoDia(id, fecha);

    res.status(200).json({
      exito: true,
      mensaje: 'Horario obtenido con exito',
      datos: horario
    });
  };

  obtenerHorarioEstado = async (req, res) => {
    const { id, fecha, est } = req.params;
    const horario = await modelo.buscaEstado(id, fecha, est);

    res.status(200).json({
      exito: true,
      mensaje: 'Estado del horario obtenido con exito',
      datos: horario
    });
  };

  buscarTodo = async (req, res) => {
    const { id } = req.params;
    const todo = await modelo.buscaTodo(id);

    res.status(200).json({
      exito: true,
      mensaje: 'Todos los datos obtenidos con exito',
      datos: todo
    });
  };
}

module.exports = new VerHorarioControlador();