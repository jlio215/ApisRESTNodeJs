const {Schema, model} = require('mongoose')

const TipoProyectoSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre requerido']
    },
    ensayo: {
        type: String,
        required: [true, 'Ensayo requerido']
    },
    articulo: {
        type: String,
        required: [true, 'Articulo requerido']
    },
    monografia: {
        type: String,
        required: [true, 'monografia requerido']
    },
    trabajo_final_de_pregrado: {
        type: String,
        required: [true, 'trabajo_final_de_pregrado requerido']
    },
    trabajo_final_de_especializacion: {
        type: String,
        required: [true, 'trabajo_final_de_especializacion requerido']
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

module.exports = model('TipoProyecto', TipoProyectoSchema)
