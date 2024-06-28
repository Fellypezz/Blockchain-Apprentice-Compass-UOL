const express = require('express')
const cidadeController = require('../controllers/cidadeController')

const router = express.Router()

router.get('/procurarNome/:nome', cidadeController.findCity)
router.get('/procurarEstado/:estado', cidadeController.findState)
router.get('/mostrarCidades', cidadeController.getCidades)
router.post('/criarCidade', cidadeController.criarCidade)

module.exports = router