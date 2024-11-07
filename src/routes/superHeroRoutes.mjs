import express from "express";

import {
     obtenerSuperheroePorIdController, obtenerTodoslosSuperheroesController, buscarSuperheroesPorAtributoController,
     obtenerSuperheroesMayoresDe30Controller
} from '../controllers/superheroesController.mjs'


const router = express.Router()

router.get('/heroes', obtenerTodoslosSuperheroesController)
router.get('/heroes/id/:id', obtenerSuperheroePorIdController)
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController)
router.get('/heroes/mayoresDe30/', obtenerSuperheroesMayoresDe30Controller)

export default router;