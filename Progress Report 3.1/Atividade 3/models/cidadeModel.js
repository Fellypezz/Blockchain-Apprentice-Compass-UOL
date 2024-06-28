const mongoose = require('mongoose');

const cidadeE = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, 'Informe o nome da cidade!'],
        unique: true,
    },

    estado: {
        type: String,
        required: [true, 'Informe o estado!'],
    }

})

cidadeE.statics.findCity = function (nome, callback) {
    return this.find({ nome: nome }, callback)
}

cidadeE.statics.findState = function (estado, callback) {
    return this.find({ estado: estado }, callback)
}

const tabeladeCidades = mongoose.model('Tabela de Cidades', cidadeE)
module.exports = tabeladeCidades