'use strict';
module.exports = (sequelize, DataTypes) => {
  const Chequeo_Aporte_Curso = sequelize.define('Chequeo_Aporte_Curso', {
    id_usuario: DataTypes.INTEGER,
    id_aporte_curso: DataTypes.INTEGER,
    visto: DataTypes.BOOLEAN
  }, {});
  Chequeo_Aporte_Curso.associate = function(models) {
    Chequeo_Aporte_Curso.belongsTo(models.Usuario);// associations can be defined here
    Chequeo_Aporte_Curso.belongsTo(models.Aporte_Curso);// associations can be defined here
  };
  return Chequeo_Aporte_Curso;
};
