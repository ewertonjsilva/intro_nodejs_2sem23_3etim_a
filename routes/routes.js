const db = require('../database/connection'); 
const express = require('express'); 
const router = express.Router(); 

// referência a controllers que serão utilizados nas rotas
const MesasController = require('../controllers/mesas'); 


// definição das rotas
router.get('/mesas', MesasController.listarMesas); 
// post
// patch
// delete



module.exports = router;

