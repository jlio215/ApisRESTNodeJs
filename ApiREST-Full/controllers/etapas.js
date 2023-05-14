const Etapa = require('../models/etapa')
const { request, response} = require('express')

// crear
const createEtapa = async (req = request, 
    res = response) => {
    try{
        const nombre = req.body.nombre 
            ? req.body.nombre.toUpperCase()
            : ''
        const anteproyecto = req.body.nombre 
            ? req.body.anteproyecto.toUpperCase()
            : ''
        const entrega_parcial_1 = req.body.nombre 
            ? req.body.entrega_parcial_1.toUpperCase()
            : ''
        const entrega_parcial_2 = req.body.nombre 
            ? req.body.entrega_parcial_2.toUpperCase()
            : ''
        const entrega_final = req.body.nombre 
            ? req.body.entrega_final.toUpperCase()
            : ''
        const etapaDB = await Etapa.findOne({nombre})//select * from etapa where nombre=?
        
        if(etapaDB){
            return res.status(400).json({msg: 'Ya existe'})
        }
        const data = {
            nombre: nombre,
            anteproyecto: anteproyecto,
            entrega_parcial_1: entrega_parcial_1,
            entrega_parcial_2: entrega_parcial_2,
            entrega_final: entrega_final
        }
        const etapa = new Etapa(data)
        console.log(etapa)
        await etapa.save()
        return res.status(201).json(etapa)
    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

//TODO
const getEtapas = async (req = request, 
    res = response) => {
        try{
            const { estado } = req.query
            const etapasDB = await Etapa.find({estado})//select * from etapa where estado=?
            return res.json(etapasDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

//TODO
const updateEtapaByID = async (req = request,
    res = response) => {
    try{
        console.log(req.body)
        console.log(req.params)
        const data = req.body
        const id = req.params.id
        /*const etapaDB = await Etapa.findById(id)
        if(!etapaDB){
            return res.json({msg: 'No existe el tipo Proyecto'})
        }*/
        data.fechaActualizacion = new Date()
        console.log(data)
        const etapa = await Etapa.findByIdAndUpdate(id, data, {new: true})
        return res.json(etapa)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}

module.exports = { 
    createEtapa, 
    getEtapas, 
    updateEtapaByID
}