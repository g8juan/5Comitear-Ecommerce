const database = require('../database/database.js')
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
  return res.send('pong');
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

database.sync({force: true})
  .then(() => {
    http.createServer(app)
      .listen(process.env.PORT || 8000, () => {
        console.log("SERVER LISTENING AT PORT 8000")
      })
  });

 // database.sync({force: false}).then(() => {app.listen(8000, () => console.log('escuchando en puerto 8000'))})