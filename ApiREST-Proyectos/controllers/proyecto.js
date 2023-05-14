const Proyecto = require('../models/proyecto')
const { request, response} = require('express')

// crear
const createProyecto = async (req = request, 
    res = response) => {
    try{
        const numero = req.body.numero 
            ? req.body.numero.toUpperCase()
            : ''
        const titulo = req.body.titulo 
            ? req.body.titulo.toUpperCase()
            : ''
        const tipoProyecto = req.body.tipoProyecto 
            ? req.body.tipoProyecto.toUpperCase()
            : ''
        const fecha_inciacion = req.body.fecha_inciacion 
            ? req.body.fecha_inciacion.toUpperCase()
            : ''
        const fecha_entrega = req.body.fecha_entrega 
            ? req.body.fecha_entrega.toUpperCase()
            : ''
        const valor = req.body.valor 
            ? req.body.valor.toUpperCase()
            : ''
        const cliente = req.body.cliente 
            ? req.body.cliente.toUpperCase()
            : ''
        const universidad = req.body.universidad 
            ? req.body.universidad.toUpperCase()
            : ''
        const etapa_del_proyecto = req.body.etapa_del_proyecto 
            ? req.body.etapa_del_proyecto.toUpperCase()
            : ''
        const proyectoDB = await Proyecto.findOne({numero})//select * from proyecto where numero=?
        
        if(proyectoDB){
            return res.status(400).json({msg: 'Ya existe'})
        }
        const data = {
            numero: numero,
            titulo: titulo,
            tipoProyecto: tipoProyecto,
            fecha_inciacion: fecha_inciacion,
            fecha_entrega: fecha_entrega,
            valor: valor,
            cliente: cliente,
            universidad: universidad,
            etapa_del_proyecto: etapa_del_proyecto
        }
        const proyecto = new Proyecto(data)
        console.log(proyecto)
        await proyecto.save()
        return res.status(201).json(proyecto)
    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

//TODO
const getProyectos = async (req = request, 
    res = response) => {
        try{
            const { estado } = req.query
            const proyectosDB = await Proyecto.find({estado})//select * from proyecto where estado=?
            return res.json(proyectosDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

//TODO
const updateProyectoByID = async (req = request,
    res = response) => {
    try{
        console.log(req.body)
        console.log(req.params)
        const data = req.body
        const id = req.params.id
        /*const proyectoDB = await Proyecto.findById(id)
        if(!proyectoDB){
            return res.json({msg: 'No existe el tipo Proyecto'})
        }*/
        data.fechaActualizacion = new Date()
        console.log(data)
        const proyecto = await Proyecto.findByIdAndUpdate(id, data, {new: true})
        return res.json(proyecto)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}

module.exports = { 
    createProyecto, 
    getProyectos, 
    updateProyectoByID
}