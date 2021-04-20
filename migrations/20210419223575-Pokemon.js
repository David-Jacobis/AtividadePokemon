'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pokemons', {
        id:{
          primaryKey: true,
          allowNull:false,
          autoIncrement: true,
          type: Sequelize.INTEGER
        },
        Numero:{
          allowNull: false,
          type: Sequelize.STRING
        },
        Nome:{
          allowNull: false,
          type: Sequelize.STRING
        },
        Tipo: {
          allowNull: false,
          type: Sequelize.STRING
        },
        Geracao: {
          allowNull: false,
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
    await queryInterface.dropTable('pokemons');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
