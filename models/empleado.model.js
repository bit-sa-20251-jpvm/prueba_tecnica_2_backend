const mongoose = require('mongoose');

const empleadoSchema = mongoose.Schema({
    codigo:{
        type: Number,
        required: true,
        unique: true
    },
    nombre:{
        type: String,
        required: true
    },
    apellido1:{
        type: String,
        required: true
    },
    apellido2:{
        type: String,
        required: true
    },
    departamento:{
        type: mongoose.Types.ObjectId, ref: "Departamentos",
        required: true
    }
})

module.exports = mongoose.model('Empleados', empleadoSchema);