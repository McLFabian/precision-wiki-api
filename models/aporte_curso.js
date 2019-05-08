'use strict';
module.exports = (sequelize, DataTypes) => {
  const Aporte_Curso = sequelize.define('Aporte_Curso', {
    id_curso: DataTypes.INTEGER
  }, {});
  Aporte_Curso.associate = function(models) {
    // associations can be defined here
  };
  return Aporte_Curso;
};