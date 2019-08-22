const restify = require('restify');

const server = restify.createServer({
    name: 'scientific-calculator',
    version: '1.0.0'
});

//DEFININDO OS PLUGINS QUE SERÁ UTILIZADO NO RESTIFY
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());


server.get('/api/calculadora/v1', function(require, response, next) {
    response.json({mensagem:"Servidor ativado"});
    next();
});

server.listen(3000, function () {
    console.log('%s ativado no endereco http://localhost:3000/api/calculadora/v1', server.name);
});