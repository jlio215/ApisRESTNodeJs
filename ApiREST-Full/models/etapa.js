const {Schema, model} = require('mongoose')

const EtapaSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre requerido']
    },
    anteproyecto: {
        type: String,
        required: [true, 'anteproyecto requerido'],
    },
    entrega_parcial_1: {
        type: String,
        required: [true, 'anteproyecto requerido'],
    },
    entrega_parcial_2: {
        type: String,
        required: [true, 'anteproyecto requerido'],
    },
    entrega_final: {
        type: String,
        required: [true, 'anteproyecto requerido'],
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    }
})

module.exports = model('Etapa', EtapaSchema)
