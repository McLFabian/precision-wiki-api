/*'use strict';
module.exports = (sequelize, DataTypes) => {
  const Aporte_Curso = sequelize.define('Aporte_Curso', {
    id_curso: DataTypes.INTEGER,
    id_aporte: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    disponible: DataTypes.BOOLEAN
  }, {});
  Aporte_Curso.associate = function(models) {
    Aporte_Curso.belongsTo(models.Aporte,{
      foreignKey: 'id_aporte'
    });
    Aporte_Curso.belongsTo(models.Curso, {
      foreignKey: 'id_curso'
    });
    Aporte_Curso.hasMany(models.Chequeo_Aporte_Curso, {
      foreignKey: 'id_aporte_curso',
      onDelete: 'cascade',
      hooks: true
    })
  };
  return Aporte_Curso;
};*/
