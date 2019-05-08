'use strict';
module.exports = (sequelize, DataTypes) => {
  const Aporte = sequelize.define('Aporte', {
    titulo: DataTypes.STRING
  }, {});
  Aporte.associate = function(models) {
    Aporte.belongsTo(models.Trabajador);
    Aporte.belongsToMany(models.Curso, {
      through: 'Aporte_Curso',
      as: 'Curso',
      foreignKey: 'id_aporte'
    });
    Aporte.hasMany(models.Archivo_Aporte, {
      foreignKey: 'id_aporte',
      as: 'archivos_aporte',
    });// associations can be defined here
  };
  return Aporte;
};
