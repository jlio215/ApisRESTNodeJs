const { Schema, model} = require('mongoose')

const ProyectoSchema = Schema({
    numero: {
        type: String,
        required: [true, 'Numero requerido'],
        unique: [true, 'Proyecto creado']
    },
    titulo: {
        type: String,
        required: [true, 'titulo requerido']
    },
    tipoProyecto: {
        type: Schema.Types.ObjectId,
        ref: 'TipoProyecto',
        required: true
    },
    fecha_inciacion: {
        type: Date,
        required: true
    },
    fecha_entrega: {
        type: Date,
        required: true
    },
    valor: {
        type: String,
        ref: 'valor',
        required: true
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    universidad: {
        type: Schema.Types.ObjectId,
        ref: 'universidad',
        required: true
    },
    etapa_del_proyecto: {
        type: String,
        ref: 'etapa_del_proyecto',
        required: true
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

module.exports = model('Proyecto', ProyectoSchema)
