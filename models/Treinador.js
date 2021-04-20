const sequelize= require ("sequelize")

module.exports = (sequelize, Sequelize) => {
 const Treinador = sequelize.define("Treinador", {
    nome: Sequelize.STRING,
    idade: Sequelize.STRING,
    level: Sequelize.STRING,
    pokemonpreferido: Sequelize.STRING
 });
 return Treinador;
}