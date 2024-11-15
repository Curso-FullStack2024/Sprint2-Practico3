import SuperHero from "../models/SuperHero.mjs";
import IRepository from "./IRepository.mjs";

class SuperHeroRepository extends IRepository {
    async obtenerPorId(id) {
        try {
            return await SuperHero.findById(id)

        } catch (error) {
            console.error(`se produjo un error: ${error} `)
        }
    }

    async obtenerTodos() {
        return await SuperHero.find({})
    }

    async buscarPorAtributo(atributo, valor) {
        //const query = { [atributo]: new RegExp(valor, 'i') }
        if(  !isNaN(valor)){

            const query = { [atributo]: valor }
            return await SuperHero.find(query)
        }
        else{ 
            const query = { [atributo]: new RegExp(valor, 'i') }
            return await SuperHero.find(query)
        }

    }

    async obtenerMayoresDe30() {
        return await SuperHero.find({ edad: { $gt: 30 }, planetaOrigen: 'Tierra', $expr: { $gte: [{ $size: "$poderes" }, 2] } })
    }
}
export default new SuperHeroRepository()