const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const animalRoutes = require('./app/routes/animalRoutes');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('public'));

// Templating engine
app.set('view engine', 'ejs');

// Routes
app.use('/', animalRoutes);

// Server
const PORT = 3360;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
