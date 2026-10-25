const modelo = require('../../modelo/admin/ActivarTrabajadorModelo');
class ActivarTrabajadorControlador {
static async modificarestado(req, res) {
 const { id } = req.params;
const errorCampos = ActivarTrabajadorControlador.verCampos(id);
        if (errorCampos) {
            return res.status(400).json({ error: errorCampos });
        }
         try {
            const result = await modelo.modificarEstado(id);
            res.status(201).json({ mensaje: 'trabajador activado con éxito'});
        } catch (err) {
            if (err.message.includes("Duplicate entry")) {
                return res.status(409).json({ error: 'Ya existe un trabajador con estos datos.' });
              } else {
                return res.status(500).json({ error: 'Error inesperado: ' + err.message });
              }
        }
}
 static verCampos(id) {
        if (!id) {
            return 'no se reconoce el id del trabajador.';
        }
        return null; // no encontro campos vacios
    }//cerrar verCampos

}

module.exports = ActivarTrabajadorControlador;