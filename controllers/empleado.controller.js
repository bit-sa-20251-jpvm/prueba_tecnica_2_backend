const Empleado = require('./../models/empleado.model');
const Departamento = require('./../models/departamento.model')
const mongoose = require('mongoose');

const getAllEmpleados = async (req,res) => {
    try {
        const empleados = await Empleado.find().populate('codigo_departamento');
        return res.status(200).json({empleados});
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg:'Error inesperado'});
    }
}

const createEmpleado = async (req,res) => {
    const {codigo,nombre,apellido1,apellido2,codigo_departamento} = req.body;
    
    try {
        const dep = await Departamento.findOne({codigo_departamento});
        const nEmpleado = new Empleado({
            codigo: codigo,
            nombre: nombre,
            apellido1: apellido1,
            apellido2: apellido2,
            codigo_departamento: dep._id
        });

        await nEmpleado.save();
        return res.status(200).json({msg:'Empleado añadido exitosamente'});
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg:'Error inesperado'});
    }
}

module.exports = {getAllEmpleados,createEmpleado};