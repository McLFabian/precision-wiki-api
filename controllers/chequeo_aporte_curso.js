const Chequeo_Aporte_Curso = require('../models').Chequeo_Aporte_Curso;

module.exports = {
  list(req, res) {
    return Chequeo_Aporte_Curso
      .findAll({
        attributes: {exclude: ['UsuarioId', 'AporteCursoId']}
      })
      .then((chequeo_aporte_cursos) => res.status(200).send(chequeo_aporte_cursos))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Chequeo_Aporte_Curso
      .findOne({
        where : { id : req.params.id},
        attributes: {exclude: ['UsuarioId', 'AporteCursoId']}
      })
      .then((chequeo_aporte_curso) => {
        if (!chequeo_aporte_curso) {
          return res.status(404).send({
            message: 'Chequeo_Aporte_Curso Not Found',
          });
        }
        return res.status(200).send(chequeo_aporte_curso);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Chequeo_Aporte_Curso
      .create({
        id_usuario: req.body.id_usuario,
        id_aporte_curso: req.body.id_aporte_curso,
        visto: req.body.visto,
      })
      .then((chequeo_aporte_curso) => res.status(201).send(chequeo_aporte_curso))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Chequeo_Aporte_Curso
      .findOne({
        where : { id : req.params.id},
        attributes: {exclude: ['UsuarioId', 'AporteCursoId']}
      })
      .then(chequeo_aporte_curso => {
        if (!chequeo_aporte_curso) {
          return res.status(404).send({
            message: 'Chequeo_Aporte_Curso Not Found',
          });
        }
        return chequeo_aporte_curso
          .update({
            id_usuario: req.body.id_usuario || chequeo_aporte_curso.id_usuario,
            id_aporte_curso: req.body.id_aporte_curso || chequeo_aporte_curso.id_aporte_curso,
            visto: req.body.visto || chequeo_aporte_curso.visto,
          })
          .then(() => res.status(200).send(chequeo_aporte_curso))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Chequeo_Aporte_Curso
      .findOne({
        where : { id : req.params.id},
        attributes: {exclude: ['UsuarioId', 'AporteCursoId']}
      })
      .then(chequeo_aporte_curso => {
        if (!chequeo_aporte_curso) {
          return res.status(400).send({
            message: 'Chequeo_Aporte_Curso Not Found',
          });
        }
        return chequeo_aporte_curso
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
