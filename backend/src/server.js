const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const server = express();

server.use(express.json());
server.use(cors());
server.use(routes);

server.get('/', function(require, response, next) {
    response.json({mensagem: 'Servidor Ativado'});
    next();
});

server.listen(3000, function() {
    console.log('%s ativado no endereco http://localhost:3000/api/calculadora/v1', server.name);
});