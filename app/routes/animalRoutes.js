const express = require('express');
const router = express.Router();
const animalController = require('../controllers/animalController');

router.get('/', animalController.getAllAnimals);
router.get('/add', animalController.showAddAnimal);
router.post('/add', animalController.addAnimal);
router.get('/edit/:id', animalController.showEditAnimal);
router.post('/edit/:id', animalController.editAnimal);
router.post('/delete/:id', animalController.deleteAnimal);

module.exports = router;
