const {Schema, model} = require('mongoose');

const empleadoSchema = Schema({
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
    codigo_departamento:{
        type: mongoose.Types.ObjectId, ref: "Departamentos"
    }
})

module.exports = model('Empleados', empleadoSchema);