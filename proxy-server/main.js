// our proxy
var proxy = require('./lib/proxy')({port: 9000, xfwd: true });

// register the frontend server for proxying
proxy.register("localhost", "http://localhost:8081");

// register the backend server for proxying
proxy.register("localhost/service", "http://localhost:8080/service");

// register yahoo finance api via proxy
proxy.register("localhost/yahooapis", "http://query.yahooapis.com/v1/public");