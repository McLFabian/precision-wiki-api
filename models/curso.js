'use strict';
module.exports = (sequelize, DataTypes) => {
  const Curso = sequelize.define('Curso', {
    nombre: DataTypes.STRING
  }, {});
  Curso.associate = function(models) {
    Curso.// associations can be defined here
  };
  return Curso;
};
