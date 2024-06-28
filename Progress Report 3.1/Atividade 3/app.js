const express = require('express')
const routesCliente = require('./routes/routesCliente')
const routesCidade = require('./routes/routesCidade')

const app = express()

app.use(express.json())

app.use(express.static(`${__dirname} / public`))

app.use('/api/clientes', routesCliente)
app.use('/api/cidades', routesCidade)
module.exports = app
