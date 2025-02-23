const express = require('express');
const router = express.Router();

// Lista de distintas rutas
const user = require('./user.routes');
const empleado = require('./empleado.routes');
const departamento = require('./departamento.routes');
const parentPath = '/api';

router.use(parentPath, user);
router.use(parentPath, empleado);
router.use(parentPath, departamento);
module.exports = router;