'use strict';
module.exports = (sequelize, DataTypes) => {
  const Aporte = sequelize.define('Aporte', {
    id_curso: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    link_archivo: DataTypes.TEXT,
    link_video: DataTypes.TEXT,
    disponible: DataTypes.BOOLEAN
  }, {});
/*  Aporte.associate = function(models) {
    Aporte.belongsTo(models.Usuario,{
      foreignKey: 'id_usuario'
    });*/
  Aporte.associate = function(models) {
    Aporte.belongsTo(models.Curso,{
      foreignKey: 'id_curso'
    });
  Aporte.hasMany(models.Chequeo_Aporte, {
    foreignKey: 'id_aporte',
    //as: 'chequeo_aporte',
    onDelete: 'cascade',
    hooks: true
  });
/*    Aporte.hasMany(models.Archivo_Aporte, {
      foreignKey: 'id_aporte',
      //as: 'archivo_aportes',
      onDelete: 'cascade',
      hooks: true
    });*/
/*    Aporte.hasMany(models.Aporte_Curso, {
      foreignKey: 'id_aporte',
      //as: 'aporte_cursos',
      onDelete: 'cascade',
      hooks: true
    });*/
  };
  return Aporte;
};
