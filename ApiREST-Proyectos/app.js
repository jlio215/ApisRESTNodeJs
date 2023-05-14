const express = require('express')
const cors = require('cors')
const app = express()

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors({
    origin: '*'
}))

const proyecto = require('./routes/proyectos')

// middlewares
app.use('/api/proyectos', proyecto)

module.exports = app