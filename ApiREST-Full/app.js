const express = require('express')
const cors = require('cors')
const app = express()

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors({
    origin: '*'
}))

const tipoProyecto = require('./routes/tipoProyecto')
const clientes = require('./routes/clientes')
const proyecto = require('./routes/proyectos')
const universidad = require('./routes/universidad')
const etapa = require('./routes/etapas')

// middlewares
app.use('/api/clientes', clientes)
app.use('/api/tiposProyectos', tipoProyecto)
app.use('/api/proyectos', proyecto)
app.use('/api/universidades', universidad)
app.use('/api/etapas', etapa)

module.exports = app