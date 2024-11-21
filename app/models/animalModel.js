const animals = [
    { id: '1', name: 'Lion', species: 'Panthera leo', age: 8 },
    { id: '2', name: 'Elephant', species: 'Elephas maximus', age: 25 }
  ];
  
  module.exports = {
    getAll: () => animals,
  
    getById: (id) => animals.find(animal => animal.id === id),
  
    add: (animal) => {
      animal.id = (animals.length + 1).toString();
      animals.push(animal);
    },
  
    update: (id, updatedAnimal) => {
      const index = animals.findIndex(animal => animal.id === id);
      if (index !== -1) {
        animals[index] = { id, ...updatedAnimal };
      }
    },
  
    delete: (id) => {
      const index = animals.findIndex(animal => animal.id === id);
      if (index !== -1) {
        animals.splice(index, 1);
      }
    }
  };
  