const Inscripcion_Curso = require('../models').Inscripcion_Curso;
const Usuario = require('../models').Usuario;
const Curso = require('../models').Curso;


module.exports = {
    getById(req, res) {
        return Curso
          .findOne({
            attributes: ['nombre'],
            include: [{
                model: Inscripcion_Curso,
                include: [{
                    model: Usuario,
                    where: [{id: req.params.id}]
                }]
            }]
          })
          .then((curso) => {
            if (!curso) {
              return res.status(404).send({
                message: 'Cursos Not Found',
              });
            }
            return res.status(200).send(curso);
          })
          .catch((error) => res.status(400).send(error));
    }
}