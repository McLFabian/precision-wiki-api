'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Archivo_Aportes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_aporte: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Aportes',
          key: 'id'
        }
      },
      nombre: {
        type: Sequelize.TEXT
      },
      descripcion: {
        type: Sequelize.TEXT
      },
      ruta: {
        type: Sequelize.TEXT
      },
      archivo: {
        type: Sequelize.TEXT
      },
      video: {
        type: Sequelize.TEXT
      },
      disponible: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Archivo_Aportes');
  }
};
