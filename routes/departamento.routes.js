const express = require('express');
const router = express.Router();
const { readAllDepartamentos, createDepartamento, deleteDepartamento, updateDepartamento } = require('./../controllers/departamento.controller');

router.post('/create-departamento', createDepartamento);
router.get('/read-departamentos', readAllDepartamentos);
router.put('/update-departamento', updateDepartamento);
router.delete('/delete-departamento/:id', deleteDepartamento);
module.exports = router;