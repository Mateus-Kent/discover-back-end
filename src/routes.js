// express é uma biblioteca para criar servidor
const express = require('express');

const routes = express.Router(); // cria rotas

const ProfileController = require('./controllers/ProfileController');

const JobController = require('./controllers/JobControllers');

const DashboardController = require('./controllers/DashboardController');

// get = buscar 
//post = salvar
//put = alterar 

routes.get('/', DashboardController.index);

routes.get('/job', JobController.create);

routes.post('/job', JobController.save);

routes.get('/job/:id', JobController.show);

routes.post('/job/:id', JobController.update);

routes.post('/job/delete/:id', JobController.delete);

routes.get('/profile', ProfileController.index);

routes.post('/profile', ProfileController.update);

module.exports = routes;
