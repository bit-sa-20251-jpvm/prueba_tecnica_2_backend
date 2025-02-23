const express = require('express');
const router = express.Router();
const {getAllEmpleados,createEmpleado} = require('./../controllers/empleado.controller');

router.get('/get-empleados',getAllEmpleados);
router.post('/create-empleado',createEmpleado);

module.exports = router;