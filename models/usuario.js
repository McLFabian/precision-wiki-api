'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    id: DataTypes.INTEGER
  }, {});
  Usuario.associate = function(models) {
    Usuario.hasMany(models.Inscripcion_Curso, {
      foreignKey: 'id_Usuario',
      as: 'inscripcion_cursos',
    });
    Usuario.hasMany(models.Aporte, {
      foreignKey: 'id_Usuario',
      as: 'aportes',
    });
  };
  return Usuario;
};
