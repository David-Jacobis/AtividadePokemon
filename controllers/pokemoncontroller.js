const { Pokemon } = require ('../models');
const { Op } = require ('sequelize')
class PokemonController {

    async create(req,res){
        try{
            let pokemon = {
                Numero: Number(req.body.Numero),
                Nome: req.body.Nome,
                Tipo: req.body.Tipo,
                Geracao: Number(req.body.Geracao)
            }
           const PokemonResult = await Pokemon.create(pokemon)
           return res.status(200).json(PokemonResult)
        }catch (err){
            return res.status(400).json({error: err.mesage})
        }
    }
    async getAll(req,res){
        try{
            const pokemons =  await Pokemon.findAll();
            return res.status(200).json(pokemons);
        }
        catch (err){
            return res.status(400).json({error: err.mesage})
        }
    }
    async getOne(req,res){
        try{
            const pokemon =  await Pokemon.findByPk(req.params.id);
            return res.status(200).json(pokemon)
        }catch(err){
            return res.status(400).json({error: err.mesage})
        }
    }
    async update(req,res){
        try{
            const pokemon = await Pokemon.findByPk(req.params.id)
            if(pokemon){
            await pokemon.update(req.body);
                return res.status(200).json(pokemon)
            }
            else{
                return res.status(200).json({mensagem: "Pokemon não encontrado"})
            }
        }catch(err){
            return res.status(400).json({error: err.mesage})
        }
    }
    async delete(req,res){
        try{const pokemon = await Pokemon.findByPk(req.params.id)
            if(pokemon){
            await pokemon.destroy(req.body);
                return res.status(200).json(pokemon)
            }
            else{
                return res.status(200).json({mensagem: "Pokemon não encontrado para ser deletado"})
            }
        }
        catch{
            return res.status(400).json({error: err.mesage})
        }
    }
    async getAllByNome(req,res){
        let Nome = '%' + req.query.Nome + '%'
        try{
            const pokemons = await Pokemon.findAll({
                where: {
                   Nome: {
                       [Op.like]: Nome
                       //[Op.eq]://
                     }
                }
            });
            if (pokemons)
            return res.status(200).json(pokemons);
            else
            return res.status(200).json({mensagem: 'Não foram encontrados pokemons'})
        }
        catch{

        }
    }
}



module.exports = new PokemonController()