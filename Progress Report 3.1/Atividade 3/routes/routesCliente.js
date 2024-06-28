const express = require('express')
const clienteController = require('../controllers/clientController')

const router = express.Router()

router.patch('/mudarNome/:id', clienteController.mudarNome)

router.get('/nome/:nome', clienteController.findtabelaClientesByName)

router.get('/mostrartodos', clienteController.getAllClient)
router.post('/criarusuario', clienteController.criarCliente)

router.get('/:id', clienteController.gettabelaCliente)
router.delete('/deletar/:id', clienteController.deletarCliente)


module.exports = router

