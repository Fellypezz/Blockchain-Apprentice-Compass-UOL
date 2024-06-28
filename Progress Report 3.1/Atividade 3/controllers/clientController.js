
const tabelaCliente = require('../models/clientModel')
const catchAsync = require('./../utils/catchAsync')

exports.getAllClient = catchAsync(async (req, res, next) => {
    const usuarios = await tabelaCliente.find()
    res.status(200).json({
        status: 'Sucesso',
        results: usuarios.length,
        data: {
            usuarios,
        },
    })
})

exports.mudarNome = catchAsync(async (req, res, next) => {
    const user = await tabelaCliente.findByIdAndUpdate(req.params.id, { nome: req.body.nome }, {
        new: true,
        runValidators: true,
    })

    if (!user) {
        return res.status(404).json({
            status: 'Erro',
            message: 'Usuário não encontrado com este ID',
        });
    }

    res.status(200).json({
        status: 'Completo',
        data: {
            user,
        },
    })
})

exports.gettabelaCliente = catchAsync(async (req, res, next) => {
    const usuarios = await tabelaCliente.findById(req.params.id)

    if (!usuarios) {
        return res.status(404).json({
            status: 'ERRO!!',
            message: 'Usuário não encontrado por meio deste ID!!"',
        })
    }

    res.status(200).json({
        status: 'SUCESSO!!',
        data: {
            usuarios,
        },
    })
})

exports.findtabelaClientesByName = catchAsync(async (req, res, next) => {
    const usuarios = await tabelaCliente.findByName(req.params.nome)

    if (!usuarios) {
        return res.status(404).json({
            status: 'ERRO!',
            message: 'Não foi encontrado um usuário com este ID',
        })
    }

    res.status(200).json({
        status: 'Sucesso',
        data: {
            usuarios,
        },
    })
})

exports.deletarCliente = catchAsync(async (req, res, next) => {
    await tabelaCliente.findByIdAndDelete(req.params.id)

    res.status(204).json({
        status: 'Sucesso',
        data: null,
    })
})

exports.criarCliente = catchAsync(async (req, res, next) => {
    const novoU = await tabelaCliente.create({
        nome: req.body.nome,
        genero: req.body.genero,
        aniversario: req.body.aniversario,
        cidade: req.body.cidade,
    }

    )
    res.status(201).json({
        status: 'Sucesso',
        data: {
            novoU,
        },
    })
})