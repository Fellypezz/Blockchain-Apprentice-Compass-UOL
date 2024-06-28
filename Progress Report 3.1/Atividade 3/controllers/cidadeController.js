const tabeladeCidades = require('../models/cidadeModel')
const catchAsync = require('./../utils/catchAsync')
const APIFeatures = require('../utils/apiFeatures')

exports.criarCidade = catchAsync(async (req, res, next) => {
    const novaCidade = await tabeladeCidades.create({
        nome: req.body.nome,
        estado: req.body.estado,
    }

    )
    res.status(201).json({
        status: 'Sucesso',
        data: {
            novaCidade,
        },
    })
})

exports.findCity = catchAsync(async (req, res, next) => {
    const cidades = await tabeladeCidades.findCity(req.params.nome)

    if (!cidades) {
        return res.status(404).json({
            status: 'Erro',
            message: 'Não existe essa cidade',
        })
    }

    res.status(200).json({
        status: 'Sucesso',
        data: {
            cidades,
        },
    })
})

exports.findState = catchAsync(async (req, res, next) => {
    const cidades = await tabeladeCidades.findState(req.params.estado)

    res.status(200).json({
        status: 'Sucesso!',
        data: {
            cidades,
        },
    })
})

exports.getCidades = catchAsync(async (req, res, next) => {
    const city = new APIFeatures(tabeladeCidades.find(), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate()

    const cidade = await city.query

    res.status(200).json({
        status: 'Sucesso!',
        results: cidade.length,
        data: {
            cidade,
        },
    })
}) 