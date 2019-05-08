'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    id: DataTypes.INTEGER
  }, {});
  Usuario.associate = function(models) {
    Usuario.hasOne(models.Administrador, {
      foreignKey: 'id_Usuario',
      as: 'administradores',
    });
    Usuario.hasOne(models.Trabajador, {
      foreignKey: 'id_Usuario',
      as: 'trabajadores',
    });
  };
  return Usuario;
};
