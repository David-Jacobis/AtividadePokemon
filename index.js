const express =  require('express');
const routes = require('./routes/routes')
const app = express()
// const { Router } = require ('express')
// const PokemonController = require ('./controllers/pokemoncontroller');
// const routes = Router();
app.use(express.urlencoded({extended: false}))
app.use(routes);



app.listen(3000);