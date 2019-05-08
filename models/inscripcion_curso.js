'use strict';
module.exports = (sequelize, DataTypes) => {
  const Inscripcion_Curso = sequelize.define('Inscripcion_Curso', {
    disponible: DataTypes.BOOLEAN
  }, {});
  Inscripcion_Curso.associate = function(models) {
    // associations can be defined here
  };
  return Inscripcion_Curso;
};