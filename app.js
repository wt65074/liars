var restify = require('restify');
function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

var server = restify.createServer();
server.use(restify.fullResponse());
server.use(restify.bodyParser());
server.use(restify.queryParser());

server.put('/', (req, res, next) => {

	res.send('hello')

});

var PORT = process.env.PORT || 8080;
server.listen(PORT, function() {
  console.log('%s listening at %s', server.name, server.url);
});