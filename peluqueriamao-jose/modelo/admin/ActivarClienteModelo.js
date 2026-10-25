const dbService = require('../bd/Conexion');

class ActivarClienteModelo {
     static async modificarEstado(id) {
  const query = 'UPDATE clientes SET estado = ?  WHERE idcliente = ?';
try {
    const est = 'Activo';
    const resultado = dbService.query(query, [est, id]);
    if(resultado.affectedRows === 0){
    throw new Error('No se encontró ningún cliente.');
    }
    return resultado;
} catch (error) {
    throw new Error(`Error al modificar el estado del cliente: ${err.message}`);
}
     }

}

module.exports =ActivarClienteModelo;  //Exportamos la clase