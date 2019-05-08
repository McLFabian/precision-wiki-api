'use strict';
module.exports = (sequelize, DataTypes) => {
  const Administrador = sequelize.define('Administrador', {
    id: DataTypes.INTEGER
  }, {});
  Administrador.associate = function(models) {
    Administrador.belongsTo(models.Usuario);
  };
  return Administrador;
};
