var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.send(req.query.nombre ? "<h1>Hola " + req.query.nombre + " !</h1>" : "<h1>Hola desconocido !</h1>");
});

app.listen(3000, () => console.log('Listening on port 3000!'));
