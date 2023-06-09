const TipoProyecto = require('../models/tipoProyecto')
const { request, response} = require('express')

// crear
const createTipoProyecto = async (req = request, 
    res = response) => {
    try{
        const nombre = req.body.nombre 
            ? req.body.nombre.toUpperCase()
            : '' 
        const ensayo = req.body.nombre 
            ? req.body.ensayo.toUpperCase()
            : '' 
        const articulo = req.body.nombre 
            ? req.body.articulo.toUpperCase()
            : '' 
        const monografia = req.body.nombre 
            ? req.body.monografia.toUpperCase()
            : '' 
        const trabajo_final_de_pregrado = req.body.nombre 
            ? req.body.trabajo_final_de_pregrado.toUpperCase()
            : '' 
        const trabajo_final_de_especializacion = req.body.nombre 
            ? req.body.trabajo_final_de_especializacion.toUpperCase()
            : '' 
        const tipoProyectoDB = await TipoProyecto.findOne({nombre})//select * from tipoProyecto where nombre=?
        
        if(tipoProyectoDB){
            return res.status(400).json({msg: 'Ya existe'})
        }
        const data = {
            nombre: nombre,
            ensayo: ensayo,
            articulo: articulo,
            monografia: monografia,
            trabajo_final_de_pregrado: trabajo_final_de_pregrado,
            trabajo_final_de_especializacion: trabajo_final_de_especializacion
        }
        const tipoProyecto = new TipoProyecto(data)
        console.log(tipoProyecto)
        await tipoProyecto.save()
        return res.status(201).json(tipoProyecto)
    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

//TODO
const getTipoProyecto = async (req = request, 
    res = response) => {
        try{
            const { estado } = req.query
            const tipoProyectosDB = await TipoProyecto.find()//select * from tipoProyecto where estado=?
            return res.json(tipoProyectosDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

//TODO
const updateTipoProyectoByID = async (req = request,
    res = response) => {
    try{
        console.log(req.body)
        console.log(req.params)
        const data = req.body
        const id = req.params.id
        const tipoProyectoDB = await TipoProyecto.findById(id)
        if(!tipoProyectoDB){
            return res.json({msg: 'No existe el tipo Proyecto'})
        }
        data.fechaActualizacion = new Date()
        console.log(data)
        const tipoProyecto = await TipoProyecto.findByIdAndUpdate(id, data, {new: true})
        return res.json(tipoProyecto)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}

module.exports = { 
    createTipoProyecto, 
    getTipoProyecto, 
    updateTipoProyectoByID
}