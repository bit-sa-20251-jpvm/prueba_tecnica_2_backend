const {Schema, model} = require('mongoose');

const departamentoSchema = Schema({
    codigo_departamento:{
        type: Number,
        required: true,
        unique: true
    },
    nombre:{
        type: String,
        required: true
    }
})

module.exports = model('Departamentos', departamentoSchema);