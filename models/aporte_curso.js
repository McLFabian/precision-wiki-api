'use strict';
module.exports = (sequelize, DataTypes) => {
  const Aporte_Curso = sequelize.define('Aporte_Curso', {
    id_curso: DataTypes.INTEGER
  }, {});
  Aporte_Curso.associate = function(models) {
    Aporte_Curso.belongsTo(models.Aporte);// associations can be defined here
    Aporte_Curso.belongsTo(models.Curso);
    Aporte_Curso.hasMany(models.Chequeo_Aporte_Curso, {
      foreignKey: 'id_aporte_curso',
      as: 'chequeo_aporte_curso',
    })
  };
  return Aporte_Curso;
};
