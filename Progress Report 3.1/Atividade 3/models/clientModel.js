const mongoose = require('mongoose');


const clienteEsquema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, 'Informe seu nome!'],
        unique: true,
    },
    genero: {
        type: String,
        enum: ['Homem', 'Mulher', 'Outro'],
        required: [true, 'Por favor informe seu genero:'],
    },
    aniversario: {
        type: Date,
        required: [true, 'Por favbor informe seu aniversário'],
    },
    cidade: {
        type: String,
        required: [true, 'Informe qual é a sua cidade'],
    },

})

clienteEsquema.statics.findByName = function (nome, callback) {
    return this.find({ nome: nome }, callback)
}

const tabelaCliente = mongoose.model('Tabela de Clientes', clienteEsquema)
module.exports = tabelaCliente