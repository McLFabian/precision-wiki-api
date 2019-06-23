const Curso = require('../models').Curso;
//const Aporte_Curso = require('../models').Aporte_Curso;
const Aporte = require('../models').Aporte;


module.exports = {
    getById(req, res) {
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
    }
}