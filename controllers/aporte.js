const Aporte = require('../models').Aporte;
const Archivo_Aporte = require('../models').Archivo_Aporte;
const Aporte_Curso = require('../models').Aporte_Curso;

module.exports = {
  list(req, res) {
    return Aporte
      .findAll({
        include: [{
          model: Archivo_Aporte,
          as: 'archivo_aportes'
        },{
          model: Aporte_Curso,
          as: 'aporte_cursos'
        }],
        order: [
          ['createdAt', 'DESC'],
          [{ model: Archivo_Aporte, as: 'archivo_aportes' }, 'createdAt', 'DESC'],
        ],
      })
      .then((aportes) => res.status(200).send(aportes))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Aporte
      .findById(req.params.id, {
        include: [{
          model: Archivo_Aporte,
          as: 'archivo_aportes'
        },{
          model: Aporte_Curso,
          as: 'aporte_cursos'
        }],
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
        id_usuario: req.body.id_usuario,
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        contenido: req.body.contenido,
        disponible: req.body.disponible,
      })
      .then((aporte) => res.status(201).send(aporte))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Aporte
      .findById(req.params.id, {
        include: [{
          model: Archivo_Aporte,
          as: 'archivo_aportes'
        },{
          model: Aporte_Curso,
          as: 'aporte_cursos'
        }],
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
            descripcion: req.body.descripcion || aporte.descripcion,
            contenido: req.body.contenido || aporte.contenido,
            disponible: req.body.disponible || aporte.disponible,
          })
          .then(() => res.status(200).send(aporte))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Aporte
      .findById(req.params.id)
      .then(aporte => {
        if (!aporte) {
          return res.status(400).send({
            message: 'Aporte Not Found',
          });
        }
        return aporte
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
