'use strict';
module.exports = (sequelize, DataTypes) => {
  const Aporte = sequelize.define('Aporte', {
    titulo: DataTypes.STRING
  }, {});
  Aporte.associate = function(models) {
    Aporte.belongsTo(models.Usuario);
    Aporte.hasMany(models.Archivo_Aporte, {
      foreignKey: 'id_aporte',
      as: 'archivo_aportes',
    });
    Aporte.hasMany(models.Aporte_Curso, {
      foreignKey: 'id_aporte',
      as: 'aporte_cursos',
    });
  };
  return Aporte;
};
