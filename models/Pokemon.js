const sequelize= require ("sequelize")

module.exports = (sequelize, Sequelize) => {
 const Pokemon = sequelize.define("Pokemon" , {
    Numero: Sequelize.STRING,
    Nome: Sequelize.STRING,
    Tipo: Sequelize.STRING,
    Geracao: Sequelize.STRING,
 });
 return Pokemon;
}