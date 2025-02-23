const Departamento = require('./../models/departamento.model');
const mongoose = require('mongoose');

const createDepartamento = async (req,res) => {
    const {codigo_departamento,nombre} = req.body;
    try {
        const nDepartamento = new Departamento({
            codigo_departamento: codigo_departamento,
            nombre: nombre
        });

        await nDepartamento.save();
        return res.status(200).json({msg:'Departamento añadido exitosamente'});
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg:'Error inesperado'});
    }
}

const readAllDepartamentos = async (req,res) => {
    try {
        const departamentos = await Departamento.find();
        return res.status(200).json({departamentos});
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg:'Error inesperado'});
    }
}

const updateDepartamento = async (req, res) => {
    const { codigo_departamento, nombre} = req.body;
console.log(nombre);

    try {
        await Departamento.updateOne({ codigo_departamento }, {
            nombre: nombre,
        });
        return res.status(200).json({ msg: 'Departamento actualizado exitosamente' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'Error inesperado' });
    }
}

const deleteDepartamento = async(req,res) =>{
    const {codigo_departamento} = {codigo_departamento : req.params.id};
    console.log(codigo_departamento);
    
    try {
        await Departamento.deleteOne({codigo_departamento});
        return res.status(200).json({msg:'Departamento eliminado exitosamente'});
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg:'Error inesperado'});
    }
}

module.exports = {createDepartamento,readAllDepartamentos,updateDepartamento,deleteDepartamento};