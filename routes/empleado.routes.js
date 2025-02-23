const express = require('express');
const router = express.Router();
const { readAllEmpleados, createEmpleado, deleteEmpleado, updateEmpleado, findEmpleado } = require('./../controllers/empleado.controller');

router.post('/create-empleado', createEmpleado);
router.get('/read-empleados', readAllEmpleados);
router.put('/update-empleado', updateEmpleado);
router.delete('/delete-empleado/:id', deleteEmpleado);
router.get('/find-empleado/:id', findEmpleado);
module.exports = router;