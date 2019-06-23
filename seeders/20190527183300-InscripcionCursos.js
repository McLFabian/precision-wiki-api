'use strict';

var faker = require("faker"); /*'faker' genera datos al azar coherentes*/

faker.locale = "es_MX";

var n_usuarios = 3;//53;/*await Usuario.count({ where: { columnName: condition }); /*Cantidad de usuarios creados en el seeder*/
var n_cursos = 5;
var id_curso = 1;

module.exports = {
  up: (queryInterface, Sequelize) => {
    var newData = []; /*Inicio de instanciaciones para cada seeder de inscripcion a un curso*/
    var i = 1;
    var j = 1;
    while (i <= n_usuarios){
      while (j <= n_cursos){
        const seedData = {
            id_curso: id_curso,
            id_usuario: i,
            activo: true,
            endedAt : null,
            createdAt : new Date(),
            updatedAt : new Date()
        };
        newData.push(seedData);
        j = j + 1;
      }
      /*i = i + (Math.floor(Math.random() * 12) + 1);*/
      i = i + 1;
    }
    return queryInterface.bulkInsert('Inscripcion_Cursos', newData);

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Inscripcion_Cursos', null, {});
  }
};
