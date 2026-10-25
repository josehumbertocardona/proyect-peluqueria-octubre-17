const dbService = require('../bd/Conexion');
const bcrypt = require('bcrypt');

class CrearTrabajadorModelo {
// funcion para crear nuevos trabajadores por el admin
  static async crearTrabajadores(tipoD, ndoc, nom, dir, tel, email, contras, rol) {
    const query = 'INSERT INTO trabajadores (tipoDocumento, numeroDocumento, nombres, direccion, telefono, correo, contrasena, rol) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';

    try {
      // Generar el hash de la contraseña con bcrypt
      const salto = 10; // Nivel de seguridad de encriptación
      const contra = await bcrypt.hash(contras, salto);
      rol = 'Trabajador'; // Asignar el rol de trabajador de forma predeterminada     
      return await dbService.query(query, [tipoD, ndoc, nom, dir, tel, email, contra, rol]);
    } catch (err) {
      throw new Error(`Error al crear su nueva cuenta: ${err.message}`);
    }
  }//cerrar crear trabajador
  
}
    
module.exports = CrearTrabajadorModelo;  //Exportamos la clase