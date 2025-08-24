
const express = require('express'); 
const router = express.Router(); 
const missionController = require('../controllers/missionController'); 

router.get('/', (req, res) => {
    res.status(200).json({message: 'Seja bem-vindo a API de missões espaciais, desenvolvida para o #7daysOfCode !'}); 
}); 

//rota para a criação de missões 
router.post('/missions', missionController.createMisison); 
//rota para pegar todas as missões
router.get('/missions', missionController.getMission); 
//rota para pegar missões por ID
router.get('/missions/:id', missionController.getMissionById); 

module.exports = router; 