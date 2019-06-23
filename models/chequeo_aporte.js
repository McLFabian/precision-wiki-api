'use strict';
module.exports = (sequelize, DataTypes) => {
  const Chequeo_Aporte = sequelize.define('Chequeo_Aporte', {
    id_usuario: DataTypes.INTEGER,
    id_aporte: DataTypes.INTEGER,
    visto: DataTypes.BOOLEAN
  }, {});
  Chequeo_Aporte.associate = function(models) {
    Chequeo_Aporte.belongsTo(models.Usuario,{
      foreignKey: 'id_usuario'
    });// associations can be defined here
    Chequeo_Aporte.belongsTo(models.Aporte,{
      foreignKey: 'id_aporte'
    });// associations can be defined here
  };
  return Chequeo_Aporte;
};
