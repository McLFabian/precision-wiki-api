'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Aporte_Cursos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_curso: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Cursos',
          key: 'id'
        }
      },
      id_aporte: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Aportes',
          key: 'id'
        }
      },
      disponible: {
        allowNull: false,
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
    return queryInterface.dropTable('Aporte_Cursos');
  }
};
