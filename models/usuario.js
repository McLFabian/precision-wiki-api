'use strict';

/*const bcrypt = require("bcrypt"); /*Para encriptar contraseñas*/

module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    nombre: DataTypes.TEXT,
    apellido: DataTypes.TEXT,
    run: DataTypes.TEXT,
    username: DataTypes.TEXT,
    password: DataTypes.TEXT,
    email: DataTypes.TEXT,
    administrador: DataTypes.BOOLEAN,
    //aportador: DataTypes.BOOLEAN,
    activo: DataTypes.BOOLEAN
  }, {
    /*freezeTableName: true,*/
    /*instanceMethods: {
        generateHash(password) {
            return bcrypt.hash(password, bcrypt.genSaltSync(8));
        },
        validPassword(password) {
            return bcrypt.compare(password, this.password);
        }
    }*/
  });
  Usuario.associate = function(models) {
    Usuario.hasMany(models.Inscripcion_Curso, {
      foreignKey: 'id_usuario',
      //as: 'inscripcion_cursos',
      onDelete: 'cascade',
      hooks: true
    });
    Usuario.hasMany(models.Chequeo_Aporte, {
      foreignKey: 'id_usuario',
      as: 'chequeo_aporte',
      onDelete: 'cascade',
      hooks: true
    });
/*    Usuario.hasMany(models.Aporte, {
      foreignKey: 'id_usuario',
      as: 'aportes',
      onDelete: 'cascade',
      hooks: true
    });*/
  };
  return Usuario;
};
