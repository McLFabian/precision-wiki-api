'use strict';
module.exports = (sequelize, DataTypes) => {
  const Chequeo_Aporte_Curso = sequelize.define('Chequeo_Aporte_Curso', {
    id_curso: DataTypes.INTEGER
  }, {});
  Chequeo_Aporte_Curso.associate = function(models) {
    Chequeo_Aporte_Curso.belongsTo(models.Usuario);// associations can be defined here
    Chequeo_Aporte_Curso.belongsTo(models.Aporte_Curso);// associations can be defined here
  };
  return Chequeo_Aporte_Curso;
};
