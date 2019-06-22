const Aporte_Curso = require('../models').Aporte_Curso;
const Aporte = require('../models').Aporte;
const Curso = require('../models').Curso;



module.exports = {
  list(req, res) {
    return Aporte_Curso
      .findAll({
        attributes: {exclude: ['AporteId', 'CursoId']}
      })
      .then((aporte_cursos) => res.status(200).send(aporte_cursos))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Aporte_Curso
      .findOne({
        where : { id : req.params.id},
        attributes: {exclude: ['AporteId', 'CursoId']}
      })
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
      .then((aporte_curso) => res.status(201).send(aporte_curso,{ message: 'Aporte curso creado'}))
      .catch((error) => res.status(400).send(error));
  },

  asociar(req, res){
    return Aporte_Curso
    .create({ 
        id_curso: req.body.id_curso,
        id_aporte: req.body.id_aporte
    })
    .then((aporte_curso) => res.status(201).send(aporte_curso,{ message: 'Aporte curso creado'}))
    .catch((error) => res.status(400).send(error))
  },

  update(req, res) {
    return Aporte_Curso
      .findOne({
        where : { id : req.params.id},
        attributes: {exclude: ['AporteId', 'CursoId']}
      })
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
      .findOne({
        where : { id : req.params.id},
        attributes: {exclude: ['AporteId', 'CursoId']}
      })
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
