const express = require('express');
const router = express.Router();
const {getAllDepartamentos,createDepartamento,deleteDepartamento} = require('./../controllers/departamento.controller');

router.get('/get-departamentos',getAllDepartamentos);
router.post('/create-departamento',createDepartamento);
router.delete('/delete-departamento/:id',deleteDepartamento);
module.exports = router;