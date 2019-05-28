'use strict';

var faker = require("faker"); /*'faker' genera datos al azar coherentes*/

faker.locale = "en";

var bool_true = true;
var bool_false = false;

var n_usuarios = 50;/*await Usuario.count({ where: { columnName: condition }); /*Cantidad de usuarios creados en el seeder*/

module.exports = {
  up: (queryInterface, Sequelize) => {
    var newData = [];
    /*Inicio de instanciaciones para cada seeder de inscripcion a un curso*/
    var i = 1;
    while (i < n_usuarios){
        const seedData = {
            id_curso: 1,
            id_usuario: i,
            activo: bool_true,
            endedAt : null,
            createdAt : new Date(),
            updatedAt : new Date()
        };
        newData.push(seedData);
        i = i + (Math.floor(Math.random() * 12) + 1);
    }
    return queryInterface.bulkInsert('Inscripcion_Cursos', newData);

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Inscripcion_Cursos', null, {});
  }
};
