'use strict';

var faker = require("faker"); /*'faker' genera datos al azar coherentes*/

faker.locale = "es_MX";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Usuarios', [
      {
      nombre: 'Jorge',
      apellido: 'Huerta Jeria',
      run: '18110354-5',
      username: 'jorge.huerta',
      password: 'admin',
      email : 'jorge.huerta@mail.udp.cl',
      administrador: true,
      //aportador: true,
      activo: true,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      nombre: 'Sebastián',
      apellido: 'Leiva Silva',
      run: '18057287-9',
      username: 'sebastian.leivas',
      password: 'admin',
      email : 'sebastian.leivas@mail.udp.cl',
      administrador: true,
      //aportador: true,
      activo: true,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      nombre: 'Fabián',
      apellido: 'Miranda Muñoz',
      run: '18210844-k',
      username: 'fabian.miranda',
      password: 'admin',
      email : 'fabian.miranda@mail.udp.cl',
      administrador: true,
      //aportador: true,
      activo: true,
      createdAt : new Date(),
      updatedAt : new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Usuarios', [{
      nombre: 'Jorge',
      apellido: 'Huerta Jeria',
      run: '18110354-5',
      username: 'jorge.huerta',
      password: 'admin',
      email : 'jorge.huerta@mail.udp.cl',
      administrador: true,
      //aportador: true,
      activo: true,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      nombre: 'Sebastián',
      apellido: 'Leiva Silva',
      run: '18057287-9',
      username: 'sebastian.leivas',
      password: 'admin',
      email : 'sebastian.leivas@mail.udp.cl',
      administrador: true,
      //aportador: true,
      activo: true,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      nombre: 'Fabián',
      apellido: 'Miranda Muñoz',
      run: '18210844-k',
      username: 'fabian.miranda',
      password: 'admin',
      email : 'fabian.miranda@mail.udp.cl',
      administrador: true,
      //aportador: true,
      activo: true,
      createdAt : new Date(),
      updatedAt : new Date()
    }])
  }
};
