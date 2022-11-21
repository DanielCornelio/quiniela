import express from 'express';

const router = express.Router();

import {registrar, updatePartido} from '../controllers/partidoController.js'

router.post('/registrar', registrar) // Registrar partido
router.put('/registrarMarcador/:id', updatePartido) // Registrar partido


export default router;