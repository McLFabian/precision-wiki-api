'use strict';

var faker = require("faker"); /*'faker' genera datos al azar coherentes*/

faker.locale = "en";

var bool_true = true;
var bool_false = false;

var n_aportes = 30;/*await Usuario.count({ where: { columnName: condition }); /*Cantidad de usuarios creados en el seeder*/

module.exports = {
  up: (queryInterface, Sequelize) => {
    var newData = [];
    /*Inicio de instanciaciones para cada seeder de inscripcion a un curso*/
    var i = 1;
    while (i <= n_aportes){
        const seedData = {
            id_curso: 1,
            id_aporte: i,
            disponible: bool_true,
            createdAt : new Date(),
            updatedAt : new Date()
        };
        newData.push(seedData);
        i = i + 1;
    }
    return queryInterface.bulkInsert('Aporte_Cursos', newData);

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Aporte_Cursos', null, {});
  }
};
