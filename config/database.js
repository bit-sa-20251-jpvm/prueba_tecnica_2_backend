const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const url_mongo = process.env.MONGO_URL;

const connectDB = async() =>{
    try {
        await mongoose.connect(url_mongo);
        console.log('Conexion a la base de datos exitosa');
        
    } catch (error) {
        console.error(error);
        console.log('Error al conectarse a la base de datos');
    }
}

module.exports = connectDB;