const dbService = require('../bd/Conexion');

class DesactivarTrabajadorModelo {
     static async modificarEstado(id) {
  const query = 'UPDATE trabajadores SET estado = ?  WHERE idtrabajador = ?';
try {
    const est = 'inactivo';
    const resultado = dbService.query(query, [est, id]);
    if(resultado.affectedRows === 0){
    throw new Error('No se encontró ningún trabajador.');
    }
    return resultado;
} catch (error) {
    throw new Error(`Error al modificar el estado del trabajador: ${err.message}`);
}
     }

}

module.exports =DesactivarTrabajadorModelo;  //Exportamos la clase