// express é uma biblioteca para criar servidor
const express = require('express');

const server = express();
const routes = require('./routes');

// usando template engine
server.set('view engine', 'ejs'); // todas as rotas do express serão em ejs

// habilitar arquivos estáticos
server.use(express.static('public'));

// usar o req.body
server.use(express.urlencoded({ extend: true })); // Libera a requisição do body

// routes
server.use(routes);

server.listen(3000, () => console.log('rodando'));
