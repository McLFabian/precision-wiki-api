'use strict';
module.exports = (sequelize, DataTypes) => {
  const Trabajador = sequelize.define('Trabajador', {
    activo: DataTypes.BOOLEAN
  }, {});
  Trabajador.associate = function(models) {
    Trabajador.belongsTo(models.Usuario);// associations can be defined here
    Trabajador.hasMany(models.Aporte, {
      foreignKey: 'id_Trabajador',
      as: 'aportes',
    });
  };
  return Trabajador;
};
