const {createServer} = require('http');

let server = createServer((request, response) => {

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(`
    <h1>Hello World!</h1>
    <p>Primeira página com Node.js</p>
  `);
  response.end();

});

server.listen(8000);

console.log("Ouvindo a porta 8000");

/*
node index.js
Ouvindo a porta 8000
*/

/*
http://localhost:8000/

Hello World!
Primeira pÃ¡gina com Node.js
*/