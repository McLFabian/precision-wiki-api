'use strict';
module.exports = (sequelize, DataTypes) => {
  const Inscripcion_Curso = sequelize.define('Inscripcion_Curso', {
    id_curso: DataTypes.INTEGER,
    id_usuario: DataTypes.INTEGER,
    disponible: DataTypes.BOOLEAN
  }, {});
  Inscripcion_Curso.associate = function(models) {
    Inscripcion_Curso.belongsTo(models.Curso);
    Inscripcion_Curso.belongsTo(models.Usuario);// associations can be defined here
  };
  return Inscripcion_Curso;
};
