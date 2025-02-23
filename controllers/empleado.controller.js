const Empleado = require('./../models/empleado.model');
const Departamento = require('./../models/departamento.model')
const mongoose = require('mongoose');

const createEmpleado = async (req, res) => {
    const { codigo, nombre, apellido1, apellido2, codigo_departamento } = req.body;

    try {
        const dep = await Departamento.findOne({ codigo_departamento });
        const nEmpleado = new Empleado({
            codigo: codigo,
            nombre: nombre,
            apellido1: apellido1,
            apellido2: apellido2,
            departamento: dep._id
        });

        await nEmpleado.save();
        return res.status(200).json({ msg: 'Empleado añadido exitosamente' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'Error inesperado' });
    }
}

const readAllEmpleados = async (req, res) => {
    try {
        const empleados = await Empleado.find().populate('departamento');
        return res.status(200).json({ empleados });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'Error inesperado' });
    }
}

const updateEmpleado = async (req, res) => {
    const { codigo, nombre, apellido1, apellido2, codigo_departamento } = req.body;

    try {
        const dep = await Departamento.findOne({ codigo_departamento });

        await Empleado.updateOne({ codigo }, {
            nombre: nombre,
            apellido1: apellido1,
            apellido2: apellido2,
            departamento: dep._id
        });
        return res.status(200).json({ msg: 'Empleado actualizado exitosamente' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'Error inesperado' });
    }
}

const deleteEmpleado = async (req, res) => {
    const { codigo } = { codigo: req.params.id };
    console.log(codigo);

    try {
        await Empleado.deleteOne({ codigo });
        return res.status(200).json({ msg: 'Empleado eliminado exitosamente' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'Error inesperado' });
    }
}

const findEmpleado = async (req, res) => {
    const { codigo } = { codigo: req.params.id };
    if (!codigo) {
        return res.status(400).json({ msg: 'Ingrese el codigo del empleado que desea buscar' });
    }

    try {
        const dbEmployee = await Empleado.findOne({ codigo }).populate('departamento');
        if (!dbEmployee) {
            return res.status(400).json({ msg: 'El empleado no está en el sistema' });
        }
        return res.status(200).json({
            Empleado: {
                Nombre: dbEmployee.nombre,
                Apellido: dbEmployee.apellido1,
                Departamento: dbEmployee.departamento.nombre
            }
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'Error inesperado' });
    }
}


module.exports = { createEmpleado, readAllEmpleados, updateEmpleado, deleteEmpleado, findEmpleado };