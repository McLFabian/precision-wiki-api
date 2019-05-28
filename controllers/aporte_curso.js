const Aporte_Curso = require('../models').Aporte_Curso;

module.exports = {
  list(req, res) {
    return Aporte_Curso
      .findAll({
        order: [
          ['createdAt', 'DESC'],
        ],
      })
      .then((aporte_cursos) => res.status(200).send(aporte_cursos))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Aporte_Curso
      .findById(req.params.id)
      .then((aporte_curso) => {
        if (!aporte_curso) {
          return res.status(404).send({
            message: 'Aporte_Curso Not Found',
          });
        }
        return res.status(200).send(aporte_curso);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Aporte_Curso
      .create({
        id_curso: req.body.id_curso,
        id_aporte: req.body.id_aporte,
        disponible: req.body.disponible,
      })
      .then((aporte_curso) => res.status(201).send(aporte_curso))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Aporte_Curso
      .findById(req.params.id)
      .then(aporte_curso => {
        if (!aporte_curso) {
          return res.status(404).send({
            message: 'Aporte_Curso Not Found',
          });
        }
        return aporte_curso
          .update({
            id_curso: req.body.id_curso || aporte_curso.id_curso,
            id_aporte: req.body.id_aporte || aporte_curso.id_aporte,
            disponible: req.body.disponible || aporte_curso.disponible,
          })
          .then(() => res.status(200).send(aporte_curso))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Aporte_Curso
      .findById(req.params.id)
      .then(aporte_curso => {
        if (!aporte_curso) {
          return res.status(400).send({
            message: 'Aporte_Curso Not Found',
          });
        }
        return aporte_curso
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
