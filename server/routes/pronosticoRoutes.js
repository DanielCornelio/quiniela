import express from 'express';

const router = express.Router();

import {registrarPronostico, listarPronosticos} from '../controllers/pronosticoController.js'

router.post('/registrarPronostico', registrarPronostico) // Registrar partido
router.get('/', listarPronosticos) // Registrar partido


export default router;