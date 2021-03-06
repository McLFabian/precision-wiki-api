const Inscripcion_Curso = require('../models').Inscripcion_Curso;

module.exports = {
  list(req, res) {
    return Inscripcion_Curso
      .findAll({
        attributes: {exclude: ['UsuarioId', 'CursoId']}
      })
      .then((inscripcion_cursos) => res.status(200).send(inscripcion_cursos))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Inscripcion_Curso
      .findOne({
        where : { id : req.params.id},
        attributes: {exclude: ['UsuarioId', 'CursoId']}
      })
      .then((inscripcion_curso) => {
        if (!inscripcion_curso) {
          return res.status(404).send({
            message: 'Inscripcion_Curso Not Found',
          });
        }
        return res.status(200).send(inscripcion_curso);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Inscripcion_Curso
      .create({
        id_curso: req.body.id_curso,
        id_usuario: req.body.id_usuario,
        activo: req.body.disponible,
        endedAt: req.body.endedAt,
      })
      .then((inscripcion_curso) => res.status(201).send(inscripcion_curso))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Inscripcion_Curso
      .findOne({
        where : { id : req.params.id},
        attributes: {exclude: ['UsuarioId', 'CursoId']}
      })
      .then(inscripcion_curso => {
        if (!inscripcion_curso) {
          return res.status(404).send({
            message: 'Inscripcion_Curso Not Found',
          });
        }
        return inscripcion_curso
          .update({
            id_curso: req.body.id_curso || inscripcion_curso.id_curso,
            id_usuario: req.body.id_usuario || inscripcion_curso.id_usuario,
            activo: req.body.disponible || inscripcion_curso.activo,
            endedAt: req.body.endedAt || inscripcion_curso.endedAt,

          })
          .then(() => res.status(200).send(inscripcion_curso))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Inscripcion_Curso
      .findOne({
        where : { id : req.params.id},
        attributes: {exclude: ['UsuarioId', 'CursoId']}
      })
      .then(inscripcion_curso => {
        if (!inscripcion_curso) {
          return res.status(400).send({
            message: 'Inscripcion_Curso Not Found',
          });
        }
        return inscripcion_curso
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
