const { Router } = require ('express')

const PokemonController = require ('../controllers/pokemoncontroller');
const TreinadorController = require('../controllers/treinadorcontroller');

const routes = Router();
// Rotas Pokemon
routes.get('/Pokemons',PokemonController.getAll);
routes.get('/pokemon/:id',PokemonController.getOne);
routes.post('/Pokemon',PokemonController.create);
routes.put('/pokemon/:id',PokemonController.update);
routes.delete('/pokemon/:id',PokemonController.delete);
routes.get('/PokemonsNome',PokemonController.getAllByNome);



// Rotas Treinador
routes.get('/Treinadores',TreinadorController.getAll);
routes.get('/treinador/:id',TreinadorController.getOne);
routes.post('/Treinador',TreinadorController.create);
routes.put('/treinador/:id',TreinadorController.update);
routes.delete('/treinador/:id',TreinadorController.delete);
routes.get('/TreinadorNome',TreinadorController.getAllByNome);

module.exports = routes