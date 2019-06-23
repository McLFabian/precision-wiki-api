/*'use strict';
module.exports = (sequelize, DataTypes) => {
  const Archivo_Aporte = sequelize.define('Archivo_Aporte', {
    id_aporte: DataTypes.INTEGER,
    nombre: DataTypes.TEXT,
    descripcion: DataTypes.TEXT,
    ruta: DataTypes.TEXT,
    archivo: DataTypes.TEXT,
    video: DataTypes.TEXT,
    disponible: DataTypes.BOOLEAN
  }, {});
  Archivo_Aporte.associate = function(models) {
    Archivo_Aporte.belongsTo(models.Aporte,{
      foreignKey: 'id_aporte'
    });
  };
  return Archivo_Aporte;
};*/
