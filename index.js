const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const api = require('./routes/api.routes');
dotenv.config();
const PORT = process.env.PORT || 3001;
const connectDB = require('./config/database');
connectDB();

app.use(cors());
app.use(express.json()); //Middleware para usar Json
app.use(express.urlencoded({extended: false}));
app.use('/',api); //Activar las rutas de la api

// Iniciar el servidor y escuchar el puerto indicado
app.listen(PORT, () =>{
    console.log(`Escuchando en el punto de entrada http://localhost:${PORT}`);
})