const Archivo_Aporte = require('../models').Archivo_Aporte;

module.exports = {
  list(req, res) {
    return Archivo_Aporte
      .findAll({
        order: [
          ['createdAt', 'DESC'],
        ],
      })
      .then((archivo_aportes) => res.status(200).send(archivo_aportes))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Archivo_Aporte
      .findById(req.params.id)
      .then((archivo_aporte) => {
        if (!archivo_aporte) {
          return res.status(404).send({
            message: 'Archivo_Aporte Not Found',
          });
        }
        return res.status(200).send(archivo_aporte);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Archivo_Aporte
      .create({
        id_aporte: req.body.id_aporte,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        ruta: req.body.ruta,
        disponible: req.body.disponible,
      })
      .then((archivo_aporte) => res.status(201).send(archivo_aporte))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Archivo_Aporte
      .findById(req.params.id)
      .then(archivo_aporte => {
        if (!archivo_aporte) {
          return res.status(404).send({
            message: 'Archivo_Aporte Not Found',
          });
        }
        return archivo_aporte
          .update({
            id_aporte: req.body.id_aporte || aporte.id_aporte,
            nombre: req.body.nombre || aporte.nombre,
            descripcion: req.body.descripcion || aporte.descripcion,
            ruta: req.body.ruta || aporte.ruta,
            disponible: req.body.disponible || aporte.disponible,
          })
          .then(() => res.status(200).send(archivo_aporte))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Archivo_Aporte
      .findById(req.params.id)
      .then(archivo_aporte => {
        if (!archivo_aporte) {
          return res.status(400).send({
            message: 'Archivo_Aporte Not Found',
          });
        }
        return archivo_aporte
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
