const josnserver = require("json-server");
const server = josnserver.create();
const router = josnserver.router('db.json');
const middleware  = josnserver.defaults();
const port = process.env.PORT || 8000;

server.use(middleware);
server.use(router);

server.listen(port);