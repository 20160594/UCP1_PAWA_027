const animalModel = require('../models/animalModel');

module.exports = {
  getAllAnimals: (req, res) => {
    const animals = animalModel.getAll();
    res.render('animals/index', { animals });
  },

  showAddAnimal: (req, res) => {
    res.render('animals/add');
  },

  addAnimal: (req, res) => {
    const { name, species, age } = req.body;

    // Validasi input
    if (!name || !species || !age || isNaN(age)) {
      return res.status(400).send('Invalid input');
    }

    animalModel.add({ name, species, age });
    res.redirect('/');
  },

  showEditAnimal: (req, res) => {
    const animal = animalModel.getById(req.params.id);
    if (animal) {
      res.render('animals/edit', { animal });
    } else {
      res.status(404).render('404', { message: 'Animal not found' });
    }
  },

  editAnimal: (req, res) => {
    const { name, species, age } = req.body;
    const animalId = req.params.id;

    const animal = animalModel.getById(animalId);
    if (!animal) {
      return res.status(404).send('Animal not found');
    }

    animalModel.update(animalId, { name, species, age });
    res.redirect('/');
  },

  deleteAnimal: (req, res) => {
    const animalId = req.params.id;
    const animal = animalModel.getById(animalId);
    if (!animal) {
      return res.status(404).send('Animal not found');
    }

    animalModel.delete(animalId);
    res.redirect('/');
  }
};
