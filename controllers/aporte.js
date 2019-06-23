const Aporte = require('../models').Aporte;
//const Archivo_Aporte = require('../models').Archivo_Aporte;
//const Aporte_Curso = require('../models').Aporte_Curso;
const Curso = require('../models').Curso;

module.exports = {
  list(req, res) {
    return Aporte
      .findAll({
        attributes: {exclude: ['UsuarioId']}
      })
      .then((aportes) => res.status(200).send(aportes))
      .catch((error) => { res.status(400).send(error); });
  },

  list2(req, res) {
    return Aporte
      .findAll({
        attributes: ['id','nombre', 'link_archivo', 'link_video'],
        include: [{
              model: Curso,
               where: [{id: req.params.id}],
               attributes: {exclude: ['id','nombre', 'descripcion', 'ruta', 'disponible', 'createdAt', 'updatedAt'] }
        }]
      })
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

  getById(req, res) {
    return Aporte
      .findOne({
        where : { id : req.params.id},
        attributes: {exclude: ['UsuarioId']}
      })
      .then((aporte) => {
        if (!aporte) {
          return res.status(404).send({
            message: 'Aporte Not Found',
          });
        }
        return res.status(200).send(aporte);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Aporte
      .create({
        id_curso: req.body.id_curso,
        nombre: req.body.nombre,
        link_archivo: req.body.link_archivo,
        link_video: req.body.link_video,
        disponible: req.body.disponible,
      })
      .then((aporte) => res.status(201).send(aporte))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Aporte
      .findOne({
        where : { id : req.params.id},
        attributes: {exclude: ['UsuarioId']}
      })
      .then(aporte => {
        if (!aporte) {
          return res.status(404).send({
            message: 'Aporte Not Found',
          });
        }
        return aporte
          .update({
            id_usuario: req.body.id_usuario || aporte.id_usuario,
            titulo: req.body.titulo || aporte.titulo,
            link_archivo: req.body.link_archivo || aporte.link_archivo,
            link_video: req.body.link_video || aporte.link_video,
            disponible: req.body.disponible || aporte.disponible,
          })
          .then(() => res.status(200).send(aporte))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res){
    return Aporte
    .destroy({
      where : { id : req.params.id},
      attributes: {exclude: ['UsuarioId']},
      force: true
    })
    .then(() => res.status(204).send())
    .catch((error) => res.status(400).send(error));
  }
  /*
  delete(req, res) {
    return Aporte
      .findOne({
        where : { id : req.params.id},
        attributes: {exclude: ['UsuarioId']}
      })
      .then(aporte => {
        if (!aporte) {
          return res.status(400).send({
            message: 'Aporte Not Found',
          });
        }
        return aporte
          .destroy({})
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },*/
};
