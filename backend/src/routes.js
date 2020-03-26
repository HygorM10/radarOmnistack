const { Router } = require('express');

const devController = require('./controllers/devController');
const searchController = require('./controllers/searchController')

const routes = Router();

routes.get('/devs', devController.index);
routes.post('/devs', devController.store);
routes.put('/devs', devController.update);
routes.delete('/devs', devController.destroyer);

routes.get('/search', searchController.index);

module.exports = routes; 