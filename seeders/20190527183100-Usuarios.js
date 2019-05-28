'use strict';

var faker = require("faker"); /*'faker' genera datos al azar coherentes*/

faker.locale = "es_MX";

var n_usuarios = 50;/*Math.floor((Math.random() * 100) + 30); /*Cantidad de usuarios a crear en el seeder*/

module.exports = {
  up: (queryInterface, Sequelize) => {
    var newData = [];
    /*Inicio de instanciaciones para cada seeder*/
    for (let i = 1; i <= n_usuarios; i++) {
        /*Randoms para nombres y apellidos*/
        var nombre = faker.name.firstName();
        var apellido_1 = faker.name.lastName();
        var apellido_2 = faker.name.lastName();
        var apellido = apellido_1.concat(' ', apellido_2);
        /*Randoms para números para el run*/
        var run_1 = (Math.floor(Math.random() * 22000000) + 6000000).toString();/*Primera parte del run. toString() convierte número a String*/
        var run_2;
        var aux_run_2 = Math.floor(Math.random() * 11);
        if (aux_run_2 < 10){
          run_2 = aux_run_2.toString();
        }
        else {
          run_2 = 'k';
        }
        var run = run_1.concat('-', run_2);
        /*Crear usernames según nombres y apellidos dados*/
        var username = (((nombre.concat('.', apellido_1, (Math.floor(Math.random() * 2002)).toString())).toLowerCase()).replace(/\s/g, '')).normalize('NFD').replace(/[\u0300-\u036f]/g, "");/*.toString());*/
        /*Booleanos*/
        var bool_administrador = Boolean(Math.round(Math.random()));
        var bool_activo = Boolean(Math.round(Math.random()));
        var bool_aportador; /*Booleano para aportador. Si es administrador, sí o sí es aportador*/
        if (bool_administrador == true){
          bool_aportador = true;
        }
        else{
          var bool_aportador = Boolean(Math.round(Math.random()));;
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
            aportador: bool_aportador,
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
