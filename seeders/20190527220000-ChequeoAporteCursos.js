'use strict';

var faker = require("faker"); /*'faker' genera datos al azar coherentes*/

faker.locale = "es_MX";

var n_aporte_cursos = 30;/*await Usuario.count({ where: { columnName: condition }); /*Cantidad de usuarios creados en el seeder*/
var n_usuarios = 53;

module.exports = {
  up: (queryInterface, Sequelize) => {
    var newData = [];
    /*Inicio de instanciaciones para cada seeder de inscripcion a un curso*/
    var i = 1;
    for (let i = 1; i <= n_usuarios; i++) {
        for (let j = 1; j <= n_aporte_cursos; j++) {
          var bool_visto = Boolean(Math.round(Math.random()));
          const seedData = {
              id_usuario: i,
              id_aporte_curso: j,
              visto: bool_visto,
              createdAt : new Date(),
              updatedAt : new Date()
          };
          newData.push(seedData);
        }
    }
    return queryInterface.bulkInsert('Chequeo_Aporte_Cursos', newData);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Chequeo_Aporte_Cursos', null, {});
  }
};
