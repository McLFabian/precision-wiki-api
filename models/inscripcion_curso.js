'use strict';
module.exports = (sequelize, DataTypes) => {
  const Inscripcion_Curso = sequelize.define('Inscripcion_Curso', {
    id_curso: DataTypes.INTEGER,
    id_usuario: DataTypes.INTEGER,
    activo: DataTypes.BOOLEAN,
    endedAt: DataTypes.DATE
  }, {});
  Inscripcion_Curso.associate = function(models) {
    Inscripcion_Curso.belongsTo(models.Curso,{
      foreignKey: 'id_curso'
    });
    Inscripcion_Curso.belongsTo(models.Usuario,{
      foreignKey: 'id_usuario'
    });// associations can be defined here
  };
  return Inscripcion_Curso;
};
