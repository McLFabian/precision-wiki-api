const Archivo_Aporte = require('../models').Archivo_Aporte;

module.exports = {
  list(req, res) {
    return Archivo_Aporte
      .findAll({
        attributes: {exclude: ['AporteId']}
      })
      .then((archivo_aportes) => res.status(200).send(archivo_aportes))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Archivo_Aporte
      .findOne({
        where : { id : req.params.id},
        attributes: {exclude: ['AporteId']}      
      })
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
        archivo: req.body.archivo,
        video: req.body.video,
        disponible: req.body.disponible,
      })
      .then((archivo_aporte) => res.status(201).send(archivo_aporte))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Archivo_Aporte
      .findOne({
        where : { id : req.params.id},
        attributes: {exclude: ['AporteId']}      
      })
      .then(archivo_aporte => {
        if (!archivo_aporte) {
          return res.status(404).send({
            message: 'Archivo_Aporte Not Found',
          });
        }
        return archivo_aporte
          .update({
            id_aporte: req.body.id_aporte || archivo_aporte.id_aporte,
            nombre: req.body.nombre || archivo_aporte.nombre,
            descripcion: req.body.descripcion || archivo_aporte.descripcion,
            ruta: req.body.ruta || archivo_aporte.ruta,
            archivo: req.body.archivo || archivo_aporte.archivo,
            video: req.body.video || archivo_aporte.video,
            disponible: req.body.disponible || archivo_aporte.disponible,
          })
          .then(() => res.status(200).send(archivo_aporte))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Archivo_Aporte
      .findOne({
        where : { id : req.params.id},
        attributes: {exclude: ['AporteId']}      
      })
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
