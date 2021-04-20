'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Treinadors', { 
      id: {
        primaryKey: true,
        allowNull:false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      nome:{
        allowNull:false,
        type: Sequelize.STRING
      },
      idade:{
        allowNull:false,
        type: Sequelize.STRING
      },
      level:{
        allowNull:false,
        type: Sequelize.STRING
      },
      pokemonpreferido:{
        allowNull:false,
        type: Sequelize.STRING
      },
      createdAt :{
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt:{
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('treinadores');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
