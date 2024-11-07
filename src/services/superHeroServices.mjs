import SuperheroeRepository from "../repositories/SuperHeroRepository.mjs";

const repository = SuperheroeRepository

export function obtenerSuperheroePorId(id) {
    const superheroe = repository.obtenerPorId(id)
    return superheroe
}

export function obtenerTodoslosSuperheroes() {
    const superheroes = repository.obtenerTodos()
    return superheroes
}


export async function buscarSuperheroesPorAtributo(atributo, valor) {
    const superheroes = await repository.buscarPorAtributo(atributo, valor)
    return superheroes

}

export async function obtenerSuperheroesMayoresDe30() {
    const superheroes = await repository.obtenerMayoresDe30()
    return superheroes
}