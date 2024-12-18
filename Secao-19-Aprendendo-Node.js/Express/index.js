let express = require('express');
let app = express();

app.get('/', function(req, res) {
  res.send('Primeira rota com Express');
});

app.get('/teste', function(req, res) {
  res.send('Testando rota');
});

app.listen(3000, function() {
  console.log("A aplicação está funcionando na porta 3000");
});

/*
node index.js
A aplicação está funcionando na porta 3000
*/

/*
http://localhost:3000/

Primeira rota com Express
*/