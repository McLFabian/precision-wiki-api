const Curso = require('../models').Curso;
const Inscripcion_Curso = require('../models').Inscripcion_Curso;
const Aporte_Curso = require('../models').Aporte_Curso;

module.exports = {
  list(req, res) {
    return Curso
      .findAll()
      .then((cursos) => res.status(200).send(cursos))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Curso
      .findByPk(req.params.id)
      .then((curso) => {
        if (!curso) {
          return res.status(404).send({
            message: 'Curso Not Found',
          });
        }
        return res.status(200).send(curso);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Curso
      .create({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        ruta: req.body.ruta,
        disponible: req.body.disponible,
      })
      .then((curso) => res.status(201).send(curso))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Curso
      .findByPk(req.params.id)
      .then(curso => {
        if (!curso) {
          return res.status(404).send({
            message: 'Curso Not Found',
          });
        }
        return curso
          .update({
            nombre: req.body.nombre || curso.nombre,
            descripcion: req.body.descripcion || curso.descripcion,
            ruta: req.body.ruta || curso.ruta,
            disponible: req.body.disponible || curso.disponible,
          })
          .then(() => res.status(200).send(curso))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Curso
      .findByPk(req.params.id)
      .then(curso => {
        if (!curso) {
          return res.status(400).send({
            message: 'Curso Not Found',
          });
        }
        return curso
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
