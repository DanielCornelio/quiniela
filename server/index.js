import express from 'express';
import dotenv from 'dotenv';
import conectarDB from './config/db.js';
import partidoRoutes from './routes/partidoRoutes.js';
import pronosticoRoutes from './routes/pronosticoRoutes.js';

const app = express();
app.use(express.json());
dotenv.config();

conectarDB();

//Routing
app.use('/api/partidos', partidoRoutes);
app.use('/api/pronostico', pronosticoRoutes);


const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})