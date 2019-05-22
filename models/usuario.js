'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    id: DataTypes.INTEGER
  }, {});
  Usuario.associate = function(models) {
    Usuario.hasMany(models.Inscripcion_Curso, {
      foreignKey: 'id_usuario',
      as: 'inscripcion_cursos',
    });
    Usuario.hasMany(models.Chequeo_Aporte_Curso, {
      foreignKey: 'id_usuario',
      as: 'chequeo_aporte_cursos',
    });
    Usuario.hasMany(models.Aporte, {
      foreignKey: 'id_usuario',
      as: 'aportes',
    });
  };
  return Usuario;
};
