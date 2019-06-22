'use strict';
module.exports = (sequelize, DataTypes) => {
  const Aporte = sequelize.define('Aporte', {
    id_usuario: DataTypes.INTEGER,
    titulo: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    contenido: DataTypes.TEXT,
    disponible: DataTypes.BOOLEAN
  }, {});
  Aporte.associate = function(models) {
    Aporte.belongsTo(models.Usuario,{
      foreignKey: 'id_usuario'
    });
    Aporte.hasMany(models.Archivo_Aporte, {
      foreignKey: 'id_aporte',
      //as: 'archivo_aportes',
      onDelete: 'cascade',
      hooks: true
    });
    Aporte.hasMany(models.Aporte_Curso, {
      foreignKey: 'id_aporte',
      //as: 'aporte_cursos',
      onDelete: 'cascade',
      hooks: true
    });
  };
  return Aporte;
};
