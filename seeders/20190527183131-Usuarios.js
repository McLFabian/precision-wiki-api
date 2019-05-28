'use strict';

var faker = require("faker"); /*'faker' genera datos al azar coherentes*/

faker.locale = "en";

module.exports = {
  up: (queryInterface, Sequelize) => {
    var newData = [];
    var n_usuarios = Math.floor((Math.random() * 100) + 30); /*Cantidad de usuarios a crear en el seeder*/
    /*Inicio de instanciaciones para cada seeder*/
    for (let i = 1; i < n_usuarios; i++) {
            /*Randoms para nombres y apellidos*/
            var nombre = faker.name.firstName();
            var apellido_1 = faker.name.lastName();
            var apellido_2 = faker.name.lastName();
            var apellido = apellido_1.concat(' ', apellido_2);
            /*Randoms para números para el run*/
            var aux_run_1 = Math.floor(Math.random() * 22000000) + 6000000; /*Número al azar, iniciado en 6000000, más alguno hasta 22000000*/
            var run_1 = aux_run_1.toString();
            var run_2;
            var aux_run_2 = Math.floor(Math.random() * 11);
            if (aux_run_2 < 10){
              run_2 = aux_run_2.toString();
            }
            else {
              run_2 = 'k';
            }
            var run = run_1.concat('-', run_2);
            /*Randoms para crear usernames*/
            var aux_n_username = Math.floor(Math.random() * 2002);
            var username = nombre.concat('.', apellido_1, aux_n_username.toString());
            /*Randoms para asignar booleanos*/
            var bool_administrador;
            var aux_bool_administrador = Math.floor(Math.random() * 2);
            if (aux_bool_administrador < 1){
              bool_administrador = false;
            }
            else {
              bool_administrador = true;
            }
            var bool_activo;
            var aux_bool_activo = Math.floor(Math.random() * 2);
            if (aux_bool_activo < 1){
              bool_activo = false;
            }
            else {
              bool_activo = true;
            }
            /*Variables del seeder*/
            const seedData = {
                nombre: nombre,
                apellido: apellido,
                run: run,
                username: username,
                password: faker.internet.password(),
                email : 'jorge.huerta@mail.udp.cl',
                administrador: bool_administrador,
                activo: bool_activo,
                createdAt : new Date(),
                updatedAt : new Date()
            };
            newData.push(seedData);
    }
    return queryInterface.bulkInsert('Usuarios', newData);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Usuarios', null, {});
  }
};
