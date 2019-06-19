const Inscripcion_Curso = require('../models').Inscripcion_Curso;
const Usuario = require('../models').Usuario;
const Curso = require('../models').Curso;


module.exports = {
    getById(req, res) {
        return Curso
          .findAll({
            attributes: ['id','nombre', 'descripcion', 'ruta'],
            include: [{
                model: Inscripcion_Curso,
                attributes: {exclude: ['id','id_curso', 'id_usuario', 'activo', 'endedAt','createdAt', 'updatedAt'] },
                required: true,
                include: [{
                    model: Usuario,
                    where: [{id: req.params.id}],
                    attributes: {exclude: ['id','nombre', 'apellido', 'run', 'username', 'password', 'email', 'administrador', 'aportador', 'activo','createdAt', 'updatedAt'] }
                }]
            }]
          })
          .then((usuario) => {
            if (!usuario) {
              return res.status(404).send({
                message: 'Usuario Not Found',
              });
            }
            return res.status(200).send(usuario);
          })
          .catch((error) => res.status(400).send(error));
    }
}