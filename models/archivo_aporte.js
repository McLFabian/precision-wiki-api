'use strict';
module.exports = (sequelize, DataTypes) => {
  const Archivo_Aporte = sequelize.define('Archivo_Aporte', {
    disponible: DataTypes.BOOLEAN
  }, {});
  Archivo_Aporte.associate = function(models) {
    Archivo_Aporte.belongsTo(models.Aporte);// associations can be defined here
  };
  return Archivo_Aporte;
};
