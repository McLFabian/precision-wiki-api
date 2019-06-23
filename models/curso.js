'use strict';
module.exports = (sequelize, DataTypes) => {
  const Curso = sequelize.define('Curso', {
    nombre: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    ruta: DataTypes.TEXT,
    disponible: DataTypes.BOOLEAN
  }, {});
  Curso.associate = function(models) {
    Curso.hasMany(models.Inscripcion_Curso, {
      foreignKey: 'id_curso',
      //as: 'inscripcion_cursos',
      onDelete: 'cascade',
      hooks: true
    });
    Curso.hasMany(models.Aporte, {
      foreignKey: 'id_curso',
      //as: 'aporte_cursos',
      onDelete: 'cascade',
      hooks: true
    });
  };
  return Curso;
};
