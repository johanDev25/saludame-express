var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.send(req.query.nombre ? "Hola " + req.query.nombre + " !" : " Hola desconocido "+ "!");
});

app.listen(3000, () => console.log('Listening on port 3000!'));
