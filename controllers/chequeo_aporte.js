const Chequeo_Aporte = require('../models').Chequeo_Aporte;

module.exports = {
  list(req, res) {
    return Chequeo_Aporte
      .findAll({
        attributes: {exclude: ['UsuarioId', 'AporteId']}
      })
      .then((chequeo_aportes) => res.status(200).send(chequeo_aportes))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Chequeo_Aporte
      .findOne({
        where : { id : req.params.id},
        attributes: {exclude: ['UsuarioId', 'AporteId']}
      })
      .then((chequeo_aporte) => {
        if (!chequeo_aporte) {
          return res.status(404).send({
            message: 'Chequeo_Aporte Not Found',
          });
        }
        return res.status(200).send(chequeo_aporte);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Chequeo_Aporte
      .create({
        id_usuario: req.body.id_usuario,
        id_aporte: req.body.id_aporte,
        visto: req.body.visto,
      })
      .then((chequeo_aporte) => res.status(201).send(chequeo_aporte))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Chequeo_Aporte
      .findOne({
        where : { id : req.params.id},
        attributes: {exclude: ['UsuarioId', 'AporteId']}
      })
      .then(chequeo_aporte => {
        if (!chequeo_aporte) {
          return res.status(404).send({
            message: 'Chequeo_Aporte Not Found',
          });
        }
        return chequeo_aporte
          .update({
            id_usuario: req.body.id_usuario || chequeo_aporte.id_usuario,
            id_aporte: req.body.id_aporte || chequeo_aporte.id_aporte,
            visto: req.body.visto || chequeo_aporte.visto,
          })
          .then(() => res.status(200).send(chequeo_aporte))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Chequeo_Aporte
      .findOne({
        where : { id : req.params.id},
        attributes: {exclude: ['UsuarioId', 'AporteId']}
      })
      .then(chequeo_aporte => {
        if (!chequeo_aporte) {
          return res.status(400).send({
            message: 'Chequeo_Aporte Not Found',
          });
        }
        return chequeo_aporte
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
