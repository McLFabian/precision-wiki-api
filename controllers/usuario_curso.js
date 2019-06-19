const Inscripcion_Curso = require('../models').Inscripcion_Curso;
const Usuario = require('../models').Usuario;
const Curso = require('../models').Curso;


module.exports = {
    getById(req, res) {
        return Curso
          .findAll({
            attributes: ['nombre'],
            include: [{
                model: Inscripcion_Curso,
                attributes: ['id_curso', 'id_usuario'],
                required: true,
                include: [{
                    model: Usuario,
                    where: [{id: req.params.id}],
                    attributes: ['id']
                }]
            }]
          })
          .then((curso) => {
            if (!curso) {
              return res.status(404).send({
                message: 'Usuario Not Found',
              });
            }
            return res.status(200).send(curso);
          })
          .catch((error) => res.status(400).send(error));
    }
}